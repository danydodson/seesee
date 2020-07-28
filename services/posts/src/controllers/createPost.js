import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'

/**
@desc create a new post endpoint
@route POST /api/posts/create
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling create post endpoint ⏳⏳')
  const postRecord = await new Post({ ...req.body, author: req.user._id })
  await postRecord.save()
  return res.json(postRecord)
})