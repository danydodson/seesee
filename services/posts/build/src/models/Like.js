"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema; // Like schema that has references to Post and User schema

const LikeSchema = Schema({
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'Listing'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

var _default = _mongoose.default.model('Like', LikeSchema);

exports.default = _default;