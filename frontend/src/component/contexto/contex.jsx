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


    useEffect(() => {
       getProducts()
    }, []);
    

    return (
        // aca llamamos al hoock useMiContexto
        <MiContexto.Provider value={{productos}} >
            {children}
        </MiContexto.Provider>
    )
}

// Este va a ser el encargado de proveer el contexto a elementos hijos
export default CartProvider