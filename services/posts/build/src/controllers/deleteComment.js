"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc delete comment endpoint
@route POST /api/comment/:id
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling delete comment endpoint ⏳⏳');
  const jsonMsg = '⏳⏳ [service] delete comment endpoint working ⏳⏳';
  return res.json(jsonMsg);
});

exports.default = _default;