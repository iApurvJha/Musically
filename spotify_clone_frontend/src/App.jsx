import './App.css'
import Login from './RouteComponent/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    // <div className='outerDiv'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    // </div>
  )
}

export default App
