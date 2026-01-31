import express from 'express';
import userRouter from './Routes/User.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

// ✅ Proper CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://auth-c8ib.vercel.app'
  ],
  credentials: true
}));

// Routes
app.use('/api/user', userRouter);

// Mongo
mongoose.connect(process.env.MONGO_URL, {
  dbName: "Authentication",
}).then(() => console.log("Database connected"))
  .catch(err => console.log(err.message));

export default app;
