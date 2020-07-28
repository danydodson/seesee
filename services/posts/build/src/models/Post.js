"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _uuidv = require("uuidv4");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const PostSchema = Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imagePublicId: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
}); // create public id for image on save

PostSchema.pre('save', async function (next) {
  const post = this;
  post.imagePublicId = (0, _uuidv.uuid)();
  next();
});

var _default = _mongoose.default.model('Post', PostSchema);

exports.default = _default;