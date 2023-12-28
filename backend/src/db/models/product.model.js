import mongoose from 'mongoose'

const collection = 'productos'

const ProductosSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    tipo: String,
    image: String
})

const ProductsModel = mongoose.model(collection, ProductosSchema)
export default ProductsModel;