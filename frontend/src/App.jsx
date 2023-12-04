
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import NavBar from './component/NavBar/navBar'
import { ListItem, UnorderedList } from '@chakra-ui/react'

function App() {
  

  return (
    <div >
        <div className='container_1' >
          <NavBar/>
        </div>
        <div className='container_2'>
          <Routes>
            <Route element={<Inicio/>} path='/' ></Route>
          </Routes>
        </div>
        
        <div className='container_3' >
          { /* <Footer/> */ }
          
        </div> 

        <div className="footer" >
                <div>
                    <UnorderedList>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                </div>
                <div>hola</div>
                <div>hola</div>
            </div>
      </div>
  )
}

export default App
