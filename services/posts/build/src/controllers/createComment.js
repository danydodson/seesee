"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Post = _interopRequireDefault(require("../models/Post"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc create a new comment
@route POST /api/posts/create-comment
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling create comment endpoint ⏳⏳');
  const foundPost = await _Post.default.findOneAndUpdate({
    id: req.params.id
  });
  const commentRecord = await new _Comment.default({ ...req.body,
    post: foundPost.id
  });
  console.debug('⏳⏳ [service] saving new comment ⏳⏳');
  await commentRecord.save();
  console.debug('⏳⏳ [service] saving new comment to post ⏳⏳');
  await foundPost.save();
  return res.json(commentRecord);
});

exports.default = _default;