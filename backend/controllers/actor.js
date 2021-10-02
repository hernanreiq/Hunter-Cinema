const ActorModel = require('../models/actor');
const fs = require('fs');

const ActorController = {
    /* BUSCADOR DE ACTORES */
    searchActor: async (req, res) => {
        const { gender, name } = req.params;
        if (gender === 'Todos') {
            const actors = await ActorModel.find({
                name: { $regex: '.*' + name + '.*', $options: 'i' }
            }).limit(4);
            if (actors.length === 0) {
                res.json({ message: "No hay resultados de su búsqueda", error: true });
            } else {
                res.json({ message: "Resultados de la búsqueda", error: false, actors: actors });
            }
        } else {
            const actors = await ActorModel.find({
                $and: [
                    { name: { $regex: '.*' + name + '.*', $options: 'i' } },
                    { gender: gender }
                ]
            }).limit(4);
            if (actors.length === 0) {
                res.json({ message: "No hay resultados de su búsqueda", error: true });
            } else {
                res.json({ message: "Resultados de la búsqueda", error: false, actors: actors });
            }
        }
    },
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
    }
}

module.exports = ActorController;