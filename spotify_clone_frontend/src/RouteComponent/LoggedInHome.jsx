import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import PlayMusic from './PlayMusic';


function LoggedInHome(props) {
    return (
        <div className='homeOuterDiv'>
            <SideBar isAuthenticated={props.isAuthenticated} />
            <div className='homeRemainingScreen remainingScreen'>
                <NavBar isAuthenticated={props.isAuthenticated} />
                <div className='homeCard'>
                    <div>Home card</div>

                </div>
                <PlayMusic />
            </div>

        </div>
    )
}
export default LoggedInHome
