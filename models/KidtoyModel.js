const mongoose = require('mongoose')

var KidtoySchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        price: Number,
        origin: String,
        quantity: String
    },
    {
        versionKey: false
    }
)

var KidtoyModel = mongoose.model('kidtoymodel', KidtoySchema, 'KidtoyModel')
module.exports = KidtoyModel
