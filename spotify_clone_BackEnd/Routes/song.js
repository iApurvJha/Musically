import express from "express"
import passport from "passport"
import songModel from "../Models/Song.js"


const route = express.Router()


route.post("/createSong",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    //req.user get's the user because of the passport.authencticate
    const {songName,thumbnail,track}=req.body
    if(!songName || !thumbnail || track){
        res.status(301).json({"error":"insufficient details to create a song"})
    }

    const artist = req.user._id
    const songDetails = {songName,thumbnail,track}
    const createdSong = songModel.create(songDetails)
    res.status(200).json(createdSong)
})


export default route