const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorModel = Schema({
    name: {type: String},
    films: {type: Array}
});

module.exports = mongoose.model('actor', ActorModel);