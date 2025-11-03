import cors from 'cors'
import dotenv from 'dotenv'
import app from './app.js';

dotenv.config();
app.use(cors());


const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log(`Servidor escuchando en el puerto ${PORT}`))
