const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmModel = Schema({
    title: {type: String},
    year: {type: Number},
    actors: {type: Array},
    gender: {type: String},
    releaseDate: {type: Date},
    photo: {type: String}
});

module.exports = mongoose.model('film', FilmModel);