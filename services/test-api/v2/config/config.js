const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 7000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  logLevel: process.env.LOG_LEVEL || 'silly',
  mongoUri: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@services-test-data:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
  // mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/services-test-api'
}

export default config
