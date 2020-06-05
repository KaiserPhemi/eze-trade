/* eslint-disable no-undef */
// libraries
import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoose from "mongoose";

dotenv.config();

console.log("the link", process.env.DB_URI);
// main router
import mainRouter from "./server/api/v1";

// instantiate app & declare constants
const app = express();
const PORT = parseInt(process.env.PORT, 10);

const DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URI
    : process.env.DB_URI_LOCAL;

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

// database connection
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

// default routes
app.use("/api/v1", mainRouter);
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
  return res.status(200).send({
    message: "Eze Trade app running",
  });
});

// start app
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
