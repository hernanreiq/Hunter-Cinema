import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { DateConverter, YearConverter } from "../../helpers/functions";
import { AxiosGetActorFilms } from "../../helpers/axios-http";

class ModalActor extends Component {
    state = {
        showModal: this.props.show,
        films: []
    }

    closeModal = () => {
        this.props.hideModal();
    }

    getActorFilms = () => {
        var films;
        films = AxiosGetActorFilms(this.props.actor.name)
        films.then(res => {
            this.setState({
                films: res
            })
        })
    }

    componentDidMount() {
        this.getActorFilms();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            this.getActorFilms();
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
                        <h3 className="mb-0 mx-auto">{this.props.actor.name}</h3>
                    </Modal.Header>
                    <Modal.Body className="text-center section-color-2 text-white">
                        <img src={this.props.photo} alt={this.props.actor.name} className="w-75 rounded img-modal mb-4" />
                        <p>Fecha de nacimiento: <span className="text-warning">{DateConverter(this.props.actor.dateOfBirth)}</span></p>
                        <p>Sexo: <span className="text-warning">{this.props.actor.gender}</span></p>
                        {this.state.films.length > 0 ?
                            <p className="mb-1"><b>Películas en las que ha trabajado</b></p> :
                            <p className="mb-0"><b>No hay películas con este actor registrado</b></p>
                        }
                        {this.state.films.map((film, i) => {
                            return (
                                <p key={i} className="mb-0">{YearConverter(film.releaseDate)}: <span className="text-warning">{film.title}</span></p>
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

export default ModalActor;