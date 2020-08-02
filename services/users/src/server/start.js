import express from 'express'

import expressApp from '#root/loaders'
import accessEnv from '#root/helpers/accessEnv'
import logger from '#root/loaders/logger'

const ENV = accessEnv('NODE_ENV')
const PORT = accessEnv('PORT')
const HOST = accessEnv('HOST')

const app = express()

const startServer = async () => {
  await expressApp({ expressApp: app })
  app.listen(PORT, e => {
    if (e) {
      logger.error(`🔥🔥 [users_server] ${e} 🔥🔥`)
      process.exit(1)
      return
    }
    logger.info(`🚀🚀 [users_service] listening on ${HOST}:${PORT} in [${ENV}] 🚀🚀`)
  })
}

startServer()

