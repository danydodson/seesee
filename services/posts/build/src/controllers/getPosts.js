"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc get all posts controller endpoint
@route GET /api/posts/all
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all posts controller endpoint ⏳⏳');
  let foundPosts = await _Post.default.find();
  return res.json(foundPosts);
});

exports.default = _default;