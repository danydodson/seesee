"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _default = [(0, _expressValidator.check)('newPassword').trim().escape().unescape().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('password is required').matches(/(?=.*[0-9])/).withMessage('password requires at least one number').matches(/(?=.*[A-Za-z])/).withMessage('password requires at least one letter').matches(/(?=.*[@$.!%*#?&])/).withMessage('password requires at least one special character').isLength({
  min: 8
}).withMessage('Password requires a minimum eight characters'), (0, _expressValidator.check)('newPassword2').trim().escape().unescape().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('confirm password required').if((0, _expressValidator.check)('newPassword').exists({
  checkFalsy: false,
  checkNull: false
})).custom((value, {
  req
}) => value === req.body.newPassword).withMessage('passwords dont match')];
exports.default = _default;