require("dotenv").config()

module.exports.development = {
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URI,
  // url: 'mysql://root:password@listings_service_db/db?charset=UTF8'
}
