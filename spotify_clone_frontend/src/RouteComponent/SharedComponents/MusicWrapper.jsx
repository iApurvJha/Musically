import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import PlayMusic from '../PlayMusic'
import { useNavigate } from 'react-router-dom'
import { NavLink,Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react'
import Modal from '../../Modal/Modal'

const MusicWrapper = React.memo(({isAuthenticated,children}) => {
  const [modal,setModal]=useState(false)
    return (
      <div className='homeOuterDiv'>
        {modal?<Modal setModal={setModal} />:false}
        <SideBar setModal={setModal} isAuthenticated={isAuthenticated}  />
        <div className='homeRemainingScreen remainingScreen'>
          <NavBar isAuthenticated={isAuthenticated}  />
          {children}
          <PlayMusic />
        </div>
      </div>
    );
  });

export default MusicWrapper
