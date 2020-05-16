import app from './express'
import config from './config'
import logger from './helpers/logger'

app.listen(config.port, (err) => {
  if (err) {
    logger.error(` ❗ ${err}`)
  }
  logger.info(` ✨ [Express] server started on port ${config.port}`)
})
