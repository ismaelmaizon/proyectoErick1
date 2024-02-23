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


    const [ user, setUser ] = useState({})

    
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
    const [ cart, setCart] = useState([])

    //agregar al carrito
    const addCart = async ( producto) => {
        cart.push(producto)
        setCart(cart)
    }
    //actualizar al carrito
    const upDateCart = async ( cart2 ) => {
        setCart(cart2)
        console.log(cart);
    }
    //eliminar producto del carrito
    const deletProductCart = async ( producto) => {
        let cart2 = []
        cart.map( (el) => {
            if (el._id != producto._id) {
                cart2.push(el)
            } 
        })
        setCart(cart2)
    }

    useEffect(() => {
       getProducts()
       console.log(cart);
    }, []);
    

    return (
        // aca llamamos al hoock useMiContexto
        <MiContexto.Provider value={{
        user, setUser,
        productos, 
        productoId, setProdusctoID, getProduct, producto,
        cart, setCart, addCart, upDateCart, deletProductCart}} >
            {children}
        </MiContexto.Provider>
    )
}

// Este va a ser el encargado de proveer el contexto a elementos hijos
export default CartProvider