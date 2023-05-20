const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    longURL: {
        type: String,
        required: true
    },
    hashedURL: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true,
        default: 0
    }
});

const URL = mongoose.model("URL", urlSchema)
module.exports = URL