"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _default = [(0, _expressValidator.check)('email').trim().escape().unescape().isString().isEmail().withMessage('a valid email is required').normalizeEmail().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('username is required'), (0, _expressValidator.check)('password').trim().escape().unescape().isString().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('password is required')];
exports.default = _default;