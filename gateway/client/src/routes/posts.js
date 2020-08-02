import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

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
    auth,
    asyncHandler(createPost)
  )

  route.get(
    '/:id',
    asyncHandler(getPost)
  )

  route.put(
    '/:id',
    auth,
    asyncHandler(updatePost)
  )

  route.delete(
    '/:id',
    auth,
    asyncHandler(deletePost)
  )
}
