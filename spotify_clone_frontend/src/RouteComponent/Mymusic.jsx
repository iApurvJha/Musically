import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Music from './SharedComponents/Music'
import { useState,useEffect } from 'react'
import { unAuthenticatedGetRequest } from '../Utils/routeHelper'
import {useCookies} from 'react-cookie'
import PlayMusic from './PlayMusic'
import MusicWrapper from './SharedComponents/MusicWrapper'

function Mymusic() {
    const [songData,setSongData]=useState([])
    const [cookie,setCookie]= useCookies(["token"])

        
    

    useEffect((()=>{
        const getSong=async ()=>{
            const response = await unAuthenticatedGetRequest("/song/all-mySongs",cookie.token)
            // console.log(`i am sond id in the mymusic component ${response}`)
            // console.log(response.data[0]._id)
            // console.log(typeof(response.data))
            setSongData(response.data)
            // console.log(`i am fetch data ${response.data}`)


        }
        getSong()
    }),[])
  return (
        <>
        

                <div className='myMusicHeading'>
                    My Songs
                </div>
                    {songData.map((item,ind)=>{
                        return <Music key={ind} songName={item.songName} thumbnail={item.thumbnail} artistFName={item.artist.firstName} track={item.track} _id={item._id} />
                    })}


        </>
  )
}

export default Mymusic
