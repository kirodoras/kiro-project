import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

export let db;
mongoClient.connect().then(() => {
    db = mongoClient.db(process.env.MONGO_DB);
});