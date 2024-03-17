import sendEmail from '../mailer/mailer.js'

import ventasModel from '../db/models/ventas.model.js';

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
    
    try{
        const newVenta = {
            email: user.email,
            products: venta.products,
            total: venta.total
        } 
        const response = await ventasModel.create(newVenta)
        console.log(response);
        console.log(response._id);
        if (response) {
            sendEmail(user.email, 'codigo de venta', `
            <h1> porfavor no compartir este codigo </h1>
            <h3> con el mismo podra retirar su compra: </h3>
            <h2> ${response._id} </h2>
            `)
        }
        res.send({ok: true, message: 'ok', venta: response })

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