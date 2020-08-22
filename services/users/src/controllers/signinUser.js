import asyncHandler from 'express-async-handler'
import crypto from 'crypto'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc user signin
@route POST /api/user/signin
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling signin api endpoint ⏳⏳')

  const userRecord = await User.findOne({ email: req.body.email })

  if (!userRecord) {
    throw new Error('🔥🔥 [service] user is not registered 🔥🔥')
  }

  logger.debug('⏳⏳ [service] checking password ⏳⏳')
  let hash = crypto.pbkdf2Sync(req.body.password, userRecord.salt, 10000, 512, 'sha512').toString('hex')
  
  if (userRecord.hash === hash) {
    const user = userRecord.toObject()

    Reflect.deleteProperty(user, 'hash')
    Reflect.deleteProperty(user, 'salt')
    
    logger.debug('⏳⏳ [service] generating login token ⏳⏳')
    await userRecord.generateAuthToken()
    
    return res.json(user)
    
  } else {
    throw new Error('🔥🔥 [service] invalid credentials 🔥🔥')
  }

})