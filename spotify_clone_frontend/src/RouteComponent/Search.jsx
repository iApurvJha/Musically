import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { unAuthenticatedGetRequest } from '../Utils/routeHelper';
import {useCookies} from 'react-cookie'
import Music from './SharedComponents/Music';

function Search() {
    const [songName,setSongName]=useState("")
    const [cookie,setCookie]= useCookies(["token"])
    const [songData,setSongData]= useState([])

    function updateSongName(e){
        setSongName(e.target.value)
    }

    async function getSong(){
            console.log(`song name form frontend ${songName}`)
            const response = await unAuthenticatedGetRequest(
                `/song/name?songName=${songName}`,
                cookie.token
            )
            if(!response.error){
                setSongData(response)
            }
            else{
                console.log(response.error)
            }
a
       
    }
  return (
    <>
        <div className='searchOuterDiv'>
            <div className='searchInnerDiv' >
                <span onClick={getSong} ><Icon icon="iconamoon:search" width="3rem" height="2rem"  style={{color: "white"}} /></span>
                <input  onChange={updateSongName} value={songName} className='searchInput' placeholder='what do you want to listen'></input>
            </div>
        </div>
        {songData.length>0?
        <div  >{songData.map((item,ind)=>{
            return(
                <Music key={ind} songName={item.songName} thumbnail={item.thumbnail} artistFName={item.artist.firstName} track={item.track} />
            )
        })}</div>:
        <div>No song to display</div>}
        </>
  )
}

export default Search
