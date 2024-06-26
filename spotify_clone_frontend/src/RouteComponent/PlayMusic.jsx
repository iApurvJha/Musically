import React from 'react'
import Music from './SharedComponents/Music'
import { useState, useEffect } from 'react'
import {Howl, Howler} from "howler"
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import songContext from '../Context/SongContext';


function PlayMusic({setPlaylistModal}) {
  const [songData,setSongData]=useState([])
  const [songPlayed,setSongPlayed]=useState(null)
  const [isPlaying,setIsPlaying]=useState(false)
  const {currSong,setCurrentSong}=useContext(songContext)
  // console.log("i am cursong")
  // console.log(`i am currsonId ${currSong._id}`)
  // console.log(currSong)

  useEffect(()=>{
    if(!currSong){
      return
    }
    changeSong(currSong.track)
  },[currSong])



  const playSound=()=>{
    if(!songPlayed){
      return 
    }
    songPlayed.play()
  }
  const changeSong=(sngSrc)=>{
    if(songPlayed){
      songPlayed.stop()
    }
    let sound = new Howl({
      src:[sngSrc],
      html5:true
    })
    setSongPlayed(sound)
    sound.play()
    setIsPlaying(true)
  }

  const pauseSound = ()=>{
    songPlayed.pause()

  }


  function songToggle(){
    if(!isPlaying){
      playSound()
      setIsPlaying(true)


    }
    else{
      pauseSound()
      setIsPlaying(false)

    }
  }

  return currSong ? (
    <div className='playMusicDiv'>
      <div className='songAndThumbnail'>
        <Music
          songName={currSong.songName}
          thumbnail={currSong.thumbnail}
          artistFName={currSong.artistFName}
        />
      </div>
      <div className='playSong'>
        <Icon icon="ri:shuffle-line" width="1rem" height="1rem" />
        <Icon icon="mage:previous-fill" width="1rem" height="1rem" />
        {isPlaying ? (
          <Icon onClick={songToggle} icon="zondicons:pause-outline" width="2rem" height="2rem" />
        ) : (
          <Icon onClick={songToggle} icon="zondicons:play-outline" width="2rem" height="2rem" />
        )}
        <Icon icon="mage:next-fill" width="1rem" height="1rem" />
        <Icon icon="ic:baseline-repeat" width="1rem" height="1rem" />
      </div>
      <div className='controls' onClick={()=>{
        setPlaylistModal(true)
      }}>
        
        <Icon icon="ph:playlist-bold" width="1.5rem" height="1.5rem"  style={{color: 'white'}} />
      </div>
    </div>
  ) : (
    ""
  );
}

export default PlayMusic
