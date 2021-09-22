const { Router } = require('express');
const route = Router();
const FilmController = require("../controllers/films");
const ActorController = require("../controllers/actor");

/* RUTAS DE LA API PARA ACTORES */
route.get('/api/actors/updated', ActorController.updatedActors);
route.post('/api/actors/create', ActorController.createActor);
route.put('/api/actors/update/:id', ActorController.updateActor);
route.delete('/api/actors/delete/:id', ActorController.deleteActor);

module.exports = route;