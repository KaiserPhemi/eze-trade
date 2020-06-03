// third-party libraries
import express from "express";

// routes
import tradeRequestRouter from "./requests/requestRoutes";

// main express router
const mainRouter = express.Router();

// mount routers
mainRouter.use("/request", tradeRequestRouter);

export default mainRouter;
