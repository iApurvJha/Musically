import React from 'react'

function NavBar() {
  return (
    <div className='NavBar'>
        <span>Premium</span>
        <span>Support</span>
        <span>Download</span>
        <span>|</span>
        <span className='homeLoginSpan'><button className='homeLoginButton' >Log In</button></span>
    </div>
  )
}

export default NavBar
