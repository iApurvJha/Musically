import React, { useState } from 'react'
import { AuthenticatedPostRequest } from '../Utils/routeHelper'
import {useCookies} from 'react-cookie'

function Modal({setModal}) {
    const [playlistName,setPlaylistName]=useState("")
    const [thumbnail,setThumbnail]=useState("")
    const [cookie,setCookie]= useCookies(["token"])

    function updatePlaylistName(e){
        setPlaylistName(e.target.value)
    }
    function updateThumbnail(e){
        setThumbnail(e.target.value)
    }
    async function createPlaylist(){
        const track = []
        const data ={playlistName,thumbnail,track}
        const response = AuthenticatedPostRequest(
            "/playlist/create",
            data,
            cookie.token
        )
        console.log(response)
        if(!response.error){
            alert('succes')
            setModal(false)
        }

    }
  return (
    <div onClick={()=>{
        setModal(false)
    }} className='modalOuterDiv'>
        
        <div onClick={(e)=>{
            e.stopPropagation()

        }} className='createPlaylistCard'>
            <h1>Create Playlist</h1>
            <div  className='fields'>
                <label>Playlist Name</label>
                <input onChange={updatePlaylistName}  className='searchInputModal' placeholder='Enter playlist name'></input>
                <label>Thumbnail</label>
                <input onChange={updateThumbnail} className='searchInputModal' placeholder='Enter thumbnail link'></input>
            </div>
            <div onClick={createPlaylist} className='loginButtonDiv'><button className='loginButton'>Submit</button></div>
        </div>
    </div>
  )
}

export default Modal
