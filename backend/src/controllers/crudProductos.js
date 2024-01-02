import productsModel from "../db/models/product.model.js";


export const agregarProducto = async (req, res) => {
    const producto = req.body
    const img = req.file
    console.log(producto);
    console.log(img);
    
    let newProduct = {
        name : producto.name,
        description : producto.descripcion,
        price : producto.precio,
        stock : producto.stock,
        tipo : producto.tipo,
        url : img.path
    }
    let result = await productsModel.create(newProduct)
    console.log(result);
    res.send( { status : 200 /*producto: result*/ } )
}


export const getProductos = async (req, res) => {
    let result = await productsModel.find()
    console.log(result);
    res.send( result )
}

export const getProducto = async (req, res) => {
    console.log(req.params.id);
    let result = await productsModel.findById(req.params.id)
    console.log(result);
    res.send( result )
}