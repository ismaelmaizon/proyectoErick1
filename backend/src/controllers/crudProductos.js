import productsModel from "../db/models/product.model.js";

// agregar un producto
export const agregarProducto = async (req, res) => {

    // Acceder a la información proporcionada por Passport-local
    const error = req.authInfo;
    const user = req.user;
    const info = req.authInfo;
    console.log('Error:', error);
    console.log('User:', user);
    console.log('Info:', info);

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
        url : img.filename
    }
    let result = await productsModel.create(newProduct)
    console.log(result);
    res.send( { status : 200 ,producto: result } )
}

//obtener todos los productos
export const getProductos = async (req, res) => {
    let result = await productsModel.find()
    console.log(result);
    res.send( result )
}
//obtener un producto
export const getProducto = async (req, res) => {
    console.log(req.params.id);
    let result = await productsModel.findById(req.params.id)
    console.log(result);
    res.send( result )
}

