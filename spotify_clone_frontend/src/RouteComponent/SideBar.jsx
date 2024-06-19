import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function SideBar(props) {
    const navigate=useNavigate()
    return (    
        <div className='sideBar'>

            {/* logo */}
            <div className='logo'>
                <Icon  icon="logos:spotify" width="7rem" height="4rem" />
            </div>

            {/* User Utilities Section */}
            <div className='userUtilities'>
                <div className='createPlaylist'>
                    <Icon icon="majesticons:home-line" width="3rem" height="2rem" style={{ color: "white" }}/>
                    <p>Home</p>
                </div>
                <div className='createPlaylist'>
                    <Icon icon="iconamoon:search" width="3rem" height="2rem"  style={{color: "white"}} />
                    <p>Search</p>
                </div>
                <div className='createPlaylist'>
                    <Icon icon="fluent:library-28-regular" width="3rem" height="2rem"  style={{color: "white"}} />
                    <p>Your Library</p>
                </div>
                {props.isAuthenticated?<div onClick={(()=>{
                    navigate("/mymusic")

                })} className='createPlaylist'>
                    <Icon icon="tabler:music" width="3rem" height="2rem"  style={{color: "white"}} />
                    <p>My music</p>
                </div>:""}
            </div>
                
         {/* User playlist and like songs section     */}
            <div className='userSongs'>
                <div className='createPlaylist'>
                    <Icon icon="bi:plus-square" width="3rem" height="2rem"  style={{color: "white"}} />
                    <p>Create Playlist</p>
                </div>
                <div className='createPlaylist '>
                    <Icon icon="mdi:heart-box" width="3rem" height="3rem"  style={{color: "red"}} />
                    <p>Liked Songs</p>
                </div> 

            </div>

            {/* Footer */}

            <footer className='footer'>
                <p className='padding'>Logged inLegal</p>
                <p className='padding'>Privacy</p>
                <p className='padding'>Privacy Center</p>
                <p className='padding'>Privacy Policy</p>
                <p className='padding'>Cookies</p>
                <p className='padding'>About Ads</p>
            </footer>   

        </div>
    )
}

export default SideBar
