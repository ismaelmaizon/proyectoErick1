import mongoose from 'mongoose'

const collection = 'carts'

const CartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "productos",
                },
                quiantity: { type: Number, default: 1}
            },
        ],
    },
})

const CartModel = mongoose.model(collection, CartSchema)
export default CartModel;