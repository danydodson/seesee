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
  app.use('/posts', route);
  route.get('/testing', (0, _expressAsyncHandler.default)(_controllers.testing));
  route.get('/all', (0, _expressAsyncHandler.default)(_controllers.getPosts));
  route.post('/create', _auth.default, _validation.validatePost, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.createPost));
  route.get('/see/:post_id', (0, _expressAsyncHandler.default)(_controllers.getPost));
  route.put('/edit/:post_id', _validation.validatePost, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.editPost));
  route.post('/comments/:post_id', _validation.validateComment, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.createComment));
  route.put('/comments/:post_id', _validation.validateComment, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.editComment));
  route.post('/like/:post_id', _validation.validatePost, _validation.validateResults, (0, _expressAsyncHandler.default)(_controllers.addLike));
};

exports.default = _default;