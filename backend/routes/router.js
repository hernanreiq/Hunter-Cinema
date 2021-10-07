const { Router } = require('express');
const multipart = require('connect-multiparty');
const route = Router();

/* CONTROLADORES */
const FilmController = require("../controllers/films");
const ActorController = require("../controllers/actor");
const GetController = require("../controllers/helpers/get");
const PostController = require("../controllers/helpers/post");
const DeleteController = require("../controllers/helpers/delete");

// RUTA PARA LA SUBIDA DE LAS FOTOS DE LOS ACTORES Y PELÍCULAS
var photosActorsRoute = multipart({ uploadDir: './backend/public/img/actors' });
var photosFilmsRoute = multipart({ uploadDir: './backend/public/img/films' });

/* HTTP - GET (ÚLTIMAS ACTUALIZACIONES) */
route.get('/api/actors/updated', ActorController.updatedActors);

/* HTTP - PUT (ACTUALIZAR) */
route.put('/api/films/actor/:oldName/:newName', FilmController.changeNameActor);
route.put('/api/films/update/:id', FilmController.updateFilm);
route.put('/api/actors/update/:id', ActorController.updateActor);

/* HTTP - POST (CREAR) */
route.post('/api/films/create', FilmController.createFilm);
route.post('/api/actors/create', ActorController.createActor);

/* HTTP - POST (IMAGENES) */
route.post('/api/actors/upload-photo/:status/:id', photosActorsRoute, PostController.uploadImageActor);
route.post('/api/films/upload-photo/:status/:id', photosFilmsRoute, PostController.uploadImageFilm);

/* HTTP - GET (BUSCADOR) */
route.post('/api/actors/search/:gender/:name', ActorController.searchActor);
route.post('/api/films/search/:gender/:title', FilmController.searchFilm);

/* HTTP - DELETE */
route.delete('/api/actors/:id', DeleteController.deleteActor);
route.delete('/api/films/:id', DeleteController.deleteFilm);
route.delete('/api/images/:owner/:image', DeleteController.deleteImage);

/* HTTP - GET */
route.get('/api/image/:owner/:image', GetController.getImage);
route.get('/api/films/genders', FilmController.allGenders);
route.get('/api/films/:actor', FilmController.actorFilms);

module.exports = route;