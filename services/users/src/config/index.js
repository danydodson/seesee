import { accessEnv } from "#root/helpers/accessEnv"

const config = {
  port: 5000,
  host: '0.0.0.0',
  db: {
    base: accessEnv('MONGO_BASE'),
    user: accessEnv('MONGO_USER'),
    password: accessEnv('MONGO_PASSWORD'),
    host: accessEnv('MONGO_HOST'),
    database: accessEnv('MONGO_DATABASE')
  },
  rabbit: {
    host: accessEnv('RABBIT_HOST'),
  }
}

export default config
