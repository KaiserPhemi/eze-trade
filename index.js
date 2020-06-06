/* eslint-disable no-undef */
// libraries
import "babel-polyfill";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoose from "mongoose";

// express app
import app from "./server/api/v1";

dotenv.config();

// app port
const PORT = parseInt(process.env.PORT, 10);

// database connection
const DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URI_PROD
    : process.env.DB_URI_LOCAL;

// database connection
console.log("db", DB_URI);
mongoose.connect(
  DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Database connected...");
  }
);

// static file path
app.use(express.static(path.join(__dirname, "dist")));

// default route
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
  return res.status(200).send({
    message: "Eze Trade app running",
  });
});

// start app
if (!module.parent) {
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`App started. Listening on port ${PORT}...`);
  });
}

export default app;
