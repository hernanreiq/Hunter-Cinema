import React, { Component } from "react";
import axios from "axios";
import { AxiosChangeNameActorFilms } from "../helpers/axios-http";
import { SweetModal } from "../helpers/sweetalert2";
import { DateConverter, TextVerify } from "../helpers/functions";

class UpdateActor extends Component {
    state = {
        name: false,
        gender: false,
        dateOfBirth: false,
        photo: false,
        filePhoto: '',
        resultDateOfBirth: ''
    }

    nameRef = React.createRef();
    genderRef = React.createRef();
    dateOfBirthRef = React.createRef();

    selectedFile = (e) => {
        this.setState({
            filePhoto: e.target.files[0]
        });
    }

    updateName = () => {
        this.setState({
            name: true
        })
    }

    updateGender = () => {
        this.setState({
            gender: true
        })
    }

    updateDateOfBirth = () => {
        this.setState({
            dateOfBirth: true
        })
    }

    updatePhoto = () => {
        this.setState({
            photo: true
        })
    }

    calDateOfBirth = () => {
        var dateOfBirth = DateConverter(this.props.actor.dateOfBirth);
        this.setState({
            resultDateOfBirth: dateOfBirth
        });
    }

    componentDidMount() {
        this.calDateOfBirth();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.actor.name !== this.props.actor.name) {
            this.calDateOfBirth();
        }
    }

    resetOptions = () => {
        this.setState({
            name: false,
            gender: false,
            dateOfBirth: false,
            photo: false
        })
    }

    backToFinder = () => {
        this.props.backToFinder();
    }

    updateActor = (e) => {
        e.preventDefault();
        var idActor = this.props.actor._id;
        var data = {};
        if (this.state.name) {
            var name = this.nameRef.current.value;
            var nameVerify = TextVerify(name);
            data.name = name;
        }
        if (this.state.dateOfBirth) {
            var dateOfBirth = this.dateOfBirthRef.current.value;
            var dateOfBirthVerify = TextVerify(dateOfBirth);
            data.dateOfBirth = dateOfBirth;
        }
        if (this.state.gender) {
            var gender = this.genderRef.current.value;
            var genderVerify = TextVerify(gender);
            data.gender = gender;
        }
        if (this.state.name || this.state.dateOfBirth || this.state.gender) {
            if (nameVerify || dateOfBirthVerify || genderVerify) {
                if (this.state.name) {
                    var changeNameActor = AxiosChangeNameActorFilms(this.props.actor.name, data.name)
                        .then(res => {
                            console.log("It's ok");
                        })
                }
                axios({
                    method: "PUT",
                    url: `http://localhost:3700/api/actors/update/${idActor}`,
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
            axios.post(`http://localhost:3700/api/actors/upload-photo/update/${idActor}`, formData)
                .then(res => {
                    if (res.data.error) {
                        SweetModal('info', res.data.message);
                    } else if (!res.data.error) {
                        this.CloseOptions();
                        if (this.state.name || this.state.dateOfBirth || this.state.gender) {
                            SweetModal('success', 'La foto y los datos del actor fueron actualizados con éxito!');
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
                            <h2 className="card-title mb-0 text-center">Actualizar un actor</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <form id="update-actor" autoComplete="off" onSubmit={this.updateActor} encType="multipart/form-data">
                                <div className="form-group mb-4">
                                    {this.state.name === true ?
                                        <React.Fragment>
                                            <label htmlFor="name">Nombre completo</label>
                                            <input ref={this.nameRef} type="text" name="name" id="name" className="form-control" defaultValue={this.props.actor.name} required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Nombre completo:</span> {this.props.actor.name}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateName} >Editar el nombre</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    {this.state.gender === true ?
                                        <React.Fragment>
                                            <label htmlFor="gender">Sexo</label>
                                            <select ref={this.genderRef} name="gender" id="gender" className="form-control" required >
                                                <option value="Mujer">Mujer</option>
                                                <option value="Hombre">Hombre</option>
                                            </select>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Sexo:</span> {this.props.actor.gender}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateGender} >Editar el sexo</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group">
                                    {this.state.dateOfBirth === true ?
                                        <React.Fragment>
                                            <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
                                            <input ref={this.dateOfBirthRef} type="date" name="dateOfBirth" id="dateOfBirth" className="form-control" defaultValue={this.props.actor.dateOfBirth} required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Fecha de nacimiento:</span> {this.state.resultDateOfBirth}</h5>
                                            <button className="btn btn-success my-2" onClick={this.updateDateOfBirth} >Editar fecha de nacimiento</button>
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="form-group">
                                    {this.state.photo === true ?
                                        <React.Fragment>
                                            <label htmlFor="photo">Foto del actor</label>
                                            <input onChange={this.selectedFile} type="file" name="photo" id="photo" className="form-control" accept="image/png, image/jpeg, image/jpg" required />
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <h5><span>Foto del actor</span></h5>
                                            <img src={this.props.photoPath} alt={this.props.actor.name} className="img-card mx-auto mb-2 rounded d-block" />
                                            <button className="btn btn-success my-2" onClick={this.updatePhoto} >Cambiar la foto</button>
                                        </React.Fragment>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="button" className="btn w-100 my-2 btn-dark" onClick={this.backToFinder}>Volver al buscador</button>
                            {this.state.name || this.state.gender || this.state.dateOfBirth || this.state.photo ?
                                <React.Fragment>
                                    <button onClick={this.resetOptions} className="btn w-100 my-2 btn-dark">Reiniciar el editor</button>
                                    <button type="submit" form="update-actor" className="btn w-100 my-2 btn-success">Actualizar este actor</button>
                                </React.Fragment> : ''
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UpdateActor;