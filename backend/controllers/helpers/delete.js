const ActorModel = require('../../models/actor');
const FilmModel = require('../../models/films');
const fs = require('fs');
const path = require('path');

const DeleteController = {
    /* BORRAR UN ACTOR */
    deleteActor: async (req, res) => {
        const idActor = req.params.id;
        await ActorModel.findByIdAndRemove(idActor, (err, actor) => {
            if (actor) {
                res.json({ message: "Actor eliminado con éxito!", error: false });
                /* 
                
                    CUANDO SE BORRE AL ACTOR DE LA BASE DE DATOS, TAMBIÉN HAY QUE BORRARLO DE TODAS LAS PELÍCULAS DONDE ESTE PARTICIPA

                */
            } else if (err) {
                res.json({ message: "No se pudo eliminar este actor", error: true });
            } else {
                res.json({ message: "No se pudo eliminar este actor", error: true });
            }
        });
    },
    /* BORRAR UNA PELÍCULA */
    deleteFilm: async (req, res) => {
        const idPelicula = req.params.id;
        await FilmModel.findByIdAndRemove(idPelicula, (err, actor) => {
            if (actor) {
                res.json({ message: "Película eliminada con éxito!", error: false });
            } else if (err) {
                res.json({ message: "No se pudo eliminar esta película", error: true });
            } else {
                res.json({ message: "No se pudo eliminar esta película", error: true });
            }
        });
    },
    /* BOORAR UNA IMAGEN */
    deleteImage: (req, res) => {
        var imageOwner = req.params.owner;
        var imageName = req.params.image;
        var filePath = `./backend/public/img/${imageOwner}/${imageName}`;
        fs.exists(filePath, (exists) => {
            if (exists) {
                fs.unlink(filePath, () => {
                    res.json({ message: 'Imagen borrada con éxito!', error: false });
                });
            } else {
                res.json({ message: 'La imagen no existe, intenta borrando otra', error: true })
            }
        })
    }
}

module.exports = DeleteController;