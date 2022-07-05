const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
    joke: {
        type: String,
        required: true,
        unique: true
    }
});

jokeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('joke', jokeSchema);  