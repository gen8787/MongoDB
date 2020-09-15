const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required."],
        minlength: [10, "Must be 10 characters or more."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        minlength: [3, "Must be 3 characters or more."]
    },
}, { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;