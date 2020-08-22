import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'

/**
@desc delete user
@route DELETE /user
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [gateway_service] calling client controller test endpoint ⏳⏳')
  const jsonMsg = '👍👍 [gateway_service] client test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})