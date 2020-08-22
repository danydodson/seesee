import { check } from 'express-validator'
import User from '#root/models/User'

export default [
  check('email')
    .trim()
    .escape()
    .unescape()
    .isString()
    .isEmail().withMessage('A valid email is required.')
    .normalizeEmail()
    .bail()
    .custom((value, { req }) => { return User.findOne({ email: req.body.email }).then(user => { if (user) { throw new Error('Email address already in use.') } }) }),
  check('password')
    .trim()
    .escape()
    .unescape()
    .exists({ checkFalsy: true, checkNull: true }).withMessage('password is required')
    .matches(/(?=.*[0-9])/).withMessage('password requires at least one number')
    .matches(/(?=.*[A-Za-z])/).withMessage('password requires at least one letter')
    .matches(/(?=.*[@$.!%*#?&])/).withMessage('password requires at least one special character')
    .isLength({ min: 8 }).withMessage('Password requires a minimum eight characters'),
  check('password2')
    .trim()
    .escape()
    .unescape()
    .exists({ checkFalsy: true, checkNull: true }).withMessage('confirm password required')
    .if(check('password').exists({ checkFalsy: false, checkNull: false })).custom((value, { req }) => value === req.body.password).withMessage('passwords dont match')
]