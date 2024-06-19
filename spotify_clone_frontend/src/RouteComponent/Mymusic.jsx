import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Music from './SharedComponents/Music'

function Mymusic(props) {
  return (
        <div className='homeOuterDiv'>
            <SideBar isAuthenticated={props.isAuthenticated} />
            <div className='remainingScreen'>
                <NavBar isAuthenticated={props.isAuthenticated} />
                <div className='myMusicHeading'>
                    My Songs
                </div>
                <Music /> 
                <Music /> 
                <Music /> 
                <Music /> 
               
            </div>

        </div>
  )
}

export default Mymusic
