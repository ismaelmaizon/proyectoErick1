import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { createCart } from "../controllers/crudCarts.js";


const router = express.Router()

// rutas productos
router.post('/agregarProducto', agregarProducto)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)


//rutas carrito


router.post('/crearCarrito', createCart)

export default router