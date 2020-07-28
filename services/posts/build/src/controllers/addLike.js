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
@desc register a new user
@route POST /api/users/register
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling add like endpoint ⏳⏳');
  const jsonMsg = '⏳⏳ [service] add like endpoint working ⏳⏳';
  return res.json(jsonMsg);
});

exports.default = _default;