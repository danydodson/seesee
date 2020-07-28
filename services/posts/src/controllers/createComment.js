import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'
import Comment from '#root/models/Comment'

/**
@desc create a new comment
@route POST /api/posts/create-comment
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling create comment endpoint ⏳⏳')
  const foundPost = await Post.findOneAndUpdate({ id: req.params.id })
  const commentRecord = await new Comment({  ...req.body, post: foundPost.id})
  console.debug('⏳⏳ [service] saving new comment ⏳⏳')
  await commentRecord.save()
  console.debug('⏳⏳ [service] saving new comment to post ⏳⏳')
  await foundPost.save()
  return res.json(commentRecord)
})