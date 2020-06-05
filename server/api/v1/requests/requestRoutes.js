// third-party libraries
import express from "express";

// controller
import requestController from "./requestController";

// router
const tradeRequestRouter = express.Router();

// routes
tradeRequestRouter
  .route("/")
  .get(requestController.getAllRequest)
  .post(requestController.addRequest);

export default tradeRequestRouter;
