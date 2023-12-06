
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import NavBar from './component/NavBar/navBar'
import AddProducto from './component/AgregarProducto/addProduct'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import CartProvider from './component/contexto/contex'

function App() {
  

  return (
    
      <CartProvider>
        <div className='container_1' >
          <NavBar/>
        </div>
        <div className='container_2'>
          <Routes>
            <Route element={<Inicio/>} path='/' ></Route>
            <Route element={<AddProducto/>} path='/addproducto' ></Route>
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
      </CartProvider>
    
  )
}

export default App
