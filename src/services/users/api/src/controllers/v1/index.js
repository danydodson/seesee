import { testingService } from '../../loaders/services'
import { signUpService } from '../../loaders/services'

/**
 * @desc auth test route
 * @route GET /api/auth
 * @auth public
 * */
export const testingCtrl = (req, res, next) => {
  const testMsg = testingService(req.body)
  return res.json({ testMsg })
}

/**
 * @desc register new user
 * @route POST /api/auth/signup
 * @auth public
 * */
export const signUpCtrl = (req, res, next) => {
  const { user } = signUpService(req.body)
  return res.json({ user })
}