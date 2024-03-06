import sendEmail from '../mailer/mailer.js'
import userModel from '../db/models/users.model.js';
import cartModel from '../db/models/cart.model.js';
import productsModel from '../db/models/product.model.js';

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

