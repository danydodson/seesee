import asyncHandler from 'express-async-handler'
import crypto from 'crypto'

import User from '#root/models/User'

/**
@desc user login
@route POST /api/users/login
@auth public
*/

export default asyncHandler(async (req, res, next) => {

  console.debug('⏳⏳ [service] calling login api endpoint ⏳⏳')

  const userRecord = await User.findOne({ email: req.body.email })

  if (!userRecord) {
    throw new Error('🔥🔥 [service] user is not registered 🔥🔥')
  }

  let hash = crypto
    .pbkdf2Sync(req.body.password, userRecord.salt, 10000, 512, 'sha512')
    .toString('hex')

  if (userRecord.hash === hash) {
    const user = userRecord.toObject()

    Reflect.deleteProperty(user, 'hash')
    Reflect.deleteProperty(user, 'salt')
    await userRecord.generateAuthToken()

    return res.json(user)

  } else {
    throw new Error('🔥🔥 [service] invalid credentials 🔥🔥')
  }

})