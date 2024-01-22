import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { createCart } from "../controllers/crudCarts.js";
import { login, register } from "../controllers/sessions.js";
import passport from "passport";

const router = express.Router()

// rutas productos
router.post('/agregarProducto', agregarProducto)
router.post('/register', register)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)
router.post('/login', passport.authenticate('local-login', {
/*
    //esta es la configuracion dependiendo de como resulto el login (te redirecciona a...)
    successRedirect: 'http://localhost:5173/',  // caso exitoso
    failureRedirect: 'http://localhost:5173/register', // caso no exitoso
    passReqToCallback: true,*/
    session: false
}), login)


//rutas carrito


router.post('/crearCarrito', createCart)

export default router