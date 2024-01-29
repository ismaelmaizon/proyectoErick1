import 'dotenv/config'
import express from 'express'
// manejo de cookies
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'
import cors from 'cors';

//import morgan from 'morgan';
import multer from 'multer';

import { v4 as uuidv4 } from 'uuid';

import __dirname from './src/utils.js';
// avisamos a nuestro archivo js que vamos a usar esta estrategia de passport, pero tambien es importante usar passport como meadleware
import './src/passport/passport-config.js'
import passport from 'passport';
// este modulo permite enviarnos mensajes entre multiples paginas en node.js
import flash from 'connect-flash'




const app = express()

const corsOptions = {
  //To allow requests from client
  origin: [
    "http://localhost:5173"
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

//Settings 
const port = process.env.PORT
// Configuración para servir archivos estáticos
app.use('/static', express.static('src/img'));
app.use('/static', express.static('src/cv'));

//conexion db
connectDB()
//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions)) // al ajecutar cors de esta manera, pemitimos que cualquier dominio pueda hacer consulta a nuestro backend
//app.use(morgan('dev')) // permite ver en consola los pedidos realizados al servidor
app.use(express.urlencoded({extended:false})) //permite poder entender lo que los formularios me estan enviando
// como estamos trabajando en node.js tambien es necesarion almacenar esa session en este mismo, para lo cual podemos usar
app.use(session({ // configuramos sus elementos por seguridad, pero es necesario leer la documentacion para entender mejor que es cada elemento
  secret: 'mysecretsession',
  resave: true,
  saveUninitialized: true
  })) // esta es necesaria colocarla antes de passport.initialize o antes de cualquier estrategia de passport que estemos usando
app.use(flash()) // debemos usar flash como meaddleware y debe estar antes de passport y despues de sessiones (dado que flash hace uso de las sesiones)
app.use(passport.initialize())// de esta manera inicializamos passport
//recordemos que passport almacena en una session la informacion del usuario por ende debemos usar el siguiente meadleware
app.use(passport.session())

//
app.use((req, res, next)=>{
  // almaceno una variable que va a ser accesible desde toda mi aplicacion (app.locals.NOMBREdeVARIABLE)
  app.locals.loginMessage = req.flash('loginMessage');
  next();
})

console.log('ruta ' + __dirname);

// carga de imagen
const storage = multer.diskStorage({  
  destination: __dirname + '/img',
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname)); // uuidv4() + path.extname(file.originalname) concatenacion de un nuevo ID mas la extencion de archivo subido
  },
});
  
app.use(multer({ storage: storage }).single('image'))

/*
// carga de CV
const storage2 = multer.diskStorage({
  destination: __dirname + '/cv',
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname)); // uuidv4() + path.extname(file.originalname) concatenacion de un nuevo ID mas la extencion de archivo subido
  }
});

app.use(multer({ storage: storage2 }).single('cv'))
*/


//Routes
app.use('/api', router)


app.listen(8080, ()=> {
    console.log(port);
    console.log(app.locals.loginMessage);
    console.log('escuchando...');
})