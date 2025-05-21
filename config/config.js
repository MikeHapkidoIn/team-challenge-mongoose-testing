const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Conexión establecida con la BBDD')
  } catch (err) {
    console.log(err)
  }
}

module.exports = dbConnection