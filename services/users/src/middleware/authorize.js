import logger from '#root/loaders/logger'

export default (role) => {
  return (req, res, next) => {
    logger.debug('⏳⏳ [gateway] checking for authorization ⏳⏳')
    if (!req.user.roles.includes(role)) {
      return res.status(401).json({ status: 'User is not authorized.' })
    } else {
      logger.debug('⏳⏳ [gateway] user meets required role, moving to the next middleware ⏳⏳')
      return next()
    }
  }
}

