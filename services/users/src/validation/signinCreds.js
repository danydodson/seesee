import { check } from 'express-validator'

export default [
  check('email')
    .trim()
    .escape()
    .unescape()
    .isString()
    .isEmail().withMessage('Email address is invalid.')
    .normalizeEmail()
    .exists({ checkFalsy: true, checkNull: true }).withMessage('Username is required.'),
  check('password')
    .trim()
    .escape()
    .unescape()
    .isString()
    .exists({ checkFalsy: true, checkNull: true }).withMessage('Password is required.')
]