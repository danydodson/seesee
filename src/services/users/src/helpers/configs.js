export default {
  app: {
    apiPrefix: '/api',
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  jwt: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: Math.floor(Date.now() / 1000) + 60 * 60,
  },

  url: {
    api: process.env.BASE_URL,
    client: process.env.BASE_URL_CLIENT,
  },

  mongo:
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_PROD_URI
      : process.env.MONGO_DEV_URI,

}
