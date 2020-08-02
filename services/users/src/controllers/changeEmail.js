import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc change a user email
@route PUT /api/user/change-email
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling change email endpoint ⏳⏳')

  const userRecord = await User.findOne({ _id: req.user.id })
  if (!userRecord) throw new Error('🔥🔥 user is not authorized 🔥🔥')

  logger.debug('⏳⏳ [service] generating a change email token ⏳⏳')

  const options = {
    sub: 'change_email',
    email1: userRecord.email,
    email2: req.body.email2,
  }

  const tokenObject = await userRecord.generateAuthToken(options)
  const resetToken = tokenObject.toString()

  logger.debug('⏳⏳ [service] generating msg to send user ⏳⏳')

  const mailData = {
    currentEmail: userRecord.email,
    newEmail: req.body.email2,
    client: 'config.client',
    token: resetToken,
  }

  /**
   * @TODO 
   * send msg to new email asking to confirm.
   * add logic to save new email to user db
  */

  const user = userRecord.toObject()

  return res.json({ user, mailData })
})

