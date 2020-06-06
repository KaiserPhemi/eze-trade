/* eslint-disable no-undef */
// libraries
import "babel-polyfill";
import dotenv from "dotenv";

// express app
import app from "./server";

dotenv.config();

// app port
const PORT = parseInt(process.env.PORT, 10);

// start app
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App started. Listening on port ${PORT}...`);
});
