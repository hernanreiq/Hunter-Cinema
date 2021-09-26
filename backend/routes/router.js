const { Router } = require('express');
const multipart = require('connect-multiparty');
const route = Router();

/* CONTROLADORES */
const FilmController = require("../controllers/films");
const ActorController = require("../controllers/actor");
const DeleteController = require("../controllers/helpers/delete");

//RUTA DE LAS FOTOS DE LOS ACTORES
var photosActorsRoute = multipart({uploadDir: './backend/public/img/actors'});

/* RUTAS DE LA API PARA ACTORES */
route.get('/api/actors/updated', ActorController.updatedActors);
route.post('/api/actors/search/:gender/:name', ActorController.searchActor);
route.post('/api/actors/create', ActorController.createActor);
route.post('/api/actors/upload-photo/:status/:id', photosActorsRoute, ActorController.uploadImage);
route.put('/api/actors/update/:id', ActorController.updateActor);

/* BORRADOR */
route.delete('/api/actor/:id', DeleteController.deleteActor);
route.delete('/api/film/:id', DeleteController.deleteFilm);
route.delete('/api/image/:owner/:image', DeleteController.deleteImage);

/* RUTAS DE LA API PARA LAS IMAGENES */
route.get('/api/image/:image', ActorController.getImage);

module.exports = route;