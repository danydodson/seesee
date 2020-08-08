import jwt from 'jsonwebtoken'

import accessEnv from '#root/helpers/accessEnv'

const authenticate = async (req, res, next) => {

  const header = await req.header('Authorization')
  if (typeof header === 'undefined') {
    return res.status(400).json({ status: 'Please log in' })
  }

  const token = await header.replace('Bearer ', '')
  if (!token) {
    return res.status(400).json({ status: 'Please log in' })
  }

  const decoded = jwt.verify(token, accessEnv('JWT_SECRET'))

  // const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })

  req.token = token
  req.user = decoded

  next()
}

if (accessEnv('NODE_ENV') === 'test') {
  authenticate = (req, res, next) => {
    req.user = 1
    return next()
  }
}

export default authenticate