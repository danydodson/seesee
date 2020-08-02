import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc reset a user password
@route PUT /api/user/reset-password
@auth public
*/

export default asyncHandler(async (req, res, next) => {

  logger.debug('⏳⏳ [service] calling forgot password endpoint ⏳⏳')

  const userRecord = await User.findOne({ email: req.body.email })
  if (!userRecord) throw new Error('🔥🔥 Account with this email not found 🔥🔥')

  logger.debug('⏳⏳ [service] generating a change password token ⏳⏳')

  const options = {
    sub: 'change_password',
    email: userRecord.email,
  }

  const tokenObject = await userRecord.generateAuthToken(options)
  const resetToken = tokenObject.toString()

  logger.debug('⏳⏳ [service] generating reset password msg to send user ⏳⏳')

  const mailData = {
    client: 'config.client',
    token: resetToken,
  }

  /**
   * @TODO 
   * include mailer and logic to 
   * save the new email address to user db
  */

  const user = userRecord.toObject()

  return res.json({ user, mailData })
})

