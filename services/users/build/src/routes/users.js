"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

var _controllers = require("../controllers");

var _validation = require("../validation");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, route = (0, _express.Router)()) => {
  app.use('/users', route);
  route.get('/testing', (0, _expressAsyncHandler.default)(_controllers.testing));
  route.post('/register', _validation.validateRegister, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.registerUser));
  route.post('/login', _validation.validateLogin, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.loginUser));
  route.get('/me', _auth.default, (0, _expressAsyncHandler.default)(_controllers.getUser));
  route.put('/change-email', _auth.default, (0, _expressAsyncHandler.default)(_controllers.changeEmail));
  route.put('/change-password', _auth.default, _validation.validateReset, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.changePassword));
  route.put('/reset-password', _auth.default, _validation.validateReset, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.resetPassword));
  route.post('/logout', _auth.default, (0, _expressAsyncHandler.default)(_controllers.logoutUser));
  route.post('/logout-all', _auth.default, (0, _expressAsyncHandler.default)(_controllers.logoutAll));
  route.delete('/destroy', _auth.default, (0, _expressAsyncHandler.default)(_controllers.deleteUser));
};

exports.default = _default;