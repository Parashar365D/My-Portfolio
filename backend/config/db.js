import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI;

let db;

export async function connectDB() {
    if (db) {
        return db;
    }

    try {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db('Portfolio');
        console.log('Connected to MongoDB');
        return db;
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }
}
