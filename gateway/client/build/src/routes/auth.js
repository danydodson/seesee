"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _controllers = require("../controllers");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, route = (0, _express.Router)()) => {
  app.use('/auth', route);
  route.get('/testing', _auth.default, (0, _expressAsyncHandler.default)(_controllers.testing));
  route.get('/details', _auth.default, (0, _expressAsyncHandler.default)(_controllers.getUser));
};

exports.default = _default;