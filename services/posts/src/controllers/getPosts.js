import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'

/**
@desc get all posts controller endpoint
@route GET /api/posts/all
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all posts controller endpoint ⏳⏳')
  let foundPosts = await Post.find()
  return res.json(foundPosts)
})