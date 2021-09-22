const ActorModel = require('../models/actor');

const ActorController = {
    updatedActors: async (req, res) => {
        const Actors = await ActorModel.find().sort({ createdAt: -1 }).limit(4);
        if (Actors.length > 0) {
            res.json(Actors);
        } else {
            res.json({ message: "No hay actores en la base de datos", error: true })
        }
    },
    createActor: async (req, res) => {
        const { name, dateOfBirth, gender } = req.body;
        const actorExist = await ActorModel.find({ name: name });
        if (actorExist.length === 0) {
            const newActor = new ActorModel({
                name: name,
                dateOfBirth: dateOfBirth,
                gender: gender,
                photo: null,
                films: [],
                createdAt: Date.now()
            });
            await newActor.save();
            res.json({ message: "Actor creado con éxito!", error: false });
        } else {
            res.json({ message: "Este actor ya fue registrado antes", error: true });
        }
    },
    updateActor: (req, res) => {
        const { name, dateOfBirth, gender } = req.body;
        const idActor = req.params.id;
        ActorModel.findById(idActor, async (err, actor) => {
            if (actor) {
                const newDataActor = {
                    name: name,
                    dateOfBirth: dateOfBirth,
                    gender: gender,
                    photo: null,
                    films: [],
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