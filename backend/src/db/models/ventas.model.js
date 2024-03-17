import mongoose from 'mongoose'

const collection = 'ventas'

const VentasSchema = new mongoose.Schema({
    email: String,
    products: [],
    total: Number
})

const VentasModel = mongoose.model(collection, VentasSchema)
export default VentasModel;