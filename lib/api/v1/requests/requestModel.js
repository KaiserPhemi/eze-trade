"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SellRequest = exports.BuyRequest = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// third-party libraries
var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
/**
 * @desc  default schemma for all requests
 */

var tradeRequestModel = new Schema({
  name: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  storageCapacity: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}); // model(s)

var BuyRequest = model("BuyRequest", tradeRequestModel);
exports.BuyRequest = BuyRequest;
var SellRequest = model("SellRequest", tradeRequestModel);
exports.SellRequest = SellRequest;