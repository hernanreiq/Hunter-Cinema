import axios from "axios";
import { SweetModal } from "./sweetalert2";

export const AxiosDeleteActorsFilms = (idActor, photo, owner) => {
    axios({
        method: 'DELETE',
        url: `http://localhost:3700/api/${owner}/${idActor}`
    })
        .then(res => {
            if (!res.data.error) {
                AxiosDeleteImage(owner, photo);
            } else {
                SweetModal('error', res.data.message);
            }
        })
}
export const AxiosDeleteImage = (owner, image) => {
    axios({
        method: 'DELETE',
        url: `http://localhost:3700/api/images/${owner}/${image}`
    })
        .then(res => {
            if (!res.data.error) {
                if (owner === 'actors') {
                    SweetModal('success', 'Actor eliminado con éxito!');
                } else if (owner === 'films') {
                    SweetModal('success', 'Película eliminada con éxito!');
                }
            } else {
                if (owner === 'actors') {
                    SweetModal('error', 'El actor fue eliminado, pero no su fotografía');
                } else if (owner === 'films') {
                    SweetModal('error', 'La película fue eliminada, pero no su fotografía');
                }
            }
        })
}
export const AxiosGetImage = async (fileName, owner) => {
    var photoPath = '';
    await axios({
        method: 'GET',
        url: `http://localhost:3700/api/image/${owner}/${fileName}`
    })
        .then(res => {
            if (res.data.error) {
                SweetModal('error', res.data.message);
                photoPath = 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png';
            } else {
                photoPath = res.config.url
            }
        })
    return photoPath;
}