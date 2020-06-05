"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _requestController = _interopRequireDefault(require("./requestController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// third-party libraries
// controller
// router
var tradeRequestRouter = _express["default"].Router(); // routes


tradeRequestRouter.route("/").get(_requestController["default"].getAllRequest).post(_requestController["default"].addRequest);
var _default = tradeRequestRouter;
exports["default"] = _default;