import express  from "express";
import { agregarProducto } from "../controllers/crudProductos.js";


const router = express.Router()


router.post('/agregarProducto', agregarProducto)


export default router