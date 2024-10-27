const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "setup must be at least 3 characters long"]
    }
}, { timestamps: true }
);


const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
