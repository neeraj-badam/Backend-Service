
const mongoose = require('mongoose')


const SeatsSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    noOfSeats : {
        type:String,
        required:true
    },
    seats : {
        type : Array,
        required:true
    }
})

module.exports = mongoose.model('Seats',SeatsSchema)