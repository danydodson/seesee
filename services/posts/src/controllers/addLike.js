import asyncHandler from 'express-async-handler'

import Post from '#root/models/Post'
import Comment from '#root/models/Comment'

/**
@desc register a new user
@route POST /api/users/register
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling add like endpoint ⏳⏳')
  const jsonMsg = '⏳⏳ [service] add like endpoint working ⏳⏳'
  return res.json(jsonMsg)
})