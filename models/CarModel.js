const mongoose = require('mongoose')

var CarSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    year: String,
    classify: String,
    status: String
  },
  {
    versionKey: false 
  }
)

var CarModel = mongoose.model('CarModel', CarSchema, 'CarModel')
module.exports = CarModel