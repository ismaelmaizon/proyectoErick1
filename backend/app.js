import 'dotenv/config'
import express from 'express'
import path from 'path';
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'
import cors from 'cors';

import morgan from 'morgan';
import multer from 'multer';

import { v4 as uuidv4 } from 'uuid';

import __dirname from './src/utils.js';

const app = express()
//Settings 
const port = process.env.PORT


//conexion db
connectDB()
//Middleware
app.use(express.json())
app.use(cors()) // al ajecutar cors de esta manera, pemitimos que cualquier dominio pueda hacer consulta a nuestro backend
app.use(morgan('dev')) // permite ver en consola los pedidos realizados al servidor
app.use(express.urlencoded({extended:false})) //permite poder entender lo que los formularios me estan enviando

console.log('ruta ' + __dirname);


const storage = multer.diskStorage({
    destination: __dirname + '/img',
    filename: function (req, file, cb) {
      cb(null, uuidv4() + path.extname(file.originalname)); // uuidv4() + path.extname(file.originalname) concatenacion de un nuevo ID mas la extencion de archivo subido
    }
});
  
app.use(multer({ storage: storage }).single('image'))

//Routes
app.use('/api', router)

app.listen(8080, ()=> {
    console.log(port);
    console.log('escuchando...');
})