import express  from "express";
import { agregarProducto, getProductos, getProducto } from "../controllers/crudProductos.js";
import { addProductCart, createCart, getCart, upDateCart } from "../controllers/crudCarts.js";
import {getUser, login, register } from "../controllers/sessions.js";
import passport from "passport";
import { registrarVenta } from "../controllers/crudVentas.js";

const app = express()


const router = express.Router()

//los Users son vendedores
// registrat user nuevo
router.post('/register', register)
//login user
router.post('/login', passport.authenticate('local-login', {session: false}), login)
//obtener info del user
router.get('/getuser',passport.authenticate('jwt', {session: false}), getUser)



//Clientes
//ver carrito
router.get('/carts/:cid', passport.authenticate('jwt', {session: false}),getCart)
//agregar producto al carrito
router.post('/carts/:cid/product/:pid', passport.authenticate('jwt', {session: false}), addProductCart)
//actualizar cart
router.post('/carts/:cid', passport.authenticate('jwt', {session: false}), upDateCart)
//registrar venta
router.post('/registrarVenta', passport.authenticate('jwt', {session: false}), registrarVenta)



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
    })
} )



//rutas carrito

router.post('/crearCarrito', createCart)

export default router