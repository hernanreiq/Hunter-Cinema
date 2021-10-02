const FilmModel = require('../models/films');

const FilmController = {
    /* CREACIÓN DE PELÍCULAS, ANTES DE CREARLO COMPRUEBA QUE EL NOMBRE NO ESTÉ REGISTRADO */
    createFilm: async (req, res) => {
        const { title, releaseDate, gender } = req.body;
        const filmExist = await FilmModel.find({ title: title });
        if (filmExist.length === 0) {
            const newFilm = new FilmModel({
                title: title,
                actors: [],
                releaseDate: releaseDate,
                gender: gender,
                photo: null
            });
            await newFilm.save();
            res.json({ message: "Película creada con éxito!", error: false, film: newFilm });
        } else {
            res.json({ message: "Esta película ya fue registrada antes", error: true });
        }
    },
}

module.exports = FilmController;