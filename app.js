import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import EventRouter from './route/EventRoute.js';
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Connected to database');
    });
}

await connect();

const app = express();

app.use(express.json());

app.use('/events', EventRouter);


const PORT = 7000;

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
});
