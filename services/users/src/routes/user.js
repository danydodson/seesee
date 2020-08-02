import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  signupUser,
  signinUser,
  getAuthUser,
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
    auth,
    asyncHandler(getAuthUser)
  )

  route.put(
    '/change-email',
    auth,
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
    auth,
    asyncHandler(deleteUser)
  )
}
