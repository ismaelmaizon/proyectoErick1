
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './component/Inicio/inicio'
import InicioAdmin from './component/Inicio/inicioAdmin'
import NavBar from './component/NavBar/navBar'
import AddProducto from './component/AddProduct/addProduct'
import Downloadcv from './component/DownloadCv/downloadcv'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import CartProvider from './component/context/contex'
import Cart from './component/Cart/cart'
import ProductDetail from './component/ProductDetail/productDetail'
import Login from './component/Login/login'
import RegisterUser from './component/RegisterUser/registerUser'


function App() {
  

  return (
    
      <CartProvider>
        <div className='container_1' >
          <NavBar/>
        </div>
        <div className='container_2'>
          <Routes>
            <Route element={<Login/>} path='/login' ></Route>
            <Route element={<Inicio/>} path='/' ></Route>
            <Route element={<InicioAdmin/>} path='/admin' ></Route>
            <Route element={<AddProducto/>} path='/addproducto' ></Route>
            <Route element={<ProductDetail/>} path='/productDetail' ></Route>
            <Route element={<Cart/>} path='/Cart' ></Route>
            
            <Route element={<RegisterUser/>} path='/register' ></Route>
            <Route element={<Downloadcv/>} path='/downloadcv' ></Route>
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
