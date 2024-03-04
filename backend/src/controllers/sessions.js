import express from 'express'
import userModel from "../db/models/users.model.js";
import CartModel from '../db/models/cart.model.js';
import { encriptarPass } from "../utils.js";
import jwt from 'jsonwebtoken'

const app = express()

export const register = async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body
    const pass = await encriptarPass(password)
    const carrito = {
                    "products":[]
                    }
    try{

        let user = await userModel.findOne({ email: email })
        if (user){
            res.send({status: 200, message: 'el usuario ya existe'} )
        }

        await CartModel.create(carrito)
        const newCart = await CartModel.find()
        const newIdCart = newCart[newCart.length - 1]

        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: pass,
            role: role,
            cart: newIdCart
        }
        const result = await userModel.create(data)
        console.log(data);
        console.log(result);
        res.send({status: 200} )

    }catch(err){
        console.log(err);
        res.send({status: 400, message: 'problemas al registrar usuario', error: err } )
    }
    
}



export const login = async (req, res) => {
    
    
    // Acceder a la información proporcionada por Passport-local
    const error = req.authInfo;
    const user = req.user;
    const info = req.authInfo;
    console.log('Error:', error);
    console.log('User:', user);
    console.log('Info:', info);


    if(user == null) {
        res.send({ message: 'clave o usuario incorrecto'})
    }else{
        req.session.user = {
            name: user.first_name + user.last_name,
            email: user.email,
            age: user.age,
            role: user.role,
        };
        let email = user.email
        let role = user.role
        let token = jwt.sign({email, role}, 'coderSecret', {expiresIn: "24h"})
        console.log(token);
        //res.header('Content-Type', 'application/json');
        res.cookie('CookiePrueba', token, { maxAge: 300000, httpOnly: true});
        res.status(200).json(user);
    }
}

