import React from 'react'
import { useEffect,useState } from 'react'
import { unAuthenticatedGetRequest } from '../Utils/routeHelper'
import { useCookies } from 'react-cookie'
import Music from '../RouteComponent/SharedComponents/Music'
import songContext from '../Context/SongContext';
import { useContext } from 'react'
import { AuthenticatedPostRequest } from '../Utils/routeHelper'


function PlaylistModal({setPlaylistModal}) {
    const [cookie,setCookie]=useCookies(['token'])
    const [playlists,setPlaylists]=useState([])
    const {currSong,setCurrentSong}=useContext(songContext)
    
    useEffect(()=>{
        async function getMyPlaylists(){
            const response = await unAuthenticatedGetRequest("/playlist/get/allmyplaylists",
                cookie.token
            )
            console.log("i am playlist")
            console.log(response)
            setPlaylists(response)
        
        }

        getMyPlaylists()
    
    },[])

    async function addSongToPlaylist(playlistId){
        const songId = currSong._id
        const data = {playlistId,songId}
        const response = await AuthenticatedPostRequest("/playlist/add/song",data,cookie.token)
        if(response.error){
            console.log(`i am error ${response.error}`)
        }
        else{
            alert("Sucess")
            setPlaylistModal(false)
        }
    
    
      }
  return (
    <div  onClick={()=>{
        setPlaylistModal(false)
    }} className='modalOuterDiv'>
        <div onClick={(e)=>{
            e.stopPropagation()

        }}>
            <div  className='createPlaylistCard homeCard'>
                <div >
                    {playlists.map((item,index)=>{
                        return <div onClick={()=>{
                            console.log(`called add song to playlist method`)
                            addSongToPlaylist(item._id)

                        }}>
                        <Music key={index} thumbnail={item.thumbnail} songName={item.playlistName} />
                        </div>
                    })}
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default PlaylistModal
