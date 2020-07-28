import asyncHandler from 'express-async-handler'
import UserService from '../services'

/**
@desc user logout
@route GET /api/users/logout
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  const userServiceInstance = new UserService
  const { jsonMsg } = await userServiceInstance.testingService()
  return res.json({ jsonMsg })
})