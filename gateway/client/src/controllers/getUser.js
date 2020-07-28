import asyncHandler from 'express-async-handler'

/**
@desc get current auth user controller
@route GET /gallery/auth
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get user endpoint ⏳⏳')
  const user = await req.user
  return res.json(user)
})
