import express from 'express';
import testRouter from './test.js';

const router = express.Router();
router.use(testRouter);

export default router;