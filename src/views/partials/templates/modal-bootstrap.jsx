import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalBootstrap extends Component {
    state = {
        showModal: this.props.show
    }

    closeModal = () => {
        this.props.hideModal();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            this.setState({
                showModal: this.props.show
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <h3>{this.props.actor.name}</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.photo} alt={this.props.actor.name} className="w-100 rounded img-modal" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-danger" onClick={this.closeModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalBootstrap;