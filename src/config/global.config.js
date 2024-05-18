const dotenv = require('dotenv')

dotenv.config()

const globalConfig = {
  db: {
    user: process.env.POSTGRES_USER ?? '',
    password: process.env.POSTGRES_PASSWORD ?? '',
    dbName: process.env.POSTGRES_DB ?? '',
    port: process.env.POSTGRES_PORT ?? '',
    host: process.env.POSTGRES_HOST ?? '',
  },
  app: {
    port: process.env.PORT ?? 3000,
  },
}

module.exports = { globalConfig }
