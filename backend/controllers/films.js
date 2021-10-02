const FilmModel = require('../models/films');

const FilmController = {
    /* BUSCADOR DE ACTORES */
    searchFilm: async (req, res) => {
        const { gender, title } = req.params;
        if (gender === 'Todos') {
            const films = await FilmModel.find({
                title: { $regex: '.*' + title + '.*', $options: 'i' }
            }).limit(4);
            if (films.length === 0) {
                res.json({ message: "No hay resultados de su búsqueda", error: true });
            } else {
                res.json({ message: "Resultados de la búsqueda", error: false, films: films });
            }
        } else {
            const films = await FilmModel.find({
                $and: [
                    { title: { $regex: '.*' + title + '.*', $options: 'i' } },
                    { gender: gender }
                ]
            }).limit(4);
            if (films.length === 0) {
                res.json({ message: "No hay resultados de su búsqueda", error: true });
            } else {
                res.json({ message: "Resultados de la búsqueda", error: false, films: films });
            }
        }
    },
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