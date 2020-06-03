// libraries
import dotenv from "dotenv";
import express from "express";

dotenv.config();

// main router
import mainRouter from "./api/v1";

// instantiate express app
const app = express();
const PORT = 5555;

// default routes
app.use("/api/v1", mainRouter);
app.get("*");

app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
