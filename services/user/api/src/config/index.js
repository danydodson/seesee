const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_USERS_DB
  MONGO_PORT,
} = process.env

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const config = {
  port: parseInt(process.env.PORT) || 7000,
  // env: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'silly',
  jwtSecret: process.env.JWT_SECRET || 'jwt-secret',
  mongoUri: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@users_mongo:${MONGO_PORT}/${MONGO_USERS_DB}?authSource=admin`,
  mongoOptions: MONGO_OPTIONS,
  mongoAtlasUri: `${process.env.MONGO_ATLAS_URI}`,
}

export default config
