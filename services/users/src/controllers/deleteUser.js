import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc delete user
@route DELETE /api/user
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling delete user endpoint ⏳⏳')

  const foundUser = await User.findOne({ _id: req.user.id })
  if (!foundUser) throw new Error('🔥🔥 [service] user not found 🔥🔥')

  const deleteUser = await User.findOneAndRemove({ _id: req.user.id })
  // const deleteListings = await Listing.deleteMany({ author: user._id })
  // const deleteComments = await Comment.deleteMany({ user: user._id })
  // const deleteListings = await Like.deleteMany({ user: user._id })

  if (!deleteUser) {
    throw new Error('🔥🔥 [service] error deleting user 🔥🔥')
  }

  return res.json({ msg: 'success: user was removed' })
})
