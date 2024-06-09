import './App.css'
import Login from './RouteComponent/Login'
import Signup from './RouteComponent/Signup'
import Home from './RouteComponent/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    // <div className='outerDiv'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    // </div>
  )
}

export default App
