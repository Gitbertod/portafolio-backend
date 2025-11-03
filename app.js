import express from 'express'
import postRouter from './routes/postRouter.js'

const app = express()
app.use(express.json());

app.use('/api/v1/posts',postRouter)

export default app