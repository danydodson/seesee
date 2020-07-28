"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc get one post endpoint
@route GET /api/posts/:post_id
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get one post endpoint ⏳⏳');
  let foundPost = await _Post.default.find({
    id: req.params.post_id
  });
  await foundPost.populate('author');
  return res.json(foundPost);
});

exports.default = _default;