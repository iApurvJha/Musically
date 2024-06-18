import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar(props) {
  const navigate = useNavigate()
  return (
    <div className='NavBar'>
        <span className='cursorPointer'>Premium</span>
        <span className='cursorPointer'>Support</span>
        <span className='cursorPointer'>Download</span>
        <span className='cursorPointer'>|</span>
        <span onClick={(()=>{
          navigate("/uploadsongs")

        })} className='cursorPointer'>{props.isAuthenticated?"Upload Songs":""}</span>
        <span className='homeLoginSpan'><button className='homeLoginButton' >Log In</button></span>
    </div>
  )
}

export default NavBar
