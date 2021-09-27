import React, { Component } from "react";
import ModalBootstrap from "./templates/modal-bootstrap";

class Modal extends Component {
    state = {
        actor: this.props.actor,
        photo: this.props.photoPath,
        showModal: this.props.showModal
    }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalBootstrap
                actor={this.state.actor}
                photo={this.state.photo}
                show={this.state.showModal}
                hideModal={this.hideModal} 
            />
        )
    }
}

export default Modal;