import mongoose from "mongoose";

const song=mongoose.Schema({
    songName:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    track:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }


})

const songModel=mongoose.model("Song",song)

module.exports = songModel