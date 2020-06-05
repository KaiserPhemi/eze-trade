/* eslint-disable no-undef */
// third-party libraries
import express from "express";

// routes
import tradeRequestRouter from "./requests/requestRoutes";

// express app
const app = express();

// middlewares
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
