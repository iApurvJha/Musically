import express from "express"
import playlistModel from "../Models/Playlist.js"
import songModel from "../Models/Song.js"
import User from "../Models/User.js"
const route = express.Router()

route.post("/create",async (req,res)=>{
    const {playlistName,thumbnail,track}=req.body
    if(!playlistName || !thumbnail || !track){
        res.status(400).json({"error":"Insufficient data"})
    }
    const owner = req.user._id
    const collaborator = []
    const playlist={playlistName,thumbnail,track,owner,collaborator}
    const createdPlaylist = await playlistModel.create(playlist)
    res.status(200).json(createdPlaylist)


})
//get a particular playlist by playlist id
route.get("/playlist/:playlistId",async (req,res)=>{
    const playlistId = req.params.playlistId
    if(!playlistId){
        res.status(301).json({"error":"Insufficient Data"})
    }

    const playlist = await playlistModel.findOne({_id:playlistId})
    res.status(200).json(playlist)
})


//get a playlist of an artist by an artist id
route.get("/artist/playlists/:artistId",async (req,res)=>{
    const artistId = req.params.artistId
    const artist = await User.find({_id:artistId})
    if(!artist){
        res.status(301).json({"error":"No such artist exist"})
    }


    const playlists = await playlistModel.find({owner:artistId})
    if(!playlists){
        res.status(301).json({"error":"No such artist exist"})

    }
    res.status(200).json(playlists)

})

//add a song to an existing playlist
//we will recieve an songId and an playlistId form the user to perform this operation
route.post("/playlist/add",async(req,res)=>{
    const {playlistId,songId}=req.body
    const currUser = req.user._id

    const playlist = await playlistModel.find({_id:playlistId})
    if(!playlistId){
        res.status(401).json({"error":"No such playlist exist"})
    }
    if(currUser!=playlist.owner && !playlist.collaborator.includes(currUser)){
        res.status(401).json({"error":"Acess Denied"})
        
    }
    const song = await songModel.findOne({_id:songId})
    
    if(!song){
        res.status(401).json({"error":"No such song exist"})
    }
    playlist.track.push(songId)
    await playlist.save()
    
    res.status(200).json(playlist)


    

})

export default route