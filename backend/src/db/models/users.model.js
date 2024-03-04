import mongoose from 'mongoose'
import { fechaDeHoy } from '../../myfunctions/functions.js'

const collection = 'usersAtelier'

const fecha = fechaDeHoy()

const UserSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{type: String, unique: true},
    password: String,
    role: { type: String, default: 'user' },
    cart: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'carts'
    },
    last_connection: { type: String, default: fecha },
    code: String
})

const userModel = mongoose.model(collection, UserSchema)
export default userModel;