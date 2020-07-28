import validateRegister from './register'
import validateLogin from './login'
import validateAuth from './auth'
import validateReset from './reset'
import validateIsVerified from './verify'

import { validationResult } from 'express-validator'

const validateResults = (req, res, next) => {
  // const format = ({ location, param, msg }) => `${location} [${param}]: ${msg}`
  const format = ({ location, param, msg }) => `${msg}`
  const results = validationResult(req).formatWith(format)
  if (!results.isEmpty()) {
    return res.status(422).json({
      errors: results.array({ onlyFirstError: true })
    })
  }
  next()
}

export {
  validateRegister,
  validateLogin,
  validateAuth,
  validateReset,
  validateIsVerified,
  validateResults
}
