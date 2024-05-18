const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const initDb = require('./services/db.service').initDb
const globalConfig = require('./config/global.config').globalConfig

const {
  app: { port },
} = globalConfig

dotenv.config()

const app = express()

initDb()

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
