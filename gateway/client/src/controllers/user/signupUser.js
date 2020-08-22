import asyncHandler from 'express-async-handler'
import got from 'got'

import { USERS_SERVICE } from '#root/adapters'
import logger from '#root/loaders/logger'

/**
@desc user signup
@route POST /user/signup
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [gateway] calling user signup endpoint ⏳⏳')
  const response = await got.post(`${USERS_SERVICE}/signup`, {
    json: {
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    },
  }).json()
  return res.json(response)
})