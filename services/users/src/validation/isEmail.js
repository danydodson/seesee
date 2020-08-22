import { check } from 'express-validator'

export default [
  check('email')
    .trim()
    .escape()
    .unescape()
    .isString()
    .isEmail().withMessage('Valid email is required.')
    .normalizeEmail()
    .bail()
]