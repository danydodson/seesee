"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc create a new post endpoint
@route POST /api/posts/create
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling create post endpoint ⏳⏳');
  const postRecord = await new _Post.default({ ...req.body,
    author: req.user._id
  });
  await postRecord.save();
  return res.json(postRecord);
});

exports.default = _default;