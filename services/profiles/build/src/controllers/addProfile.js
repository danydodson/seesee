"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
@desc create a new profile
@route POST /api/profiles/new
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳⏳  [service] calling create profile endpoint !');
  const jsonMsg = '⏳⏳⏳  [service] create profile endpoint working !';
  return res.json(jsonMsg);
});

exports.default = _default;