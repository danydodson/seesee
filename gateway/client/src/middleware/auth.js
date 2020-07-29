import jwt from 'jsonwebtoken'

import accessEnv from '#root/helpers/accessEnv'

const authMiddleware = async (req, res, next) => {
  const header = req.header('Authorization')
  if (typeof header === 'undefined') return next
  const token = header.replace('Bearer ', '')
  if (!token) return next
  const decoded = jwt.verify(token, accessEnv('JWT_SECRET'))
  req.user = decoded
  next()
}

export default authMiddleware
