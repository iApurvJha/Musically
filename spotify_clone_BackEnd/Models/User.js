import mongoose from "mongoose";

const user=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likedSongs:{
        type:String,
        default:""
    },
    likedPlaylists:{
        type:String,
        default:""
    },
    subscribedArtist:{
        type:String,
        default:""
    }

})

const userModel=mongoose.model("User",user)

// module.exports = userModel
export default userModel