import React, { Component } from "react";
import { AxiosDeleteActorsFilms } from "../helpers/axios-http";

class DeleteFilm extends Component {

    deleteFilm = () => {
        AxiosDeleteActorsFilms(this.props.film._id, this.props.film.photo, 'films');
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
                            <h2 className="card-title text-center mb-0">Borrar película</h2>
                        </div>
                        <div className="card-body bg-dark text-center">
                            <img src={this.props.photoPath} alt={this.props.film.title} className="w-75 rounded mb-3" />
                            <h4>¿Quieres borrar a "<span className="text-warning">{this.props.film.title}</span>" de la base de datos?</h4>
                            <p className="mb-0">Esta película le dejará de aparecer a los actores que trabajaron en ella.</p>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="button" className="btn w-100 my-2 btn-danger" onClick={this.CloseOptions}>Volver a las opciones</button>
                            <button type="button" className="btn w-100 my-2 btn-dark" onClick={this.backToFinder}>Volver al buscador</button>
                            <button className="btn btn-success w-100 my-2" onClick={this.deleteFilm} >Borrar definitivamente</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DeleteFilm;