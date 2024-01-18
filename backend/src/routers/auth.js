import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { createCart } from "../controllers/crudCarts.js";
import { login, register } from "../controllers/sessions.js";
import passport from "passport";

const router = express.Router()

// rutas productos
router.post('/agregarProducto', agregarProducto)
router.post('/login', passport.authenticate('local-login', {
    //esta es la configuracion dependiendo de como resulto el login (te redirecciona a...)
    successRedirect: '/',  // caso exitoso
    failureRedirect: '/register', // caso no exitoso
    passReqToCallback: true
}))
router.post('/register', register)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)


//rutas carrito


router.post('/crearCarrito', createCart)

export default router