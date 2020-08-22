import asyncHandler from 'express-async-handler'

import crypto from 'crypto'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc user signup
@route POST /api/user/signup
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling signup api endpoint ⏳⏳')

  logger.debug('⏳⏳ [service] encrypting password ⏳⏳')
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex')

  logger.debug('⏳⏳ [service] building new user ⏳⏳')
  const userRecord = new User({
    ...req.body,
    salt: salt,
    hash: hash,
    profile: null
  })

  logger.debug('⏳⏳ [service] generating auth token ⏳⏳')
  await userRecord.generateAuthToken()

  if (!userRecord) {
    logger.error('🔥🔥 [service] user connot be created 🔥🔥')
  }

  const user = userRecord.toObject()

  return res.json(user)
})