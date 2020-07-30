import asyncHandler from 'express-async-handler'
import got from 'got'

import { USERS_SERVICE } from '#root/adapters'

/**
@desc user login controller
@route GET /gallery
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling user login controller endpoint ⏳⏳')
  const user = await got.post(`${USERS_SERVICE}/login`, {
    json: {
      email: req.body.email,
      password: req.body.password
    }
  }).json()
  return res.json(user)
})
