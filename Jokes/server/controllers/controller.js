const Joke = require('../models/model');

// http://localhost:8000/api/jokes
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// http://localhost:8000/api/jokes/:id
module.exports.findSingleJoke = (req,res) => {
    Joke.find({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// http://localhost:8000/api/jokes/random
module.exports.findRandomJoke = (req,res) => {
    Joke.findOne().skip(random)
    .then(aJoke => res.json({joke:aJoke}))
    .catch(err => res.json({message: "Something went wrong", error:err}));
};

// http://localhost:8000/api/jokes/new
module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// http://localhost:8000/api/jokes/update/:id
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// http://localhost:8000/api/jokes/delete/:id
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deletedJoke => res.json({ joke: deletedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};