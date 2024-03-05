import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { addProductCart, createCart, getCart } from "../controllers/crudCarts.js";
import {login, register } from "../controllers/sessions.js";
import passport from "passport";
import { formSales } from "../controllers/sales.js";

const app = express()


const router = express.Router()

//los Users son vendedores
// registrat user nuevo
router.post('/register', register)
//login user
router.post('/login', passport.authenticate('local-login', {
/*
//esta es la configuracion dependiendo de como resulto el login (te redirecciona a...)
successRedirect: 'http://localhost:5173/',  // caso exitoso
failureRedirect: 'http://localhost:5173/register', // caso no exitoso
passReqToCallback: true,*/
session: false
}), login)



//Clientes
//ver carrito
router.get('/carts/:cid',passport.authenticate('jwt', {session: false}), getCart)
//agregar producto al carrito
router.post('/carts/:cid/product/:pid',passport.authenticate('jwt', {session: false}), addProductCart)
// concretar venta
router.post('/carts/:cid',passport.authenticate('jwt', {session: false}), formSales)



// rutas productos
router.post('/agregarProducto',passport.authenticate('jwt', {session: false}), agregarProducto)
//obtener productos
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