import React, { Component } from "react";
import axios from "axios";
import { SweetModal } from "../helpers/sweetalert2";
import { StringToArray } from "../helpers/functions";

class CreateFilm extends Component {
    state = {
        photo: '',
        actors: []
    }

    titleRef = React.createRef();
    genderRef = React.createRef();
    releaseDateRef = React.createRef();
    actorsRef = React.createRef();

    selectedFile = (e) => {
        this.setState({
            photo: e.target.files[0]
        });
    }

    actorsToArray = () => {
        var actorsString = this.actorsRef.current.value;
        this.setState({
            actors: StringToArray(actorsString)
        })
    }

    CreateFilm = (e) => {
        e.preventDefault();
        var title = this.titleRef.current.value;
        var gender = this.genderRef.current.value;
        var releaseDate = this.releaseDateRef.current.value;
        var actors = this.state.actors;
        var photo = this.state.photo;
        if (title !== '' || gender !== '' || releaseDate !== '' || photo !== '' || actors.length !== 0) {
            axios({
                method: "POST",
                url: "http://localhost:3700/api/films/create",
                data: {
                    title: title,
                    gender: gender,
                    releaseDate: releaseDate,
                    photo: photo,
                    actors: actors
                }
            })
                .then(res => {
                    if (res.data.error) {
                        SweetModal('error', res.data.message);
                    } else if (!res.data.error) {
                        /* SI LA PELÍCULA SE HA GUARDADO CORRECTAMENTE, ENTONCES SE SUBE LA IMAGEN POR SEPARADO */
                        var filmId = res.data.film._id;
                        const formData = new FormData();
                        formData.append('photo', photo);
                        axios.post('http://localhost:3700/api/films/upload-photo/create/' + filmId, formData)
                            .then(res => {
                                if (res.data.error) {
                                    SweetModal('info', res.data.message);
                                } else if (!res.data.error) {
                                    SweetModal('success', res.data.message);
                                    this.CloseOptions();
                                }
                            })
                    }
                })
        } else {
            SweetModal('info', 'Debe completar todos los campos');
        }
    }

    CloseOptions = () => {
        this.props.CloseOptions();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-2 p-0">
                    <div className="card shadow text-white">
                        <div className="card-header bg-success">
                            <h2 className="card-title mb-0 text-center">Añade una nueva película</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <form id="create-actor" autoComplete="off" onSubmit={this.CreateFilm} encType="multipart/form-data">
                                <div className="form-group mb-4">
                                    <label htmlFor="title">Título</label>
                                    <input ref={this.titleRef} type="text" name="title" id="title" className="form-control" autoFocus required />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="gender">Género</label>
                                    <input ref={this.genderRef} name="gender" id="gender" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="releaseDate">Fecha de estreno</label>
                                    <input ref={this.releaseDateRef} type="date" name="releaseDate" id="releaseDate" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="photo">Foto de la película</label>
                                    <input onChange={this.selectedFile} type="file" name="photo" id="photo" className="form-control" accept="image/png, image/jpeg, image/jpg" required />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="actors">Actores</label>
                                    <input ref={this.actorsRef} type="text" name="actors" id="actors" className="form-control" required onChange={this.actorsToArray} />
                                    <small className="form-text text-muted">Cada actor debe estar separado por coma, ejemplo: Tom Holland, Will Smith</small>
                                    <p className="mt-2 mb-0">Actores que has agregado:</p>
                                    {this.state.actors.map((actor, i) => {
                                        return(
                                            <span key={i} className="badge badge-success mr-1">{actor}</span>
                                        )
                                    })
                                    }
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="button" className="btn w-100 my-2 btn-danger" onClick={this.CloseOptions}>Volver a las opciones</button>
                            <button type="reset" form="create-actor" className="btn w-100 my-2 btn-dark">Limpiar todos los campos</button>
                            <button type="submit" form="create-actor" className="btn w-100 my-2 btn-success">Crear esta película</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateFilm;