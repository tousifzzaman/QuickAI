import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/ai.routes.js';
import connectCloudinary from './utils/cloudinary.utils.js';
import userRouter from './routes/user.routes.js';

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req,res)=> res.send('server is Live!'))

app.use(requireAuth())

app.use('/api/ai', aiRouter)

app.use('/api/user', userRouter)

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server is running on port : ', port)
})