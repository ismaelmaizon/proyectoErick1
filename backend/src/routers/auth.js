import express  from "express";
import { prueba } from "../controllers/prueba.js";


const router = express.Router()


router.get('/isma', prueba)


export default router