"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _controllers = require("../controllers");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, route = (0, _express.Router)()) => {
  app.use('/gallery', route);
  route.get('/testing', (0, _expressAsyncHandler.default)(_controllers.testing));
  route.get('/listings/:post_id', (0, _expressAsyncHandler.default)(_controllers.getPost));
  route.get('/listings', (0, _expressAsyncHandler.default)(_controllers.getPosts));
  route.get('/artists/:profile_id', (0, _expressAsyncHandler.default)(_controllers.getProfile));
  route.get('/artists', (0, _expressAsyncHandler.default)(_controllers.getProfiles));
};

exports.default = _default;