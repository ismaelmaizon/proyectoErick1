import cartModel from "../db/models/cart.model.js";
import userModel from "../db/models/users.model.js";


// crear carrito
export const createCart = async (req, res) => {
    const cart = req.body
    console.log(cart);
    const result = await cartModel.create(cart)
    res.send({ status: 200, message: result} )
}
// ver carrito
export const getCart = async (req, res) => {
    const cartID = req.params.cid
    console.log('parametro: '+cartID);
    console.log( req.cookies['CookiePrueba']);
    try{
        const cart = await cartModel.findOne({ _id: cartID })
        console.log(cart);
        res.send({ok: true, message: 'carrito entrado', cart: cart } )

    }catch(err){
        console.log(err);
        return ({ ok: false, message: 'carrito no existe', err: err })
    }
}


// agregar producto al carrito carrito
export const addProductCart = async (req, res) => {
    const {num} = req.body
    const user = req.user;
    const cartID = req.params.cid
    const productID = req.params.pid
    let ex = true
    console.log(num);
    console.log(user);
    console.log(cartID);
    console.log(productID);

    try{
        const userResult = await userModel.findOne({ email: user.email })
        if (userResult.cart._id == cartID){
                let prod = {
                    _id: '',
                    quiantity: 1
                }
                const cart = await cartModel.findOne({ _id: cartID })
                cart.products.map( (prod) =>{
                    if (prod.id === productID){
                        ex = false
                        prod.quiantity = num
                    }
                } )
                if (ex) {
                    prod._id = productID
                    prod.quiantity = num
                    cart.products.push(prod)
                }
                cart.save()
                console.log('producto agregado');
                res.send({ok: true, message: 'producto agregado', cart: cart}) 
            }else{
                console.log('no coinciden los cart');
                res.send({ok: false, message: 'no coinciden los cart', cart: null}) 
            }
    }catch(err){
            console.log(err);
            return ({ ok: false, message: 'problemas al agregar producto al carrito, necesario volver a iniciar sesion', err: err })
        }
    

    /*
    const productID = req.params.pid
    let ex = true


    try{
        const cart = await cartModel.findOne({ _id: cartID })
        cart.products.map( (prod) =>{
            if (prod.id === productID){
                ex = false
                prod.quiantity += 1
            }
        } )
        if (ex) {
            cart.products.push(productID)
        }
        cart.save()
        console.log('producto agregado');
        res.send({ok: true, message: 'producto agregado', cart: cart})

    }catch(err){
        console.log(err);
        return ({ ok: false, message: 'problemas al agregar producto al carrito', err: err })
    }
    */

}