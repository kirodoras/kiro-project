import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

export default app;
