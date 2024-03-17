// contexto

import React from "react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios';
import { getProducto } from "../../../../backend/src/controllers/crudProductos";


// DB

export const MiContexto = createContext([])


// creando mi propio hoock
//export const useMiContexto = () => useContext(MiContexto)



const CartProvider = ({children}) => {

    const [ user, setUser ] = useState('null')


    
    //contexto productos
    const [productos, setProdusctos] = useState([])
    
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getProductos');
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            setProdusctos(response.data);
            console.log('Productos:', response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    //obtener un producto
    const [productoId, setProdusctoID] = useState('')
    const [producto, setProduscto] = useState({})
    
    const getProduct = async (productoId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/getProducto/${productoId}`);
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            setProduscto(response.data);
            console.log('Producto:', response.data);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    };



    //contexto carrito
    const [ cartID, setCartID ] = useState('')
    const [ cart, setCart] = useState([])
    const [numberCart, setNumberCart] = useState(0)
    //ver carrito
    const getCart = async (cartID) => {
        try {
            console.log(cartID);
            const response = await axios.get(`http://localhost:8080/api/auth/carts/${cartID}`, {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            console.log('cart:', response.data.cart.products);
            console.log('cantidad:', response.data.cart.products.length);
            setCart(response.data.cart.products);
            setNumberCart(response.data.cart.products.length)
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    };


    //creacion de dashboard
    const [dashBoard, setDashBoard] = useState({ cart: [], total: 0 })


    const ViewDashBoard = ( dashBoard, productos, cart ) => {
        console.log('ViewDashBoard');
        let newCart = []
        let totalParcial= 0
        let total = 0
        let prodRef = {}

        productos.map((p) => {
            let prodIDString = p._id.toString();
            cart.map((pCart) => {
                let cartIDString = pCart._id.toString();
                if(prodIDString === cartIDString){
                    totalParcial = p.price*pCart.quiantity
                    prodRef = {
                        _id: p._id,
                        name: p.name,
                        description: p.description,
                        price: p.price,
                        stock: p.stock,
                        tipo: p.tipo,
                        url: p.url,
                        quiantity: pCart.quiantity,
                        totalParcial: totalParcial
                    }
                    newCart.push(prodRef)
                }
            })
            totalParcial = 0
        })

        newCart.map((el) => {
            total += el.totalParcial
        } )

        dashBoard = ({ cart: newCart, total: total })

        return dashBoard
    }

    

    //actualizar al carrito
    const upDateCart = async ( cart2 ) => {
        setCart(cart2)
        console.log(cart);
    }
    

    useEffect(() => {
       getProducts()
    }, []);
    

    return (
        // aca llamamos al hoock useMiContexto
        <MiContexto.Provider value={{
        user, setUser, 
        dashBoard, setDashBoard, ViewDashBoard,
        getCart, cartID, setCartID, numberCart,
        productos, 
        productoId, setProdusctoID, getProduct, producto,
        cart, setCart, upDateCart}} >
            {children}
        </MiContexto.Provider>
    )
}

// Este va a ser el encargado de proveer el contexto a elementos hijos
export default CartProvider