import userModel from "../db/models/users.model.js";


export const register = async (req, res) => {
    const data = req.body
    const result = await userModel.create(data)
    console.log(data);
    console.log(result);
}

export const login = (req, res) => {
    const data = req.body
    console.log('dentro de login: ');
    console.log(data);
    console.log(req.session);
    res.send( data )
}