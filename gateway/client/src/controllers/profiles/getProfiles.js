import asyncHandler from 'express-async-handler'
import got from 'got'

import { PROFILES_SERVICE } from '#root/adapters'

/**
@desc get all profiles controller
@route GET /gallery
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all profiles controller endpoint ⏳⏳')
  const profiles = await got.get(`${PROFILES_SERVICE}/all`).json()
  return res.json(profiles)
})
