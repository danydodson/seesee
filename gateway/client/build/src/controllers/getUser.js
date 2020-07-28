"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc get current auth user controller
@route GET /gallery/auth
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get user endpoint ! ⏳⏳');
  const user = await req.user;
  return res.json(user);
});

exports.default = _default;