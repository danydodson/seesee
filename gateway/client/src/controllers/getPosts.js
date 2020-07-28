import asyncHandler from 'express-async-handler'
import got from 'got'

import { POSTS_SERVICE } from '#root/adapters'

/**
@desc get all posts controller
@route GET /gallery
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all posts controller endpoint ⏳⏳')
  const posts = await got.get(`${POSTS_SERVICE}/all`).json()
  return res.json(posts)
})
