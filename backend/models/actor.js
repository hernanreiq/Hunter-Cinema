const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorModel = Schema({
    name: {type: String},
    dateOfBirth: {type: Date},
    gender: {type: String},
    photo: {type: String},
    createdAt: {type: Date}
});

module.exports = mongoose.model('actor', ActorModel);