import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'

/**
@desc get all posts controller endpoint
@route GET /api/posts/all
@auth public
*/

export default asyncHandler(async (req, res, next) => {

  console.debug('⏳⏳ [service] calling get auth users posts api endpoint ⏳⏳')

  // const user_id = req.user._id

  const posts = await Post.find({ 'author': req.user._id })

  return res.json(posts)

})