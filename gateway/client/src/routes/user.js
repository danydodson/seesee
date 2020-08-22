import asyncHandler from 'express-async-handler'

import authenticate from '#root/middleware/authenticate'
import authorize from '#root/middleware/authorize'

import {
  signupUser,
  signinUser,
  getAuthUser,
  changeEmail,
  resetPassword,
  deleteUser,
} from '#root/controllers/user'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/user', route)

  route.post(
    '/signup',
    asyncHandler(signupUser)
  )

  route.post(
    '/signin',
    asyncHandler(signinUser)
  )

  route.get(
    '/',
    authenticate,
    authorize('user'),
    asyncHandler(getAuthUser)
  )

  route.put(
    '/change-email',
    authenticate,
    authorize('user'),
    asyncHandler(changeEmail)
  )

  route.put(
    '/reset-password',
    asyncHandler(resetPassword)
  )

  route.delete(
    '/',
    authenticate,
    authorize('user'),
    asyncHandler(deleteUser)
  )
}
