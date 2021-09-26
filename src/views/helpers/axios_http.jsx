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