import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
  logoutAll,
  changeEmail,
  changePassword,
  resetPassword,
  destroyUser,
} from '#root/controllers'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/user', route)

  route.post(
    '/register',
    asyncHandler(registerUser)
  )

  route.post(
    '/login',
    asyncHandler(loginUser)
  )

  route.get(
    '/me',
    auth,
    asyncHandler(getUser)
  )

  route.post(
    '/logout',
    auth,
    asyncHandler(logoutUser)
  )

  route.post(
    '/logout-all',
    auth,
    asyncHandler(logoutAll)
  )

  route.put(
    '/change-email',
    auth,
    asyncHandler(changeEmail)
  )

  route.post(
    '/change-password',
    auth,
    asyncHandler(changePassword)
  )

  route.post(
    '/reset-password',
    auth,
    asyncHandler(resetPassword)
  )

  route.delete(
    '/destroy',
    auth,
    asyncHandler(destroyUser)
  )

}
