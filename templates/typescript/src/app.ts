import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'express-async-errors';
import router from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler.middleware";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
