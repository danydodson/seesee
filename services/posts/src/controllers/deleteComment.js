import asyncHandler from 'express-async-handler'

import Comment from '#root/models/Comment'

/**
@desc delete comment endpoint
@route POST /api/comment/:id
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling delete comment endpoint ⏳⏳')
  const jsonMsg = '⏳⏳ [service] delete comment endpoint working ⏳⏳'
  return res.json(jsonMsg)
})