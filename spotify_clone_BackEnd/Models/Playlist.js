import mongoose from "mongoose";

const playlist=mongoose.Schema({
    playlistName:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    track:[{
        type:mongoose.Types.ObjectId,
        ref:"Song"
    }],
    collaborator:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
        
    }]
})

const playlistModel=mongoose.model("Playlist",playlist)

// module.exports = userModel
export default  playlistModel