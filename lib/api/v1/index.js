"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _requestRoutes = _interopRequireDefault(require("./requests/requestRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// third-party libraries
// routes
// main express router
var mainRouter = _express["default"].Router(); // mount routers


mainRouter.use("/request", _requestRoutes["default"]);
var _default = mainRouter;
exports["default"] = _default;