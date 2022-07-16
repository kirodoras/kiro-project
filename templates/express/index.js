import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Running on ${port}`);
});