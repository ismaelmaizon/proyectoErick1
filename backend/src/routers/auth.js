import express  from "express";
import { agregarProducto, getProducto } from "../controllers/crudProductos.js";


const router = express.Router()


router.post('/agregarProducto', agregarProducto)
router.get('/getProductos', getProducto)


export default router