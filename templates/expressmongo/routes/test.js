import express from 'express';
import { insertTest, findTest } from '../controllers/testController.js';
import { validateTest } from '../middlewares/testMiddle.js';

const testRouter = express.Router();

testRouter
    .post("/test", validateTest, insertTest)
    .get("/test", findTest);

export default testRouter;