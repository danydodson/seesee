import asyncHandler from 'express-async-handler'
import UserService from '../services'

/**
@desc change a users password
@route POST /api/users/change-password
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  const userServiceInstance = new UserService
  const { jsonMsg } = await userServiceInstance.testingService()
  return res.json({ jsonMsg })
})