# mongoose-fuzzy-search

[Mongoose](https://mongoosejs.com) plugin which adds fuzzy search capabilities on a Model based on [trigrams](https://en.wikipedia.org/wiki/Trigram) sequence similarity

## Usage

### installation

``npm i --save mongoose-fuzzy-search``

### Apply to a model

```Javascript
import fuzzy from 'mongoose-fuzzy-search';

const schema = new mongoose.Schema('User', {
    firstname: String,
    lastname: String
});

// add the plugin to the model and specify new fields on your schema to hold the trigrams projected 
schema.plugin(fuzzy, {
   fields:{
       lastname_tg: 'lastname', // equivalent to (doc) => doc.get('lastname')
       fullname_tg: (doc) => [doc.get('firstname'), doc.get('lastname') ].join(' ') 
   }
})
const User = mongoose.model('User', schema);

const user = new User({
    firstname: 'Laurent',    
    lastname: 'Renard',    
})


await user.save();
```

The saved document will be:

```JSON
{
    "firstname": "Laurent",    
    "lastname": "Renard",
    "lastname_tg":["  r"," re","ren","ena","nar","ard","rd ","d  "],      
    "fullname_tg":["  l"," la","lau","aur","ure","ren","ent","nt ","t  ","  r"," re","ren","ena","nar","ard","rd ","d  "]      
}
```

Note: when using a string, it is equivalent to a function returning the value of the document at the matching path.

### Search

The ``fuzzy`` static method returns a [Aggregate](https://mongoosejs.com/docs/api/aggregate.html) matching the documents which have at least one matching trigram with the query and their [similarity score](#similarity-score). You can then decide to extend the pipeline: filter out, sort them, etc

```Javascript
const result = await User.fuzzy('renart') // (.sort(), etc)
// > [{ document: <the document>, similiarity: <the similarity score> }]
```

#### similarity score

The _similarity score_ is calculated by dividing the size of the intersection set between the query and the document field trigrams, and the size of the trigrams set for the query.

#### change the weight of the different fields

When passing a string, the pipeline calculate the similarity for each trigram field and return the mean. 
However, you can combine various queries and give different weights to each of them:

```Javascript
const results = await User.fuzzy({
            lastname_tg: {
                searchQuery: 'Renard' 
            },
            fullname_tg: {
                searchQuery: 'repnge',
                weight: 20
            }
});
```

### Notes

This plugin does not: 
* add any index: it is up to you
* remove stop words (which are usually language specific): you can still transform an argument before you pass it to the trigram function using the field options

This plugin does:
* add **Document** middleware on ``save`` and ``insertMany`` middleware in order to update the trigram fields on your documents on insert/update.
* lowercase, deburr, split in words and concat each word trigram into a unique set

This plugin is adapted for searches when relative strings length difference does not matter much (ideal for short string like emails, names, titles, etc), when the strings have no or very little semantic (like names etc).  
Otherwise, you might consider using another solution such as the [native mongodb text index](https://docs.mongodb.com/manual/text-search/) or a different database
