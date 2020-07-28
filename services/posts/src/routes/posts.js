import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  testing,
  getPosts,
  createPost,
  getPost,
  editPost,
  createComment,
  editComment,
  addLike,
} from '#root/controllers'


import {
  validatePost,
  validateComment,
  validateResults,
} from '#root/validation'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/posts', route)

  route.get(
    '/testing',
    asyncHandler(testing)
  )

  route.get(
    '/all',
    asyncHandler(getPosts)
  )

  route.post(
    '/create',
    auth,
    validatePost,
    validateResults,
    asyncHandler(createPost)
  )

  route.get(
    '/see/:post_id',
    asyncHandler(getPost)
  )

  route.put(
    '/edit/:post_id',
    validatePost,
    validateResults,
    asyncHandler(editPost)
  )

  route.post(
    '/comments/:post_id',
    validateComment,
    validateResults,
    asyncHandler(createComment)
  )

  route.put(
    '/comments/:post_id',
    validateComment,
    validateResults,
    asyncHandler(editComment)
  )

  route.post(
    '/like/:post_id',
    validatePost,
    validateResults,
    asyncHandler(addLike)
  )

}
