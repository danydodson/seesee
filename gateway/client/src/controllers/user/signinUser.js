import asyncHandler from 'express-async-handler'
import got from 'got'

import logger from '#root/loaders/logger'
import { USERS_SERVICE } from '#root/adapters'

/**
@desc user signin
@route POST /user/signin
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [gateway] calling user login endpoint ⏳⏳')
  const user = await got.post(`${USERS_SERVICE}/signin`, {
    json: {
      email: req.body.email,
      password: req.body.password
    }
  }).json()
  return res.json(user)
})
