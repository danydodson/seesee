"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema; // Comments schema that has reference to Post and User schemas

const CommentSchema = Schema({
  content: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

var _default = _mongoose.default.model('Comment', CommentSchema);

exports.default = _default;