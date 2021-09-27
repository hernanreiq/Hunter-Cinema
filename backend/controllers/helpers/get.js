const ActorModel = require('../../models/actor');
const FilmModel = require('../../models/films');
const fs = require('fs');
const path = require('path');

const GetController = {
    /* OBTENER IMAGENES PARA MOSTRARLAS POR PANTALLA */
    getImage: (req, res) => {
        var owner = req.params.owner;
        var image = req.params.image;
        var filePath = `./backend/public/img/${owner}/${image}`;
        fs.exists(filePath, (exists) => {
            if (exists) {
                res.sendFile(path.resolve(filePath));
            } else {
                if(owner == 'actors'){
                    res.json({ message: "Hay un actor sin imagen", error: true });
                } else {
                    res.json({ message: "Hay una película sin imagen", error: true });
                }
            }
        })
    }
}

module.exports = GetController;