const ActorModel = require('../models/actor');
const fs = require('fs');
const path = require('path');

const ActorController = {
    /* OBTIENE LOS ULTIMOS 4 ACTORES QUE FUERON EDITADOS O AGREGADOS */
    updatedActors: async (req, res) => {
        const Actors = await ActorModel.find().sort({ createdAt: -1 }).limit(4);
        if (Actors.length > 0) {
            res.json(Actors);
        } else {
            res.json({ message: "No hay actores en la base de datos", error: true })
        }
    },
    /* CREACIÓN DE ACTORES, ANTES DE CREARLO COMPRUEBA QUE EL NOMBRE NO ESTÉ REGISTRADO */
    createActor: async (req, res) => {
        const { name, dateOfBirth, gender } = req.body;
        const actorExist = await ActorModel.find({ name: name });
        if (actorExist.length === 0) {
            const newActor = new ActorModel({
                name: name,
                dateOfBirth: dateOfBirth,
                gender: gender,
                photo: null,
                createdAt: Date.now()
            });
            await newActor.save();
            res.json({ message: "Actor creado con éxito!", error: false, actor: newActor });
        } else {
            res.json({ message: "Este actor ya fue registrado antes", error: true });
        }
    },
    /* SUBIR IMÁGENES DE LOS ACTORES */
    uploadImage: async (req, res) => {
        if (req.files) {
            var filePath = req.files.photo.path;
            var fileSplit = filePath.split('\\');
            //si es en linux o mac, usar '/' en el split
            var fileName = fileSplit[4];
            //extraer extensión
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
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
                                if(req.params.status === 'create'){
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
    /* OBTENER IMAGENES PARA MOSTRARLAS POR PANTALLA */
    getImage: (req, res) => {
        var file = req.params.image;
        var filePath = './backend/public/img/actors/' + file;
        fs.exists(filePath, (exists) => {
            if(exists){
                res.sendFile(path.resolve(filePath));
            } else {
                res.json({message: "Hay un actor sin imagen", error: true});
            }
        })
    },
    /* ACTUALIZAR UN ACTOR, SE COMPRUEBA SI EXISTE ANTES DE ACTUALIZAR */
    updateActor: (req, res) => {
        const { name, dateOfBirth, gender } = req.body;
        const idActor = req.params.id;
        ActorModel.findById(idActor, async (err, actor) => {
            if (actor) {
                const newDataActor = {
                    name: name,
                    dateOfBirth: dateOfBirth,
                    gender: gender,
                    createdAt: Date.now()
                };
                await ActorModel.findByIdAndUpdate(idActor, newDataActor);
                res.json({ message: "Los datos del actor fueron actualizados con éxito!", error: false });
            } else if (err) {
                res.json({ message: "No se puede actualizar un actor que no existe", error: true });
            } else {
                res.json({ message: "No se puede actualizar un actor que no existe", error: true });
            }
        });
    },
    /* BORRAR UN ACTOR, SE COMPRUEBA QUE EXISTA ANTES DE BORRARLO */
    deleteActor: (req, res) => {
        const idActor = req.params.id;
        ActorModel.findByIdAndRemove(idActor, (err, actor) => {
            if (actor) {
                res.json({ message: "Actor eliminado con éxito!", error: false });
            } else if (err) {
                res.json({ message: "No se pudo eliminar este actor", error: true });
            } else {
                res.json({ message: "No se pudo eliminar este actor", error: true });
            }
        });
    }
}

module.exports = ActorController;