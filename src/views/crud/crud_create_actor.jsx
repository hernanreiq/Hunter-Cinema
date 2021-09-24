import React, { Component } from "react";
import axios from "axios";
import { SweetModal } from "../helpers/sweetalert2";

class CreateActor extends Component {
    state = {
        photo: ''
    }

    nameRef = React.createRef();
    genderRef = React.createRef();
    dateOfBirthRef = React.createRef();

    selectedFile = (e) => {
        this.setState({
            photo: e.target.files[0]
        });
    }

    createActor = (e) => {
        e.preventDefault();
        var name = this.nameRef.current.value;
        var gender = this.genderRef.current.value;
        var dateOfBirth = this.dateOfBirthRef.current.value;
        var photo = this.state.photo;
        if (name !== '' || gender !== '' || dateOfBirth !== '' || photo !== '') {
            axios({
                method: "POST",
                url: "http://localhost:3700/api/actors/create",
                data: {
                    name: name,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                    photo: photo
                }
            })
                .then(res => {
                    if (res.data.error) {
                        SweetModal('error', res.data.message);
                    } else if (!res.data.error) {
                        /* SI EL ACTOR SE HA GUARDADO CORRECTAMENTE, ENTONCES SE SUBE LA IMAGEN POR SEPARADO */
                        var actorID = res.data.actor._id;
                        const formData = new FormData();
                        formData.append(
                            'photo',
                            this.state.photo
                        )
                        axios.post('http://localhost:3700/api/actors/upload-photo/create/' + actorID, formData)
                            .then(res => {
                                if (res.data.error) {
                                    SweetModal('info', res.data.message);
                                } else if (!res.data.error) {
                                    SweetModal('success', res.data.message);
                                }
                            })
                    }
                })
        } else {
            SweetModal('info', 'Debe completar todos los campos');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-2">
                    <div className="card shadow text-white">
                        <div className="card-header bg-success">
                            <h2 className="card-title mb-0 text-center">Añade un nuevo actor</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <form id="create-actor" autoComplete="off" onSubmit={this.createActor} encType="multipart/form-data">
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Nombre y apellidos</label>
                                    <input ref={this.nameRef} type="text" name="name" id="name" className="form-control" autoFocus required />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="gender">Sexo</label>
                                    <select ref={this.genderRef} name="gender" id="gender" className="form-control" required >
                                        <option value="Mujer">Mujer</option>
                                        <option value="Hombre">Hombre</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
                                    <input ref={this.dateOfBirthRef} type="date" name="dateOfBirth" id="dateOfBirth" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="photo">Foto del actor</label>
                                    <input onChange={this.selectedFile} type="file" name="photo" id="photo" className="form-control" accept="image/png, image/jpeg, image/jpg" required />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button type="reset" form="create-actor" className="btn w-100 my-2 btn-dark">Limpiar todos los campos</button>
                            <button type="submit" form="create-actor" className="btn w-100 my-2 btn-success">Crear este actor</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateActor;