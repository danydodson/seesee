import { connect } from 'mongoose'

import accessEnv from '#root/helpers/accessEnv'

const URI = accessEnv('MONGO_ATLAS_URI')

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

const mongooseLoader = async () => {
  try {
    const connection = await connect(URI, OPTIONS)
    return connection.connection.db
  } catch (e) {
    return console.error(`🔥🔥 [profiles_db_error] ${e} 🔥🔥`)
  }
}

export default mongooseLoader

