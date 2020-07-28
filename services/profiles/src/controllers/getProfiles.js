import asyncHandler from 'express-async-handler'

import Profile from '#root/models/Profile'

/** 
@desc get all profiles
@route GET /api/profiles/all
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all profiles endpoint ⏳⏳')
  let profiles = await Profile.find()
  return res.json(profiles)
})
