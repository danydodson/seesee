import {
  testingCtrl,
  profilesFeedCtrl,
  newProfileCtrl,
  getProfileCtrl,
  updateProfileCtrl,
  addFollowingCtrl,
  addFollowerCtrl,
  delFollowingCtrl,
  delFollowerCtrl,
  delProfileCtrl,
} from '../controllers/profile'

// import {
//   validateProfile,
//   validateResults,
// } from '../validation'

// import express from 'express'
import { Router } from 'express'
import auth from '../middleware/auth'
import asyncHandler from 'express-async-handler'

// const router = express.Router()

export default (app, route = Router()) => {

  app.use('/', route)

  route.get('/dudes/testing', auth.optional, testingCtrl)
  route.get('/dudes', auth.optional, asyncHandler(profilesFeedCtrl))

  route.post('/dude/create', auth.required, asyncHandler(newProfileCtrl))

  route.put('/dude/follow/:username', auth.required, asyncHandler(addFollowingCtrl), asyncHandler(addFollowerCtrl))
  route.put('/dude/unfollow/:username', auth.required, asyncHandler(delFollowingCtrl), asyncHandler(delFollowerCtrl))

  route.get('/dude/:username', auth.optional, asyncHandler(getProfileCtrl))
  route.put('/dude/:username', auth.required, validateProfile, validateResults, asyncHandler(updateProfileCtrl))

  route.delete('/dude/delete', auth.required, asyncHandler(delProfileCtrl))
}