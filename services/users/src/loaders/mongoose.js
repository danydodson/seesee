import { connect } from 'mongoose'

import accessEnv from '#root/helpers/accessEnv'
import logger from '#root/loaders/logger'

const URI = accessEnv('MONGO_ATLAS_URI')

const mongooseLoader = async () => {
  try {
    const connection = await connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    return connection.connection.db
  } catch (e) {
    return logger.error(`🔥🔥 [users_db] ${e} 🔥🔥`)
  }
}

export default mongooseLoader

