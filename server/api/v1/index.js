/* eslint-disable no-undef */
// third-party libraries
import express from "express";
import morgan from "morgan";

// logging config
import logger from "../../config/winston.config";

// routes
import tradeRequestRouter from "./requests/requestRoutes";

// express app
const app = express();

// middlewares
app.use(morgan("combined", { stream: logger.stream }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// default routes
app.use("/api/v1/requests", tradeRequestRouter);

export default app;
