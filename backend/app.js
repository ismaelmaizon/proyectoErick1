import 'dotenv/config'
import express from 'express'
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'

const app = express()
connectDB()


app.use('/api', router)

const port = process.env.PORT

app.listen(8080, ()=> {
    console.log(port);
    console.log('escuchando...');
})