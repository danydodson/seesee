"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _controllers = require("../controllers");

var _validation = require("../validation");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, route = (0, _express.Router)()) => {
  app.use('/profiles', route);
  route.get('/testing', (0, _expressAsyncHandler.default)(_controllers.testing));
  route.post('/create', _validation.validateProfile, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.createProfile));
  route.get('/all', (0, _expressAsyncHandler.default)(_controllers.getProfiles));
};

exports.default = _default;