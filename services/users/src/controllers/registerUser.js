import asyncHandler from 'express-async-handler'
import crypto from 'crypto'

import User from '#root/models/User'

/**
@desc register a new user
@route POST /api/users/register
@auth public
*/

export default asyncHandler(async (req, res, next) => {

  console.debug('⏳⏳ [service] calling register user endpoint ⏳⏳')

  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex')

  console.debug('⏳⏳ [service] building new user ⏳⏳')

  const userRecord = new User({ ...req.body, salt: salt, hash: hash })

  await userRecord.generateAuthToken()

  if (!userRecord) {
    console.error('🔥🔥 [service] user connot be created 🔥🔥')
  }

  const user = userRecord.toObject()

  return res.json(user)

})