import asyncHandler from 'express-async-handler'
import got from 'got'

import { POSTS_SERVICE } from '#root/adapters'

/**
@desc get auth users posts
@route GET /gallery
@auth public
*/

export default asyncHandler(async (req, res, next) => {

  console.debug('⏳⏳ [calling] get auth users posts endpoint ⏳⏳')
 
  const user = req.user._id

  const posts = await got.get(`${POSTS_SERVICE}/me`).json()

  // const filteredPosts = allPosts

  return res.json(posts)

})