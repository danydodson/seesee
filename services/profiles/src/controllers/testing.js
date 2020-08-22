import asyncHandler from 'express-async-handler'

/**
@desc profiles controller test endpoint
@route GET /api/profiles/testing
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling profiles test controller endpoint ⏳⏳')
  const jsonMsg = '👍👍 [service] profiles test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})