const { Router } = require('express');
const route = Router();
const FilmController = require("../controllers/films");
const ActorController = require("../controllers/actor");

/* RUTAS DE LA API */
route.get('/api/actors/updated', ActorController.updatedActors);
route.post('/api/actors/create', ActorController.createActor);

module.exports = route;