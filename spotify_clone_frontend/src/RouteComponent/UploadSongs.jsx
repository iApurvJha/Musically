import React, { useState } from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import {useCookies} from 'react-cookie'
import CloudinaryUploadWidget from '../Utils/CloudinaryUploadWidget'
import { AuthenticatedPostRequest } from '../Utils/routeHelper'
import { useNavigate } from 'react-router-dom'


function UploadSongs(props) {
  const navigate=useNavigate()
  const [songName,setSongName]=useState("")
  const [thumbnail,setThumbnail]=useState("")
  const [track,setTrack]=useState("")
  const [filename,setFilename]=useState("")
  const [cookie,setCookie]= useCookies(["token"])

  function updateSongName(e){
    setSongName(e.target.value)
  }
  function updateThumbnail(e){
    setThumbnail(e.target.value)

  }

  async function createSong(){
    const data = {songName,thumbnail,track}
    const songDetail= await AuthenticatedPostRequest("/song/create",data,cookie.token)

    if(songDetail && !songDetail.error){
      console.log(songDetail)
      alert("sucess")
      navigate("/mymusic")

    }
    else{
      alert(`${songDetail.error}`)
    }



  }

  return (
    <>
           <div className='uploadSongBackground'>
                  <div className='uploadSongHeading'>
                    Upload your songs
                  </div>
                  <div className='uploadSongInput'>
                    <h1>Song Name</h1>
                    <h1>Thumbnail</h1>
                  </div>
                  <div className='uploadSongInput'>
                    <input onChange={updateSongName} placeholder='song name' className='emailInput' type='text'></input>
                    <input onChange={updateThumbnail} placeholder='thumbnail link' className='emailInput' type='text'></input>
                  </div>
                  <CloudinaryUploadWidget setFilename={setFilename} filename={filename} setTrack={setTrack} songName={songName} />
                  <div onClick={createSong} className='loginButtonDiv'>
                    <button  className='loginButton'>Upload Song</button>
                  </div>
            </div>
    </>   
  )
}

export default UploadSongs
