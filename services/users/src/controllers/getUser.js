import asyncHandler from 'express-async-handler'

/**
@desc get jwt payload for a user
@route GET /api/auth/me
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get current user endpoint ⏳⏳')
  const user = req.user
  return res.json(user)
})