import './App.css'
import Login from './RouteComponent/Login'
import Signup from './RouteComponent/Signup'
import Home from './RouteComponent/Home'
import UploadSongs from './RouteComponent/UploadSongs';
import LoggedInHome from './RouteComponent/LoggedInHome'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'



function App() {
  const [cookie,setCookie]= useCookies(["token"])
  const [isAuthenticated,setIsAuthenticated]=useState(true)
  useEffect(()=>{
    if(cookie.token){
      setIsAuthenticated(true)
    }
    else{
      setIsAuthenticated(false)
    }
  },[cookie])



  return (
    <div className='outerDiv'>
    <BrowserRouter>
      {isAuthenticated?
        <Routes>
          <Route path='/' element={<LoggedInHome isAuthenticated={isAuthenticated} />}/>
          <Route path='/uploadsongs' element={<UploadSongs isAuthenticated={isAuthenticated} />}/>
          <Route path='*' element={<Navigate to="/" />}/>
          {/* <Route path='/signup' element={<Signup />}/> */}
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>

      }
      
    </BrowserRouter>
    </div>
  )
}

export default App






