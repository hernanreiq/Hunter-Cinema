import React, { Component } from "react";
import CreateFilm from "../crud/crud_create_film";
import UpdateFilm from "../crud/crud_update_film";
import DeleteFilm from "../crud/crud_delete_film";
import FilmFinder from "../partials/film-finder";

class ChangeOptionsCRUDFilm extends Component {
    state = {
        CreateFilm: false,
        UpdateFilm: false,
        DeleteFilm: false,
        FilmFinder: false,
        film: {},
        photoPath: ''
    }

    CreateFilm = () => {
        this.CloseOptions();
        this.setState({
            CreateFilm: true
        })
    }

    FilmFinder = () => {
        this.CloseOptions();
        this.setState({
            FilmFinder: true
        })
    }

    UpdateFilm = (film, photoPath) => {
        this.CloseOptions();
        this.setState({
            UpdateFilm: true,
            film: film,
            photoPath: photoPath
        })
    }

    DeleteFilm = (film, photoPath) => {
        this.CloseOptions();
        this.setState({
            DeleteFilm: true,
            film: film,
            photoPath: photoPath
        })
    }

    CloseOptions = () => {
        this.setState({
            CreateFilm: false,
            UpdateFilm: false,
            DeleteFilm: false,
            FilmFinder: false,
            film: {},
            photoPath: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.CreateFilm && !this.state.UpdateFilm && !this.state.DeleteFilm && !this.state.ViewFilm && !this.state.FilmFinder ?
                    <div className="card shadow my-2">
                        <div className="card-header bg-info text-white">
                            <h2 className="card-title mb-0 text-center">Opciones</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <button className="btn btn-success w-100 my-2 rounded-pill" onClick={this.CreateFilm} >Añadir una película</button>
                            <button className="btn btn-info w-100 my-2 rounded-pill" onClick={this.FilmFinder} >Buscar una película</button>
                        </div>
                    </div> : ''
                }
                {this.state.CreateFilm &&
                    <CreateFilm CloseOptions={this.CloseOptions} />
                }
                {this.state.UpdateFilm &&
                    <UpdateFilm
                        CloseOptions={this.CloseOptions}
                        backToFinder={this.FilmFinder}
                        film={this.state.film}
                        photoPath={this.state.photoPath}
                    />
                }
                {this.state.DeleteFilm &&
                    <DeleteFilm
                        CloseOptions={this.CloseOptions}
                        backToFinder={this.FilmFinder}
                        film={this.state.film}
                        photoPath={this.state.photoPath}
                    />
                }
                {this.state.FilmFinder &&
                    <div className="actor-finder shadow">
                        <FilmFinder
                            crud={true}
                            CloseOptions={this.CloseOptions}
                            DeleteFilm={this.DeleteFilm}
                            UpdateFilm={this.UpdateFilm}
                        />
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ChangeOptionsCRUDFilm;