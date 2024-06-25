import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import PlayMusic from '../PlayMusic'
import { useNavigate } from 'react-router-dom'
import { NavLink,Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MusicWrapper = React.memo(({isAuthenticated,children}) => {
    return (
      <div className='homeOuterDiv'>
        <SideBar isAuthenticated={isAuthenticated}  />
        <div className='homeRemainingScreen remainingScreen'>
          <NavBar isAuthenticated={isAuthenticated}  />
          {children}
          <PlayMusic />
        </div>
      </div>
    );
  });

export default MusicWrapper
