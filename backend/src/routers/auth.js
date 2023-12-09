import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";


const router = express.Router()


router.post('/agregarProducto', agregarProducto)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)


export default router