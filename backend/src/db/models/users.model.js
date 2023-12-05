import mongoose from 'mongoose'

const collection = 'usersOrt'

const UserSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{type: String, unique: true},
    password: String,
    role: String
})

const userModel = mongoose.model(collection, UserSchema)
export default userModel;