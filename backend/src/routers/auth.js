import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { createCart } from "../controllers/crudCarts.js";
import {login, register } from "../controllers/sessions.js";
import passport from "passport";

const app = express()


const router = express.Router()

// rutas productos
router.post('/agregarProducto', agregarProducto)
router.post('/register', register)
router.post('/login', passport.authenticate('local-login', {
/*
    //esta es la configuracion dependiendo de como resulto el login (te redirecciona a...)
    successRedirect: 'http://localhost:5173/',  // caso exitoso
    failureRedirect: 'http://localhost:5173/register', // caso no exitoso
    passReqToCallback: true,*/
    session: false
}), login)
//login)
router.get('/getProductos', getProductos)
router.get('/getProducto/:id', getProducto)

//obteniendo cookies
router.get('/getCookie', (req, res) => {
    
    res.send(req.cookies) // de esta forma accedemos a cookies que no estan firmadas, pero en el caso de que se encuentren firmadas, la forma de acceder es con req.signedCookies
} )
//eliminando una cookie
router.get('/deletCookie', (req, res) => {
    res.clearCookie('Nombre de la cookie').send('Cookie Removed')
} )
//eliminando session
router.get('/logout', (req, res) => {
    res.session.destry( err => {
        if(!err) res.send('logout ok')
        else res.send({status: 'logout ERROR', body: err})
    } 

     )
} )



//rutas carrito

router.post('/crearCarrito', createCart)

export default router