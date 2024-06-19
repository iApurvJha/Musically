import React from 'react'
import SideBar from './SideBar';
import NavBar from './NavBar';
function Home(props) {
  return (
    <div className='homeOuterDiv'>
            <SideBar isAuthenticated={props.isAuthenticated} />
            <div className='remainingScreen'>
                <NavBar isAuthenticated={props.isAuthenticated} />
            </div>

        </div>
  )
}

export default Home


