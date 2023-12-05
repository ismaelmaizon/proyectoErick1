import express  from "express";
import { prueba, agregarProducto } from "../controllers/prueba.js";


const router = express.Router()


router.post('/agregarProducto', agregarProducto)


export default router