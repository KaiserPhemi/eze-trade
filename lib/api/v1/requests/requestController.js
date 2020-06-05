"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _requestModel = require("./requestModel");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @desc handles all trade requests
 */
var requestController = {
  /**
   * @desc retrieves all trade request
   * @param {object} req
   * @param {object} res
   */
  getAllRequest: function getAllRequest(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var allTradeRequests, sellRequests, buyRequests;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              allTradeRequests = {};
              _context.prev = 1;
              _context.next = 4;
              return _requestModel.SellRequest.find();

            case 4:
              sellRequests = _context.sent;
              _context.next = 7;
              return _requestModel.BuyRequest.find();

            case 7:
              buyRequests = _context.sent;
              allTradeRequests = {
                sellRequests: _toConsumableArray(sellRequests),
                buyRequests: _toConsumableArray(buyRequests)
              };
              return _context.abrupt("return", res.status(200).send({
                message: "All Trade Request retrieved.",
                allTradeRequests: allTradeRequests
              }));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              if (!_context.t0) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", res.status(501).send({
                message: "There's an error",
                error: _context.t0
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }))();
  },
  // async getBuyRequest(req, res) {},
  // async getSellRequest(req, res) {},

  /**
   * @desc adds a trade request to the database
   * @param {object} req
   * @param {object} res
   */
  addRequest: function addRequest(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _req$body, requestType, deviceList, createdReq;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, requestType = _req$body.requestType, deviceList = _req$body.deviceList;
              _context2.prev = 1;

              if (!(requestType === "buy")) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return _requestModel.BuyRequest.create(deviceList);

            case 5:
              _context2.t0 = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return _requestModel.SellRequest.insertMany(deviceList);

            case 10:
              _context2.t0 = _context2.sent;

            case 11:
              createdReq = _context2.t0;
              return _context2.abrupt("return", res.status(201).send({
                message: "Trade Request added",
                createdReq: createdReq
              }));

            case 15:
              _context2.prev = 15;
              _context2.t1 = _context2["catch"](1);

              if (!_context2.t1) {
                _context2.next = 19;
                break;
              }

              return _context2.abrupt("return", res.status(401).send({
                message: "Invalid request",
                error: _context2.t1
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }))();
  }
};
var _default = requestController;
exports["default"] = _default;