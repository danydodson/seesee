import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'

/**
@desc get one post endpoint
@route GET /api/posts/:post_id
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get one post endpoint ⏳⏳')
  const foundPost = await Post.findOne({ '_id': req.params.post_id })
  return res.json(foundPost)
})