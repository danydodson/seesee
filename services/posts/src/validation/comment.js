import { check } from 'express-validator'

export default [
    check('content')
        .trim()
        .escape()
        .unescape()
        .exists().withMessage('content is required'),

]