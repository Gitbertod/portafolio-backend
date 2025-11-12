import express from 'express'
import rateLimit from 'express-rate-limit';
import postRouter from './routes/postRouter.js'
import userRouter from './routes/userRouter.js'
import { globalErrorHandler } from './controllers/errorController.js';
import { AppError } from './utils/AppError.js';

const app = express()

const limiter = rateLimit({
    max:100,
    windowMs:60 * 60 * 1000,
    message: "Too many requests from  this IP, please try again in an hour"
})
//Middlewares
app.use("/",limiter)

app.use(express.json({limit:'10kb'}));

app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    //console.log(req.headers)
    next()
})

//Rutas
app.use('/api/v1/posts',postRouter);
app.use('/api/v1/users',userRouter);

app.all('/*splat', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})
app.use(globalErrorHandler)

export default app