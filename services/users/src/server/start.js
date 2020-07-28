import express from 'express'

import accessEnv from '#root/helpers/accessEnv'
import expressApp from '#root/loaders'

const ENV = accessEnv('NODE_ENV')
const PORT = accessEnv('PORT')
const HOST = accessEnv('HOST')

const app = express()

const startServer = async () => {
  await expressApp({ expressApp: app })
  app.listen(PORT, e => {
    if (e) {
      console.error(e)
      process.exit(1)
      return
    }
    console.info(`🚀🚀 [users_service] listening on ${HOST}:${PORT} in [${ENV}] 🚀🚀`)
  })
}

startServer()

