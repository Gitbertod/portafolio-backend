import express from 'express'
import postRouter from './routes/postRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()
app.use(express.json());

app.use('/api/v1/posts',postRouter)
app.use('/api/v1/users',userRouter)

export default app