"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Comment = _interopRequireDefault(require("./Comment"));

var _Like = _interopRequireDefault(require("./Like"));

var _Post = _interopRequireDefault(require("./Post"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Comment: _Comment.default,
  Like: _Like.default,
  Post: _Post.default,
  User: _User.default
};
exports.default = _default;