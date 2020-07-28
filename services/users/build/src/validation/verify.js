"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _default = [(0, _expressValidator.check)('req').custom((value, {
  req
}) => {
  if (req.payload.verified === true || req.payload.verifyToken === {}) {
    throw new Error('your accounts already been verified');
  }

  return true;
})];
exports.default = _default;