import { connect } from 'mongoose'

import accessEnv from '#root/helpers/accessEnv'

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
    return console.error(`🔥🔥 [users_db_error] ${e} 🔥🔥`)
  }
}

export default mongooseLoader

