import { Router } from 'express'

import user from '#root/routes/user'
import posts from '#root/routes/posts'

export default () => {
  const app = Router()
  user(app)
  posts(app)
  return app
}