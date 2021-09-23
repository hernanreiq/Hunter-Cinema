import Swal from "sweetalert2";

export const SweetModal = (typeIcon, message) => {
    Swal.fire({
        icon: typeIcon,
        text: message
    })
}