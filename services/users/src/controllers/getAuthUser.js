import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'

/**
@desc get jwt payload for a user
@route GET /api/user
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling get auth user endpoint ⏳⏳')
  const user = req.user
  return res.json(user)
})