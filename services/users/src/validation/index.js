import validateSignup from '#root/validation/signupCreds'
import validateSignin from '#root/validation/signinCreds'
import validateChangeEmail from '#root/validation/changeEmail'
import validateIsEmail from '#root/validation/isEmail'
import validateResetPassword from '#root/validation/resetPassword'
import validateIsVerified from '#root/validation/verify'

import { validationResult } from 'express-validator'

const validateResults = (req, res, next) => {
  const format = ({ msg }) => msg
  const results = validationResult(req).formatWith(format)
  if (!results.isEmpty()) {
    return res.send({ errors: results.mapped({ onlyFirstError: true }) })
  }
  next()
}

export {
  validateSignup,
  validateSignin,
  validateChangeEmail,
  validateIsEmail,
  validateResetPassword,
  validateIsVerified,
  validateResults
}
