import express from "express";

const tradeRequestRouter = express.Router();

// routes
tradeRequestRouter.route("/").get().post();

export default tradeRequestRouter;
