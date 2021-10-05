import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { DateConverter } from "../../helpers/functions";

class ModalFilm extends Component {
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
                    <Modal.Header className="section-color-1 text-white">
                        <h3 className="mb-0 mx-auto">{this.props.film.title}</h3>
                    </Modal.Header>
                    <Modal.Body className="text-center section-color-2 text-white">
                        <img src={this.props.photo} alt={this.props.film.title} className="w-75 rounded img-modal mb-4" />
                        <p>Fecha de estreno: <span className="text-warning">{DateConverter(this.props.film.releaseDate)}</span></p>
                        <p>Género: <span className="text-warning">{this.props.film.gender}</span></p>
                        {this.props.film.actors.length > 0 ?
                            <p className="mb-0 mt-1"><b>Actores que trabajaron en la película:</b></p> :
                            <p className="mb-0 mt-1"><b>Esta película no tiene actores registrados</b></p> 
                        }
                        {this.props.film.actors.map((actor, i) => {
                            return (
                                <span key={i} className="mb-0 text-warning d-block">{actor}</span>
                            )
                        })
                        }
                    </Modal.Body>
                    <Modal.Footer className="bg-dark">
                        <Button className="btn btn-danger" onClick={this.closeModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalFilm;