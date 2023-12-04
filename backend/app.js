import express from 'express'
import router from './src/routers/index.js'
import connectDB from './src/db/connect.js'

const app = express()
connectDB()


app.use('/api', router)

app.listen(8080, ()=> {
    console.log('escuchando...');
})