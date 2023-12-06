// contexto

import React from "react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const MiContexto = createContext([])


// creando mi propio hoock
export const useMiContexto = () => useContext(MiContexto)



const CartProvider = ({children}) => {

    return (
        // aca llamamos al hoock useMiContexto
        <useMiContexto.Provider value={{}} >
            {children}
        </useMiContexto.Provider>
    )
}

// Este va a ser el encargado de proveer el contexto a elementos hijos
export default CartProvider