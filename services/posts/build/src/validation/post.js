"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressValidator = require("express-validator");

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [(0, _expressValidator.param)(':post_slug').if((0, _expressValidator.check)('post_slug').exists({
  checkFalsy: false,
  checkNull: false
})).custom((value, {
  req
}) => {
  return _Post.default.findOne({
    user: req.payload.id
  }).then(post => {
    if (!post || post.user.toString() !== req.payload.id.toString()) {
      return Promise.reject('user not authenticated');
    }
  });
}).if((0, _expressValidator.check)('post_slug').exists({
  checkFalsy: false,
  checkNull: false
})).custom((value, {
  req
}) => {
  return _Post.default.findOne({
    'links.slug': req.params.post_slug
  }).then(post => {
    if (!post) {
      return Promise.reject('post slug doesnt exist');
    }
  });
}), (0, _expressValidator.check)('details.mediums').trim().escape().unescape().exists().withMessage('medium is required'), (0, _expressValidator.check)('details.title').trim().escape().unescape().isLength({
  min: 0,
  max: 20
}).withMessage('maxium of 20 characters').exists().withMessage('title is required'), (0, _expressValidator.check)('details.description').trim().escape().unescape().isLength({
  min: 0,
  max: 256
}).withMessage('maxium of 256 characters').exists().withMessage('description is required'), (0, _expressValidator.check)('options.critique').toBoolean().exists().withMessage('critique value is required'), (0, _expressValidator.check)('options.shareable').toBoolean().exists().withMessage('shareable value is required'), (0, _expressValidator.check)('options.purchasable').toBoolean().exists().withMessage('purchasable value is required'), (0, _expressValidator.check)('details.price').if((0, _expressValidator.check)('options.purchasable').custom((value, {
  req
}) => value === true)).exists().withMessage('price value is required').trim().escape().unescape().toFloat(), (0, _expressValidator.check)('details.tags').trim().escape().unescape()];
exports.default = _default;