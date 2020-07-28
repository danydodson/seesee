"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "validateRegister", {
  enumerable: true,
  get: function () {
    return _register.default;
  }
});
Object.defineProperty(exports, "validateLogin", {
  enumerable: true,
  get: function () {
    return _login.default;
  }
});
Object.defineProperty(exports, "validateAuth", {
  enumerable: true,
  get: function () {
    return _auth.default;
  }
});
Object.defineProperty(exports, "validateReset", {
  enumerable: true,
  get: function () {
    return _reset.default;
  }
});
Object.defineProperty(exports, "validateIsVerified", {
  enumerable: true,
  get: function () {
    return _verify.default;
  }
});
exports.validateResults = void 0;

var _register = _interopRequireDefault(require("./register"));

var _login = _interopRequireDefault(require("./login"));

var _auth = _interopRequireDefault(require("./auth"));

var _reset = _interopRequireDefault(require("./reset"));

var _verify = _interopRequireDefault(require("./verify"));

var _expressValidator = require("express-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateResults = (req, res, next) => {
  // const format = ({ location, param, msg }) => `${location} [${param}]: ${msg}`
  const format = ({
    location,
    param,
    msg
  }) => `${msg}`;

  const results = (0, _expressValidator.validationResult)(req).formatWith(format);

  if (!results.isEmpty()) {
    return res.status(422).json({
      errors: results.array({
        onlyFirstError: true
      })
    });
  }

  next();
};

exports.validateResults = validateResults;