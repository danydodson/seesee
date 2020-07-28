"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const app = (0, _express.Router)();
  (0, _posts.default)(app);
  return app;
};

exports.default = _default;