import asyncHandler from 'express-async-handler'

/**
@desc posts test controller endpoint
@route GET /api/posts/testing
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling posts test controller endpoint ⏳⏳')
  const jsonMsg = '👍👍 [service] posts test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})