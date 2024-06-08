import './App.css'
import Login from './RouteComponent/Login'
import Signup from './RouteComponent/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    // <div className='outerDiv'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    // </div>
  )
}

export default App
