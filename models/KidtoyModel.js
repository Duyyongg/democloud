const mongoose = require('mongoose')

var KidtoySchema = new mongoose.Schema(
    {
        name: String,
        year: String,
        content : String,
        image: String,
        country: String,
        price: Number
    },
    {
        versionKey: false
    }
)

var KidtoyModel = mongoose.model('kidtoymodel', KidtoySchema, 'KidtoyModel')
module.exports = KidtoyModel
