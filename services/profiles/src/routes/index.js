import { Router } from 'express'

import profiles from '#root/routes/profiles'

export default () => {
  const app = Router()
  profiles(app)
  return app
}