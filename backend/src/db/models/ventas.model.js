import mongoose from 'mongoose'

const collection = 'ventas'

const VentasSchema = new mongoose.Schema({
    cart: {
        products: [],
        total: Number
    },
})

const VentasModel = mongoose.model(collection, VentasSchema)
export default VentasModel;