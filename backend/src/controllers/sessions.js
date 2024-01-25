import userModel from "../db/models/users.model.js";


export const register = async (req, res) => {
    const data = req.body
    const result = await userModel.create(data)
    console.log(data);
    console.log(result);
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
        let token = req.session.user
        res.cookie('coderCookie', token, {httpOnly: true}).send(us) 
    }
}


export const session = (req, res) => {
    const estado = req.flash('loginMessage');
    console.log('session res:');
    console.log(estado);
    res.send(estado)
}