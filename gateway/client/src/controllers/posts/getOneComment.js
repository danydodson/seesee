import asyncHandler from 'express-async-handler'

/**
@desc gateway client controller test endpoint
@route GET /gallery/testing
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [gateway_service] calling client controller test endpoint ⏳⏳')
  const jsonMsg = '👍👍 [gateway_service] client test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})