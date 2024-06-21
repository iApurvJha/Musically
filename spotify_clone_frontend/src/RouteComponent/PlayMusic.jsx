import React from 'react'
import Music from './SharedComponents/Music'
function PlayMusic() {
  return (
    <div className='playMusicDiv'>
        <div className='song&Thumbnail'><Music songName="random song" thumbnail="https://images.unsplash.com/photo-1540829016269-e05670f88adb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmdzfGVufDB8fDB8fHww" artistFName="Apurv" /></div>
        <div className='playSong'>playSong</div>
        <div className='controls'>controls</div>
      
    </div>
  )
}

export default PlayMusic
