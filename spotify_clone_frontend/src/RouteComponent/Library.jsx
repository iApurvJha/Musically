import React from 'react'
import { useEffect,useState } from 'react'
import { unAuthenticatedGetRequest } from '../Utils/routeHelper'
import { useCookies } from 'react-cookie'
import Card from './SharedComponents/Card'



function Library() {
    const [cookie,setCookie]=useCookies(['token'])
    const [playlists,setPlaylists]=useState([])

    useEffect(()=>{
        async function getMyPlaylists(){
            const response = await unAuthenticatedGetRequest("/playlist/get/allmyplaylists",
                cookie.token
            )
            console.log(response)
            setPlaylists(response)
        
        }
        getMyPlaylists()
    
    },[])
  return (
    <>
    <h1 style={{padding:"0.5rem"}}>Your Library</h1>
    {playlists.length>0?<div className='cardWrapper homeCard'>
        {playlists.map((item,index)=>{
            return <Card key={index} thumbnail={item.thumbnail} playlistName={item.playlistName} />
        })}
      
    </div>:"No Playlist Created Yet"}
    </>
  )
}

export default Library
