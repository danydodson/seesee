import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  testing,
  registerUser,
  loginUser,
  getUser,
  changeEmail,
  changePassword,
  resetPassword,
  logoutUser,
  logoutAll,
  deleteUser,
} from '#root/controllers'


import {
  validateRegister,
  validateLogin,
  validateReset,
  validateResults,
} from '#root/validation'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/users', route)

  route.get(
    '/testing',
    asyncHandler(testing)
  )

  route.post(
    '/register',
    validateRegister,
    validateResults,
    asyncHandler(registerUser)
  )

  route.post(
    '/login',
    validateLogin,
    validateResults,
    asyncHandler(loginUser)
  )

  route.get(
    '/me',
    auth,
    asyncHandler(getUser)
  )

  route.put(
    '/change-email',
    auth,
    asyncHandler(changeEmail)
  )

  route.put(
    '/change-password',
    auth,
    validateReset,
    validateResults,
    asyncHandler(changePassword)
  )

  route.put(
    '/reset-password',
    auth,
    validateReset,
    validateResults,
    asyncHandler(resetPassword)
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

  route.delete(
    '/destroy',
    auth,
    asyncHandler(deleteUser)
  )
}
