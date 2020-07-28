"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc deletes one user
@route DELETE /api/users/delete
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳⏳  [service] calling destroy user endpoint');
  const foundUser = await _User.default.findOne({
    _id: req.user.id
  });

  if (!foundUser) {
    throw new Error('🔥🔥🔥  [service] user not found');
  } // const deleteListings = await Listing.deleteMany({ author: user._id })
  // const deleteComments = await Comment.deleteMany({ user: user._id })
  // const deleteListings = await Like.deleteMany({ user: user._id })


  const deleteUser = await _User.default.findOneAndRemove({
    _id: req.user._id
  });

  if (!deleteUser) {
    throw new Error('🔥🔥🔥  [service] error deleting user');
  }

  return res.json({
    msg: 'success: user was removed'
  });
});

exports.default = _default;