import axios from "axios";
import { SweetModal } from "./sweetalert2";

export const AxiosDeleteActor = (idActor) => {
    axios({
        method: 'DELETE',
        url: `http://localhost:3700/api/actor/${idActor}`
    })
        .then(res => {
            if (!res.data.error) {
                SweetModal('success', res.data.message);
            } else {
                SweetModal('error', res.data.message);
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