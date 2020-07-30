import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  getPosts,
  createPost,
  getUsersPosts,
  getFollowingPosts,
  getFavoritePosts,
  getPost,
  getPostComments,
} from '#root/controllers'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/gallery', route)

  route.get(
    '/see',
    asyncHandler(getPosts)
  )

  route.post(
    '/create',
    auth,
    asyncHandler(createPost)
  )

  route.get(
    '/me',
    auth,
    asyncHandler(getUsersPosts)
  )

  route.get(
    '/following',
    auth,
    asyncHandler(getFollowingPosts)
  )

  route.get(
    '/favorites',
    auth,
    asyncHandler(getFavoritePosts)
  )

  route.get(
    '/see/:post_id',
    asyncHandler(getPost)
  )

  route.get(
    '/comments/:post_id',
    asyncHandler(getPostComments)
  )

}
