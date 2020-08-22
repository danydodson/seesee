import asyncHandler from 'express-async-handler'

import Profile from '#root/models/Profile'

/** 
@desc create a new profile
@route POST /api/profiles/create
@auth private
*/

export default asyncHandler(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling create profile endpoint ⏳⏳')
  const profileRecord = await new Profile({ ...req.body, user: req.user, username: req.user.username })
  await profileRecord.save()
  return res.json(profileRecord)
})
