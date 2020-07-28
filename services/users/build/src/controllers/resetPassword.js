"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _services = _interopRequireDefault(require("../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc reset a users password
@route PUT /api/users/forgot-password
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  const {
    userData
  } = await (0, _services.default)(req.payload.id);
  return res.json(userData);
});

exports.default = _default;