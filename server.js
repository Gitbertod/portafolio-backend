import mongoose from 'mongoose';

import cors from 'cors'
import dotenv from 'dotenv'
import app from './app.js';

dotenv.config({path:'./config.env'});
app.use(cors());

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {})
  .then((conn) => {
    console.log('Conectado a base de datos:', conn.connection.name);
    console.log('Host:', conn.connection.host);
  })
  .catch(err => console.error('Error al conectar:', err));

const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log(`Servidor escuchando en el puerto ${PORT}`))
