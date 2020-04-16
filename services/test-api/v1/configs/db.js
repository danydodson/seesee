import { connect } from 'mongoose'
import configs from '../helpers/configs'
import logger from '../helpers/logger'

const mongoConnection = () => {
  connect(configs.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    logger.info(' mongodb loaded and connected!')
  }).catch(err => {
    logger.error(` ${err}`)
  })
}

mongoConnection()
