import asyncHandler from 'express-async-handler'

import Profile from '#root/models/Profile'

/** 
@desc get a users profile
@route GET /api/profiles/:user_id
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get profile endpoint ⏳⏳')
  let foundProfile = await Profile.findOne({ '_id': req.params.profile_id })
  return res.json(foundProfile)
})
