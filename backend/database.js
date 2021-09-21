const mongoose = require('mongoose');

const URI = "mongodb://localhost/hunter-cinema";

mongoose.connect(URI)
        .then(db => console.log('Database is ready!'))
        .catch(err => console.log('Database is not ready:', err));

module.exports = mongoose;