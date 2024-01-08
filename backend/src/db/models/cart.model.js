import mongoose from 'mongoose'
import { type } from 'os';

const collection = 'cart'

const CartSchema = new mongoose.Schema({
    name: { type: String, default: 'Isma Prueba' },
    lastName: { type: String, default: 'Maizon Prueba' },
    email: { type: String, default: 'Isma@gmail.com' },
    cellphone: { type: Number, default: 351252525 },
    total: Number,
    products: { type: Array, default: [] }
})

const CartModel = mongoose.model(collection, CartSchema)
export default CartModel;