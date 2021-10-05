const FilmModel = require('../models/films');

const FilmController = {
    /* BUSCADOR DE ACTORES */
    searchFilm: async (req, res) => {
        const { gender, title } = req.params;
        if (gender === 'Todas') {
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
        const { title, releaseDate, gender, actors } = req.body;
        const filmExist = await FilmModel.find({ title: title });
        if (filmExist.length === 0) {
            const newFilm = new FilmModel({
                title: title,
                actors: actors,
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
    /* OBTENER TODOS LOS GÉNEROS QUE EXISTEN PARA ASÍ CREAR FILTROS DINÁMICOS */
    allGenders: async (req, res) => {
        const allGenders = await FilmModel.distinct("gender");
        if (allGenders.length === 0) {
            res.json({ message: "No hay películas guardadas", error: true });
        } else {
            res.json({ message: "Estos son los géneros de las películas guardadas", error: false, genders: allGenders });
        }
    },
    /* ACTUALIZAR UNA PELÍCULA, SE COMPRUEBA SI EXISTE ANTES DE ACTUALIZAR */
    updateFilm: (req, res) => {
        const { title, releaseDate, gender, actors } = req.body;
        console.log(req.body);
        const idFilm = req.params.id;
        FilmModel.findById(idFilm, async (err, film) => {
            if (film) {
                const newDataFilm = {
                    title: title,
                    releaseDate: releaseDate,
                    gender: gender,
                    actors: actors
                };
                await FilmModel.findByIdAndUpdate(idFilm, newDataFilm);
                res.json({ message: "Los datos de la película fueron actualizados con éxito!", error: false });
            } else if (err) {
                res.json({ message: "No se puede actualizar una película que no existe", error: true });
            } else {
                res.json({ message: "No se puede actualizar una película que no existe", error: true });
            }
        });
    }
}

module.exports = FilmController;