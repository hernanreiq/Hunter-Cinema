const { Router } = require('express');
const route = Router();
const FilmController = require("../controllers/films");
const ActorController = require("../controllers/actor");
const multipart = require('connect-multiparty');

//RUTA DE LAS FOTOS DE LOS ACTORES
var photosActorsRoute = multipart({uploadDir: './backend/public/img/actors'});

/* RUTAS DE LA API PARA ACTORES */
route.get('/api/actors/updated', ActorController.updatedActors);
route.post('/api/actors/search/:gender/:name', ActorController.searchActor);
route.post('/api/actors/create', ActorController.createActor);
route.post('/api/actors/upload-photo/:status/:id', photosActorsRoute, ActorController.uploadImage);
route.get('/api/actors/get-image/:image', ActorController.getImage);
route.put('/api/actors/update/:id', ActorController.updateActor);
route.delete('/api/actors/delete/:id', ActorController.deleteActor);

module.exports = route;