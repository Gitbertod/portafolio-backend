import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import app from './app.js';

dotenv.config({path:'./config.env'});
app.use(cors());

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{}).then(()=>console.log('Conectado a base de datos'))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log(`Servidor escuchando en el puerto ${PORT}`))
