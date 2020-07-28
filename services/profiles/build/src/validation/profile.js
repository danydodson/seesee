"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _default = [(0, _expressValidator.check)('bio').trim().escape().unescape().exists().withMessage('content is required')];
exports.default = _default;