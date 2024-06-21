import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Music from './SharedComponents/Music'
import { useState,useEffect } from 'react'
import { unAuthenticatedGetRequest } from '../Utils/routeHelper'
import {useCookies} from 'react-cookie'

function Mymusic(props) {
    const [songData,setSongData]=useState([])
    const [cookie,setCookie]= useCookies(["token"])

    // const playSong=(songSrc)=>{
    //     var sound = new Howl({
    //         src: [songSrc],
    //         html5: true
    //       });
          
    //       sound.play();
    // }
    useEffect((()=>{
        const getSong=async ()=>{
            const response = await unAuthenticatedGetRequest("/song/all-mySongs",cookie.token)
            console.log(response.data)
            console.log("hello")
            // console.log(typeof(response.data))
            console.log(Array.isArray(response.data));
            setSongData(response.data)


        }
        getSong()
    }),[])
  return (
        <div className='homeOuterDiv'>
            <SideBar isAuthenticated={props.isAuthenticated} />
            <div className='remainingScreen'>
                <NavBar isAuthenticated={props.isAuthenticated} />
                <div className='myMusicHeading'>
                    My Songs
                </div>
                {songData.map((item,ind)=>{
                    return <Music key={ind} songName={item.songName} thumbnail={item.thumbnail} artistFName={item.artist.firstName} />
                })}
            </div>

        </div>

  )
}

export default Mymusic
