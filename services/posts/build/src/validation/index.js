"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "validatePost", {
  enumerable: true,
  get: function () {
    return _post.default;
  }
});
Object.defineProperty(exports, "validateComment", {
  enumerable: true,
  get: function () {
    return _comment.default;
  }
});
exports.validateResults = void 0;

var _post = _interopRequireDefault(require("./post"));

var _comment = _interopRequireDefault(require("./comment"));

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