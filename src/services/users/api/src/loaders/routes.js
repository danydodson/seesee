import {
  testingCtrl,
  signUpCtrl,
} from '../controllers/v1/controllers'

import { Router } from 'express'

export default (app, route = Router()) => {
  app.use('/auth', route)

  route.get('/test', testingCtrl)

  route.post('/signup', signUpCtrl)

}
