import { Router } from 'express'

import users from '#root/routes/users'

export default () => {
  const app = Router()
  users(app)
  return app
}