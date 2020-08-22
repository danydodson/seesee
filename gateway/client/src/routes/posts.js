import asyncHandler from 'express-async-handler'

import authenticate from '#root/middleware/authenticate'
import authorize from '#root/middleware/authorize'

import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from '#root/controllers/posts'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/gallery', route)

  route.get(
    '/',
    asyncHandler(getPosts)
  )

  route.post(
    '/create',
    authenticate,
    authorize('user'),
    asyncHandler(createPost)
  )

  route.get(
    '/:id',
    asyncHandler(getPost)
  )

  route.put(
    '/:id',
    authenticate,
    authorize('user'),
    asyncHandler(updatePost)
  )

  route.delete(
    '/:id',
    authenticate,
    authorize('user'),
    asyncHandler(deletePost)
  )
}
