import { check } from 'express-validator'

export default [
    check('bio')
        .trim()
        .escape()
        .unescape()
        .exists().withMessage('content is required'),

]