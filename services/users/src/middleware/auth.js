import jwt from 'jsonwebtoken'

import accessEnv from '#root/helpers/accessEnv'
import User from '#root/models/User'

const authMiddleware = async (req, res, next) => {

  const header = req.header('Authorization')

  if (typeof header === 'undefined') return next
  const token = header.replace('Bearer ', '')


  if (!token) return next

  const decoded = jwt.verify(token, accessEnv('JWT_SECRET'))

  const user = await User.findOne({
    _id: decoded._id,
    'tokens.token': token
  })

  if (!user) return next

  req.token = token
  req.user = user

  next()
}

export default authMiddleware
