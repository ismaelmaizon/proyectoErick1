import productsModel from "../db/models/product.model.js";

export const prueba = (req, res) => {
    res.send('Hola prueba');
}



export const agregarProducto = async (req, res) => {
    const producto = req.body
    console.log(producto);
    let newProduct = {
        name : producto.name,
        description : producto.description,
        price : producto.price,
        stock : producto.stock,
        tipo : producto.tipo,
        url : producto.url
    }
    //let result = await productsModel.create(newProduct)
    //console.log(result);
    res.send( { status : 200 } )
}