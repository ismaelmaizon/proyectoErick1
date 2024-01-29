import userModel from "../db/models/users.model.js";
import { encriptarPass } from "../utils.js";


export const register = async (req, res) => {
    const pass = await encriptarPass(req.body.password)
    const data = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        password: pass,
        role: 'user'
    }
    const result = await userModel.create(data)
    console.log(data);
    console.log(result);
    res.send({status: 200} )
}

export const login = async (req, res) => {
    
    const estado = req.flash('loginMessage');
    // Acceder a la información proporcionada por Passport
    const error = req.authInfo;
    const user = req.user;
    const info = req.authInfo;

    console.log('Error:', error);
    console.log('User:', user);
    console.log('Info:', info);
    console.log('estado:', estado);
    
    const us = await userModel.findOne({ email: user.email, password: user.password });
    console.log(user)
    if(us == null) {
        res.send({ message: 'clave o usuario incorrecto'})
    }else{
        req.session.user = {
            name: us.first_name + us.last_name,
            email: us.email,
            age: us.age,
            role: us.role,
        };
        let token = req.session.user.name
        res.header('Content-Type', 'application/json');
        res.cookie('CookiePrueba', token, { maxAge: 10000, httpOnly: true});
        res.status(200).json({ message: 'Cookie establecida' });
        res.send(us)
    }
}


export const session = (req, res) => {
    const estado = req.flash('loginMessage');
    console.log('session res:');
    console.log(estado);
    res.send(estado)
}

