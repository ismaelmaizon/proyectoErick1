
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import NavBar from './component/NavBar/navBar'

function App() {
  

  return (
    <div className='container_1' >
        <NavBar/>
        <div className='container_2'>
          <Routes>
            <Route element={<Inicio/>} path='/' ></Route>
          </Routes>
        </div>
        
        <div className='container_3' >
          { /* <Footer/> */ }
          
        </div> 
      </div>
  )
}

export default App
