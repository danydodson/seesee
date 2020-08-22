import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'
import User from '#root/models/User'

/**
@desc user logout
@route POST /api/user/logout
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [service] calling logout api endpoint ⏳⏳')

  const user = User.findOne({ id: req.user.id })

  

})