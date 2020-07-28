import { Router } from 'express'

import auth from '#root/routes/auth'
import gallery from '#root/routes/gallery'

export default () => {
  const app = Router()
  auth(app)
  gallery(app)
  return app
}