import express  from "express";
import { agregarProducto, getProductos, getProducto, agregarCv } from "../controllers/crudProductos.js";


const router = express.Router()


router.post('/agregarProducto', agregarProducto)
router.post('/agregarCv', agregarCv)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)


export default router