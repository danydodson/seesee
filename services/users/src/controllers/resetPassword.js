import asyncHandler from 'express-async-handler'
import resetPassword from '../services'

/**
@desc reset a users password
@route PUT /api/users/forgot-password
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  const { userData } = await resetPassword(req.payload.id)
  return res.json(userData)
})

