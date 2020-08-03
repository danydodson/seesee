import logger from '#root/loaders/logger'

export default (requiredRole) => {

  return (req, res, next) => {
    logger.debug('Required role?')
  
    if (req.user.role !== requiredRole) {
      return res.status(401).end()
  
    } else {
      logger.debug('User meets required role, going to next middleware')
      return next()
    }
  }
  
}