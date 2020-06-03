require('dotenv').config()

module.exports.development = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.USERS_SERVICE_DB_URI,
  // url: process.env.DB_URI,
}
