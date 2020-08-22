import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'

/**
@desc posts controller that deletes a post
@route POST /api/posts/destroy/:post_id
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling delete post endpoint ⏳⏳')
  const jsonMsg = '⏳⏳ [service] delete post endpoint working ⏳⏳'
  return res.json(jsonMsg)
})