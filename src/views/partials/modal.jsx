import React, { Component } from "react";
import ModalActor from "./templates/modal-actor";
import ModalFilm from "./templates/modal-film";

class Modal extends Component {
    state = {
        actor: this.props.actor,
        film: this.props.film,
        photo: this.props.photoPath,
        showModal: this.props.showModal
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isActor ?
                    <ModalActor
                        actor={this.state.actor}
                        photo={this.state.photo}
                        show={this.state.showModal}
                        hideModal={this.props.hideModal}
                    /> :
                    <ModalFilm
                        film={this.state.film}
                        photo={this.state.photo}
                        show={this.state.showModal}
                        hideModal={this.props.hideModal}
                    />
                }
            </React.Fragment>

        )
    }
}

export default Modal;