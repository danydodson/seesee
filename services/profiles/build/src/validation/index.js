"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "validateProfile", {
  enumerable: true,
  get: function () {
    return _profile.default;
  }
});
exports.validateResults = void 0;

var _profile = _interopRequireDefault(require("./profile"));

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