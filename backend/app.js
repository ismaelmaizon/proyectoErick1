import 'dotenv/config'
import express from 'express'
import path from 'path';
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'
import cors from 'cors';

import morgan from 'morgan';
import multer from 'multer';

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
app.use(multer({dest: path.join(__dirname, 'src/img') }).single('image'))
// {dest: path.join(__dirname, 'src/img') }  Destino donde se van a guardar las imagenes, dentro de nuestro servidor


//Routes
app.use('/api', router)

app.listen(8080, ()=> {
    console.log(port);
    console.log('escuchando...');
})