import asyncHandler from 'express-async-handler'

/**
@desc users controller test endpoint
@route GET /api/users/testing
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling users test controller endpoint ⏳⏳')
  const jsonMsg = '👍👍 [service] users test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})