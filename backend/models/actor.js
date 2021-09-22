const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorModel = Schema({
    name: {type: String},
    films: {type: Array},
    dateOfBirth: {type: Date},
    gender: {type: String},
    photo: {type: String}
});

module.exports = mongoose.model('actor', ActorModel);