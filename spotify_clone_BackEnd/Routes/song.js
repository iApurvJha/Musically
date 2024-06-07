import express from "express"
// import passport from "passport"
import songModel from "../Models/Song.js"


const route = express.Router()


route.post("/create",async (req,res)=>{
    //req.user get's the user because of the passport.authencticate
    const {songName,thumbnail,track}=req.body
    if(!songName || !thumbnail || !track){
        res.status(401).json({"error":"insufficient details to create a song"})
    }

    const artist = req.user._id
    const songDetails = {songName,thumbnail,track,artist}
    const createdSong = await songModel.create(songDetails)
    res.status(200).json(createdSong)
})

route.get("/all-mySongs",async (req,res)=>{
    const currentUser = req.user
    const songs = await songModel.find({artist:currentUser._id})
    res.status(200).json({data:songs})
})

//Route to get the song by artist id 

route.get("/artist/:artistId",async (req,res)=>{
    const artistId = req.params.artistId
    const songsList=await songModel.find({artist:artistId})
    if (songsList.length === 0) {
        return res.status(404).json({ error: "No songs found for the artist" });
    }
    res.status(200).json(songsList)

})

//Route to get song by songName

route.get("/name",async (req,res)=>{
    const songName = req.query.songName
    if(!songName){
        res.status(400).json({"error":"Insuficient data to search"})
    }

    const songs = await songModel.find({songName:songName})
    if (songs.length === 0) {
        return res.status(404).json({ error: "No songs found for the artist" });
    }
    res.status(200).json(songs   )

})


export default route