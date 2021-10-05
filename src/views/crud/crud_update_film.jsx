import React, { Component } from "react";
import axios from "axios";
import { SweetModal } from "../helpers/sweetalert2";
import { DateConverter, TextVerify } from "../helpers/functions";

class UpdateFilm extends Component {
    state = {
        title: false,
        gender: false,
        releaseDate: false,
        photo: false,
        filePhoto: '',
        resultReleaseDate: ''
    }

    titleRef = React.createRef();
    genderRef = React.createRef();
    releaseDateRef = React.createRef();

    selectedFile = (e) => {
        this.setState({
            filePhoto: e.target.files[0]
        });
    }

    updateTitle = () => {
        this.setState({
            title: true
        })
    }

    updateGender = () => {
        this.setState({
            gender: true
        })
    }

    updateReleaseDate = () => {
        this.setState({
            releaseDate: true
        })
    }

    updatePhoto = () => {
        this.setState({
            photo: true
        })
    }

    calReleaseDate = () => {
        var releaseDate = DateConverter(this.props.film.releaseDate);
        this.setState({
            resultReleaseDate: releaseDate
        });
    }

    componentDidMount() {
        this.calReleaseDate();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.film.title !== this.props.film.title) {
            this.calReleaseDate();
        }
    }

    resetOptions = () => {
        this.setState({
            title: false,
            gender: false,
            releaseDate: false,
            photo: false
        })
    }

    backToFinder = () => {
        this.props.backToFinder();
    }

    updateFilm = (e) => {
        e.preventDefault();
        var idFilm = this.props.film._id;
        var data = {};
        if (this.state.title) {
            var title = this.titleRef.current.value;
            var titleVerify = TextVerify(title);
            data.title = title;
        }
        if (this.state.releaseDate) {
            var releaseDate = this.releaseDateRef.current.value;
            var releaseDateVerify = TextVerify(releaseDate);
            data.releaseDate = releaseDate;
        }
        if (this.state.gender) {
            var gender = this.genderRef.current.value;
            var genderVerify = TextVerify(gender);
            data.gender = gender;
        }
        if (this.state.title || this.state.releaseDate || this.state.gender) {
            if (titleVerify || releaseDateVerify || genderVerify) {
                axios({
                    method: "PUT",
                    url: `http://localhost:3700/api/films/update/${idFilm}`,
                    data: data
                })
                    .then(res => {
                        if (res.data.error) {
                            SweetModal('error', res.data.message);
                        } else if (!res.data.error) {
                            this.CloseOptions();
                            if (!this.state.photo) {
                                SweetModal('success', res.data.message);
                            }
                        }
                    })
            } else {
                SweetModal('info', 'No puedes hacer esto');
            }
        }

        if (this.state.photo) {
            const formData = new FormData();
            formData.append('photo', this.state.filePhoto);
            axios.post(`http://localhost:3700/api/films/upload-photo/update/${idFilm}`, formData)
                .then(res => {
                    if (res.data.error) {
                        SweetModal('info', res.data.message);
                    } else if (!res.data.error) {
                        this.CloseOptions();
                        if (this.state.title || this.state.releaseDate || this.state.gender) {
                            SweetModal('success', 'La imagen y los datos de la película fueron actualizados con éxito!');
                        } else {
                            SweetModal('success', res.data.message);
                        }
                    }
                })
        }
    }


    CloseOptions = () => {
        this.props.CloseOptions();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-2 p-0">
                    <div className="card shadow text-white text-center">
                        <div className="card-header bg-warning">
                            <h2 className="card-title mb-0 text-center">Actualizar una película</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <form id="update-actor" autoComplete="off" onSubmit={this.updateFilm} encType="multipart/form-data">
                                <div className="form-group mb-4">
                                    {this.state.title === true ?
                                        <React.Fragment>
                                            <label htmlFor="title">Título</label>
                                            <input ref={this.titleRef} type="text" name="title" id="title" className="form-control" defaultValue={this.props.film.title} required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Título:</span> {this.props.film.title}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateTitle} >Editar el título</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    {this.state.gender === true ?
                                        <React.Fragment>
                                            <label htmlFor="gender">Género</label>
                                            <input ref={this.genderRef} type="text" name="gender" id="gender" className="form-control" defaultValue={this.props.film.gender} required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Género:</span> {this.props.film.gender}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateGender} >Editar el género</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group">
                                    {this.state.releaseDate === true ?
                                        <React.Fragment>
                                            <label htmlFor="releaseDate">Fecha de estreno</label>
                                            <input ref={this.releaseDateRef} type="date" name="releaseDate" id="releaseDate" className="form-control" defaultValue={this.props.film.releaseDate} required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Fecha de estreno:</span> {this.state.resultReleaseDate}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateReleaseDate} >Editar fecha de estreno</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group">
                                    {this.state.photo === true ?
                                        <React.Fragment>
                                            <label htmlFor="photo">Imagen de la película</label>
                                            <input onChange={this.selectedFile} type="file" name="photo" id="photo" className="form-control" accept="image/png, image/jpeg, image/jpg" required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Imagen de la película</span></h5>
                                            <img src={this.props.photoPath} alt={this.props.film.title} className="img-card mx-auto mb-2 rounded d-block" />
                                            <button className="btn btn-success my-2" onClick={this.updatePhoto} >Cambiar imagen</button>
                                        </React.Fragment>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="button" className="btn w-100 my-2 btn-dark" onClick={this.backToFinder}>Volver al buscador</button>
                            {this.state.title || this.state.gender || this.state.releaseDate || this.state.photo ?
                                <React.Fragment>
                                    <button onClick={this.resetOptions} className="btn w-100 my-2 btn-dark">Reiniciar el editor</button>
                                    <button type="submit" form="update-actor" className="btn w-100 my-2 btn-success">Actualizar esta película</button>
                                </React.Fragment> : ''
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UpdateFilm;