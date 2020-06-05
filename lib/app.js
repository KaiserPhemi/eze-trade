"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _v = _interopRequireDefault(require("./server/api/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-undef */
// libraries
_dotenv["default"].config(); // main router


// instantiate app & declare constants
var app = (0, _express["default"])();
var PORT = parseInt(process.env.PORT, 10);
var DB_URI = process.env.DB_URI_LOCAL; // console.log("db", DB_URI);
// middlewares

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json()); // database connection

_mongoose["default"].connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Database connected...");
}); // static file path


app.use(_express["default"]["static"](_path["default"].join(__dirname, "dist"))); // default routes

app.use("/api/v1", _v["default"]);
app.get("*", function (req, res) {
  if (process.env.NODE_ENV === "production") {
    return res.sendFile(_path["default"].join(__dirname, "dist", "index.html"));
  }

  return res.status(200).send({
    message: "Eze Trade app running"
  });
}); // start app

app.listen(PORT, function () {
  return console.log("App running on port ".concat(PORT, "..."));
});