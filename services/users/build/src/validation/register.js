"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [(0, _expressValidator.check)('email').trim().escape().unescape().isString().isEmail().withMessage('a valid email is required').normalizeEmail().bail().custom((value, {
  req
}) => {
  return _User.default.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return Promise.reject('email already in use');
    }
  });
}), (0, _expressValidator.check)('username').trim().escape().unescape().isString().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('username cant be empty').bail().isAlphanumeric().withMessage('username can only contain letters and numbers').isLength({
  min: 3,
  max: 30
}).withMessage('username requires a minimum of 3 characters').custom((value, {
  req
}) => {
  return _User.default.findOne({
    'username': req.body.username
  }).then(user => {
    if (user) {
      return Promise.reject('username already in use');
    }
  });
}), (0, _expressValidator.check)('password').trim().escape().unescape().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('password is required').matches(/(?=.*[0-9])/).withMessage('password requires at least one number').matches(/(?=.*[A-Za-z])/).withMessage('password requires at least one letter').matches(/(?=.*[@$.!%*#?&])/).withMessage('password requires at least one special character').isLength({
  min: 8
}).withMessage('Password requires a minimum eight characters'), (0, _expressValidator.check)('password2').trim().escape().unescape().exists({
  checkFalsy: true,
  checkNull: true
}).withMessage('confirm password required').if((0, _expressValidator.check)('password').exists({
  checkFalsy: false,
  checkNull: false
})).custom((value, {
  req
}) => value === req.body.password).withMessage('passwords dont match')];
exports.default = _default;