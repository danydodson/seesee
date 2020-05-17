import { Sequelize } from "sequelize"

import accessEnv from "#root/helpers/accessEnv"

// const dbURI = accessEnv("DB_URI")
const dbURI = 'listings_service_db'

const sequelize = new Sequelize(dbURI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false
})

export default sequelize
