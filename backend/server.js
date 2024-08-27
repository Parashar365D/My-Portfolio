import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

let db;
connectDB().then(database => {
    db = database;
    }).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

// API Route for sending form details
app.post('/contact', async (req, res) => {
    try {
        if (!db) {
            throw new Error('Database not connected');
        }
        const formInfo = req.body;
        const collection = db.collection('Form Detail');
        await collection.insertOne(formInfo);
        res.send({ success: true });
    } catch (err) {
        console.error('Error while inserting form data:', err.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
