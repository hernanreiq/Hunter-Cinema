import React, { Component } from "react";
import { AxiosDeleteActorsFilms, AxiosDeleteNameActorFilms } from "../helpers/axios-http";

class DeleteActor extends Component {

    deleteActor = () => {
        AxiosDeleteNameActorFilms(this.props.actor.name)
        .then(res => {
            AxiosDeleteActorsFilms(this.props.actor._id, this.props.actor.photo, 'actors');
        })
        this.props.CloseOptions();
    }

    CloseOptions = () => {
        this.props.CloseOptions();
    }

    backToFinder = () => {
        this.props.backToFinder();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-2 p-0">
                    <div className="card shadow text-white">
                        <div className="card-header bg-danger">
                            <h2 className="card-title text-center mb-0">Borrar actor</h2>
                        </div>
                        <div className="card-body bg-dark text-center">
                            <img src={this.props.photoPath} alt={this.props.actor.name} className="img-card w-50 rounded mb-3" />
                            <h4>¿Quieres borrar a "<span className="text-warning">{this.props.actor.name}</span>" de la base de datos?</h4>
                            <p className="mb-0">Su nombre también se borrará de las películas donde haya trabajado.</p>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="button" className="btn w-100 my-2 btn-danger" onClick={this.CloseOptions}>Volver a las opciones</button>
                            <button type="button" className="btn w-100 my-2 btn-dark" onClick={this.backToFinder}>Volver al buscador</button>
                            <button className="btn btn-success w-100 my-2" onClick={this.deleteActor} >Borrar definitivamente</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DeleteActor;