import 'dotenv/config'
import express from 'express'
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'
import cors from 'cors';

const app = express()
connectDB()

app.use(express.json())
app.use('/api', router)
app.use(cors()) // al ajecutar cors de esta manera, pemitimos que cualquier dominio pueda hacer consulta a nuestro backend
const port = process.env.PORT

app.listen(8080, ()=> {
    console.log(port);
    console.log('escuchando...');
})