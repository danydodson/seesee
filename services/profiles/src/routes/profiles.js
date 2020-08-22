import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  testing,
  getProfiles,
  createProfile,
  getProfile,
} from '../controllers'


import {
  validateProfile,
  validateResults,
} from '../validation'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/profiles', route)

  route.get(
    '/testing',
    asyncHandler(testing)
  )

  route.get(
    '/all',
    asyncHandler(getProfiles)
  )

  route.post(
    '/create',
    auth,
    validateProfile,
    validateResults,
    asyncHandler(createProfile)
  )

  route.get(
    '/see/:profile_id',
    asyncHandler(getProfile)
  )

}
