const ActorModel = require('../models/actor');

const ActorController = {
    updatedActors: async (req, res) => {
        const Actors = await ActorModel.find().sort({ createdAt: -1 }).limit(4);
        if(Actors.length > 0){
            res.json(Actors);
        } else {
            res.json({message: "No hay actores en la base de datos"})
        }
    },
    createActor: async (req, res) => {
        const {name, dateOfBirth, gender} = req.body;
        const actorExist = await ActorModel.find({name: name});
        if(actorExist.length === 0){
            const newActor = new ActorModel({
                name: name,
                dateOfBirth: dateOfBirth,
                gender: gender,
                photo: null,
                films: [],
                createdAt: Date.now()
            });
            await newActor.save();
            res.json({message: "Actor creado con éxito!"});
        } else {
            res.json({message: "Este actor ya fue registrado antes"});
        }
    }
}

module.exports = ActorController;