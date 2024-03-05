import sendEmail from '../mailer/mailer.js'
import userModel from '../db/models/users.model.js';
import cartModel from '../db/models/cart.model.js';
import productsModel from '../db/models/product.model.js';

export const formSales = async ( req, res ) =>{
    const formularioVenta = req.body;
    const user = req.user;
    let total = 0;
    try{
        const us = await userModel.findOne({ email: user.email })
        if (us) {
            console.log(formularioVenta);
            console.log(us.cart);
            const cart = await cartModel.findOne({ _id: us.cart })
            console.log(cart);
            console.log(cart.products.length);
            const productos = await productsModel.find()
            productos.map((prod) =>{
                console.log(prod._id);
                cart.products.map((cart) => {
                    console.log(cart._id);
                    if( prod._id === cart._id ){
                        console.log('ok');
                    }
                })
                
            })
            
            formularioVenta.total = total
            formularioVenta.cart = cart
        }
        console.log(formularioVenta);
        res.send( {ok: true, message: 'succes', formulario: formularioVenta} )
    }catch(err){
        console.log(err);
    }
}   