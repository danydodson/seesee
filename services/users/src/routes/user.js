import asyncHandler from 'express-async-handler'

import authenticate from '#root/middleware/authenticate'

import {
  signupUser,
  signinUser,
  getAuthUser,
  logoutUser,
  changeEmail,
  resetPassword,
  deleteUser,
} from '#root/controllers'

import {
  validateSignup,
  validateSignin,
  validateChangeEmail,
  validateIsEmail,
  validateResults,
} from '#root/validation'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/user', route)

  route.post(
    '/signup',
    validateSignup,
    validateResults,
    asyncHandler(signupUser)
  )

  route.post(
    '/signin',
    validateSignin,
    validateResults,
    asyncHandler(signinUser)
  )

  route.get(
    '/',
    authenticate,
    asyncHandler(getAuthUser)
  )

  route.put(
    '/logout',
    authenticate,
    asyncHandler(logoutUser)
  )

  route.put(
    '/change-email',
    authenticate,
    validateChangeEmail,
    validateResults,
    asyncHandler(changeEmail)
  )

  route.post(
    '/reset-password',
    validateIsEmail,
    validateResults,
    asyncHandler(resetPassword)
  )

  route.delete(
    '/',
    authenticate,
    asyncHandler(deleteUser)
  )
}
