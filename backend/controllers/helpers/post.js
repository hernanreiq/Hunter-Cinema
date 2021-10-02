const ActorModel = require('../../models/actor');
const FilmModel = require('../../models/films');
const fs = require('fs');

const PostController = {
    /* SUBIR / ACTUALIZAR IMÁGENES PARA LOS ACTORES*/
    uploadImageActor: async (req, res) => {
        if (req.files) {
            var filePath = req.files.photo.path;
            var fileSplit = filePath.split('\\'); //si es en linux o mac, usar '/' en el split
            var fileName = fileSplit[4];
            //extraer extensión
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1].toLowerCase();
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
                //BUSCAR EL ACTOR PARA BORRARLE LA FOTO VIEJA
                var actorId = req.params.id;
                await ActorModel.findById(actorId, (err, actor) => {
                    //SI EL ACTOR EXISTE ENTONCES SE LE BORRA LA FOTO VIEJA (SI ES QUE TIENE)
                    var oldFilePath = './backend/public/img/actors/' + actor.photo;
                    fs.stat(oldFilePath, async (err, stat) => {
                        if (err, stat) {
                            fs.unlink(oldFilePath, (err) => { });
                        }
                        await ActorModel.findByIdAndUpdate(actorId, { photo: fileName }, { new: true }, (err, actor) => {
                            if (err) {
                                res.json({ message: "No se pudo subir la imagen del actor", error: true });
                            } else if (actor) {
                                if (req.params.status === 'create') {
                                    res.json({ message: "Actor creado con éxito!", error: false });
                                } else {
                                    res.json({ message: "Foto del actor actualizada con éxito!", error: false });
                                }
                            }
                        });
                    });
                });
            } else {
                fs.unlink(filePath, () => {
                    res.json({ message: 'El actor fue creado pero la imagen no se pudo subir', error: true });
                });
            }
        } else {
            res.json({ message: 'El actor fue creado pero la imagen no se pudo subir', error: true });
        }
    },
    /* SUBIR / ACTUALIZAR IMÁGENES PARA LAS PELÍCULAS*/
    uploadImageFilm: async (req, res) => {
        if (req.files) {
            var filePath = req.files.photo.path;
            var fileSplit = filePath.split('\\'); //si es en linux o mac, usar '/' en el split
            var fileName = fileSplit[4];
            //extraer extensión
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1].toLowerCase();
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
                //BUSCAR LA PELÍCULA PARA BORRARLE LA FOTO VIEJA
                var filmId = req.params.id;
                await FilmModel.findById(filmId, (err, film) => {
                    //SI LA PELÍCULA EXISTE ENTONCES SE LE BORRA LA FOTO VIEJA (SI ES QUE TIENE)
                    var oldFilePath = './backend/public/img/films/' + film.photo;
                    fs.stat(oldFilePath, async (err, stat) => {
                        if (err, stat) {
                            fs.unlink(oldFilePath, (err) => { });
                        }
                        await FilmModel.findByIdAndUpdate(filmId, { photo: fileName }, { new: true }, (err, film) => {
                            if (err) {
                                res.json({ message: "No se pudo subir la imagen de la película", error: true });
                            } else if (film) {
                                if (req.params.status === 'create') {
                                    res.json({ message: "Película creada con éxito!", error: false });
                                } else {
                                    res.json({ message: "Imagen de la película actualizada con éxito!", error: false });
                                }
                            }
                        });
                    });
                });
            } else {
                fs.unlink(filePath, () => {
                    res.json({ message: 'La película fue creada pero la imagen no se pudo subir', error: true });
                });
            }
        } else {
            res.json({ message: 'La película fue creada pero la imagen no se pudo subir', error: true });
        }
    }
}

module.exports = PostController;