import { check } from 'express-validator'
import Profile from '#root/models/Profile'

export default [
    check('bio')
        .trim()
        .escape()
        .unescape()
        .exists().withMessage('content is required'),
    check('username')
        .trim()
        .escape()
        .unescape()
        .isString()
        .exists({ checkFalsy: true, checkNull: true }).withMessage('username cant be empty')
        .bail()
        .isAlphanumeric().withMessage('username can only contain letters and numbers')
        .isLength({ min: 3, max: 30 }).withMessage('username requires a minimum of 3 characters')
        .custom((value, { req }) => { return Profile.findOne({ 'username': req.body.username }).then(user => { if (user) { return Promise.reject('username already in use') } }) }),

]