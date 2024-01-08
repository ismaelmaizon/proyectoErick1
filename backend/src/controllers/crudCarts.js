import cartModel from "../db/models/cart.model.js";


// crear carrito
export const createCart = async (req, res) => {
    const cart = req.body
    console.log(cart);
    const result = await cartModel.create(cart)
    res.send({ status: 200, message: result} )
}