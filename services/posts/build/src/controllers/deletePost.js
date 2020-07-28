"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc posts controller that deletes a post
@route POST /api/posts/destroy/:post_id
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling delete post endpoint ⏳⏳');
  const jsonMsg = '⏳⏳ [service] delete post endpoint working ⏳⏳';
  return res.json(jsonMsg);
});

exports.default = _default;