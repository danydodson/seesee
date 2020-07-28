import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  testing,
  getUser,
} from '#root/controllers'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/auth', route)

  route.get(
    '/testing',
    auth,
    asyncHandler(testing)
  )

  route.get(
    '/details',
    auth,
    asyncHandler(getUser)
  )

}
