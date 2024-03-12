// Define a Mongoose schema
const mongoose = require('mongoose');

const carsDetails = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    dateofmfg:{
        type:Date,
        Default:Date.now,
        required:true
    },
    carModel:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        data: Buffer,
        contentType: String,
    }
});

// Create a Mongoose model
// this is model which will going use for the carsdeatils collections
const CARS = mongoose.model('CARSDETAIL', carsDetails);

module.exports = CARS;
