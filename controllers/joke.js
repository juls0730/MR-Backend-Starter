const jokemodel = require('../models/joke');

exports.getRandomJoke = async (req, res) => {
    jokemodel.find({}, '-__v').then(async (response) => {
        joke = response[Math.floor(Math.random() * response.length)];
        return res.status(200).json({
            message: "Joke fetched successfully",
            joke: await joke
        });
    })
}