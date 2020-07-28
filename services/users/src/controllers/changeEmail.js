import asyncHandler from 'express-async-handler'
import UserService from '../services'

/**
@desc changes a users email
@route PUT /api/user/change-email
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  const userServiceInstance = new UserService
  const { jsonMsg } = await userServiceInstance.testingService()
  return res.json({ jsonMsg })
})

