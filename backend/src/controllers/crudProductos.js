import productsModel from "../db/models/product.model.js";


export const agregarProducto = async (req, res) => {
    const producto = req.body
    console.log(producto);
    let newProduct = {
        name : producto.name,
        description : producto.descripcion,
        price : producto.precio,
        stock : producto.stock,
        tipo : producto.tipo,
        url : producto.url
    }
    let result = await productsModel.create(newProduct)
    console.log(result);
    res.send( { status : 200, producto: result } )
}