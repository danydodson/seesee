// import asyncHandler from 'express-async-handler'
import got from 'got'

import { USERS_SERVICE } from '#root/adapters'
import logger from '#root/loaders/logger'

/**
@desc user signup
@route POST /user/signup
@auth public
*/

export default async (req, res, next) => {
  logger.debug('⏳⏳ [gateway] calling user signup endpoint ⏳⏳')
  try {
    const response = await got.post(`${USERS_SERVICE}/signup`, {
      json: {
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      },
    }).json()

    return res.json(response)
    // return res.json(response.body)

  } catch (error) {
    const e = JSON.parse(error.response.body)
    throw new Error(e.toString())
    // console.log(JSON.parse(error.response.body))
    // process.exit(1)
    // return
  }

}
