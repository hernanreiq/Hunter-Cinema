//DEPENDENCIAS
const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');

const app = express();

// ROUTER FILE
const router = require('./routes/router');

//SETTINGS
const PORT = process.env.PORT || 3700;

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//cors y cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//ROUTES
app.use('/', router);

//STARTING THE SERVER
app.listen(PORT, () => {
    console.log("Server is ready!", PORT);
})