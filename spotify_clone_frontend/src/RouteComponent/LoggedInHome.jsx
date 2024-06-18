import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';


function LoggedInHome(props) {
    return (
        <div className='homeOuterDiv'>
            <SideBar isAuthenticated={props.isAuthenticated} />
            <div className='remainingScreen'>
                <NavBar isAuthenticated={props.isAuthenticated} />
            </div>

        </div>
    )
}
export default LoggedInHome
