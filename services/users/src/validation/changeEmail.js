import { check } from 'express-validator'

export default [
  check('email')
    .trim()
    .escape()
    .unescape()
    .isString()
    .isEmail().withMessage('Valid email is required.')
    .normalizeEmail()
    .bail(),
  check('email2')
    .trim()
    .escape()
    .unescape()
    .exists({ checkFalsy: true, checkNull: true }).withMessage('Confirm new email required.')
    .if(check('newEmail').exists({ checkFalsy: false, checkNull: false })).custom((value, { req }) => value === req.body.newEmail).withMessage('Emails dont match')
]