import asyncHandler from 'express-async-handler'

import {
  testing,
  getPost,
  getPosts,
  getProfile,
  getProfiles,
} from '#root/controllers'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/gallery', route)

  route.get(
    '/testing',
    asyncHandler(testing)
  )

  route.get(
    '/listings/:post_id',
    asyncHandler(getPost)
  )

  route.get(
    '/listings',
    asyncHandler(getPosts)
  )

  route.get(
    '/artists/:profile_id',
    asyncHandler(getProfile)
  )

  route.get(
    '/artists',
    asyncHandler(getProfiles)
  )

}
