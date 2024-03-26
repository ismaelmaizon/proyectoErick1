import 'dotenv/config'

import sendEmail from '../mailer/mailer.js'
import ventasModel from '../db/models/ventas.model.js';

// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ accessToken: 'TEST-6090537087039184-032214-2a5ab98c92c349655ac23494c1bec299-548398074' }); //options: { timeout: 5000, idempotencyKey: 'abc' }

// Step 3: Initialize the API object
const preference = new Preference(client);


//mostrar venta segun codigo id
export const getVenta = async (req, res) => {
    const id = req.params.id
    const venta = await ventasModel.findById(id)
    console.log(venta);
    res.send({ venta: venta })
}


// registrar venta realizada
export const registrarVenta = async (req, res) => {
    const user = req.user
    const venta = req.body
    console.log(user);
    console.log(venta);
    console.log(venta.products);
    
    try{
        const newVenta = {
            email: user.email,
            products: venta.products,
            total: venta.total
        } 
        // Step 4: Create the request object
        const body = {
            transaction_amount: venta.total,
            description: venta.email,
            payment_method_id: 'visa',
            payer: {
                email: 'test_user_104072709@testuser.com'
            },
        
        };

        //const response = await ventasModel.create(newVenta)
        
        const response2 = await preference.create({ body:{
            items:[
                {
                    title: user.email,
                    description: 'carrito de: ' + user.email,
                    quantity: 1,
                    unit_price: venta.total,
                    currency_id: 'ARS',
                }
            ],
            back_urls:{
                success: 'https://www.google.com.ar',
                pending: 'https://www.google.com.ar',
                failure: 'https://www.google.com.ar'
            }        
        } })
        //console.log(response);
        //console.log(response._id);
        console.log(response2);
        console.log(response2.id);
        /*
        if (response && response2) {
            sendEmail(user.email, 'codigo de venta', `
            <h1> porfavor no compartir este codigo </h1>
            <h3> con el mismo podra retirar su compra: </h3>
            <h2> ${response._id} </h2>
            `)
        }
        res.send({ok: true, message: 'ok', venta: response, pago: response2 })*/

    }catch(err){
        console.log(err);
        res.send({ ok: false, message: 'problemas al registrar la venta', err: err })
    }
}
















/*
//vista previa cart
export const vistaPreviaCart = async ( req, res ) =>{
    const user = req.user;
    let totalParcial = 0
    let total = 0;
    let arrayCart = {cart:[], total: total}
    let prodRef = {}
    try{
        const us = await userModel.findOne({ email: user.email })
        if (us) {
            console.log(us.cart) 
            const cart = await cartModel.findOne({ _id: us.cart })
            const productos = await productsModel.find()
            productos.map((prod) =>{
                let prodIDString = prod._id.toString();
                cart.products.map((cart) => {
                    let cartIDString = cart._id.toString();
                    if( prodIDString === cartIDString ){
                        console.log('ok');
                        console.log(prod.price);
                        console.log(cart.quiantity);
                        totalParcial += prod.price * cart.quiantity
                        prodRef = {
                            _id: prod._id,
                            name: prod.name,
                            description: prod.description,
                            price: prod.price,
                            stock: prod.stock,
                            tipo: prod.tipo,
                            url: prod.url,
                            quiantity: cart.quiantity,
                            totalParcial: totalParcial
                        }
                        arrayCart.cart.push(prodRef);
                    }
                })
                totalParcial = 0
                
            })
            arrayCart.cart.map((prod) =>{
                console.log(prod.totalParcial);
                total += prod.totalParcial
            })
            console.log(total);
            arrayCart.total = total

        }
        res.send({ ok: true, message: 'vista previa', cart: arrayCart })
        

    }catch(err){
        console.log(err);
    }
}   


// update cart
export const UpdateVistaPrevia = async (req, res) => {
    const UpdateCart = req.body
    const user = req.user;

    
    try{
        const us = await userModel.findOne({ email: user.email })
        if (us) {
            const cart = await cartModel.findOne({ _id: us.cart })
            
            cart.products.map( (c) => {
                let cid = c._id.toString()
                UpdateCart.cart.map(( u )=>{
                    let uid = u._id.toString()
                    if(cid === uid ){
                        //console.log(cid + ' - ' + uid); validando que los ID sean iguales
                        c.quiantity = u.quiantity
                    }

                })
            } )
            cart.save()
            //console.log(UpdateCart);
            console.log(cart);
            res.send({ok: true, message: 'update', cart: cart})
        }

    }catch(err){
        console.log(err);
    }
}
*/