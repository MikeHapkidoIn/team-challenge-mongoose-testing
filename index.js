const express = require('express')
const app = express()
const dbConnection = require('./config/config.js')
const routes = require('./routes/posts.js')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", routes)

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

module.exports = app