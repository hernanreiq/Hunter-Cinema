import React, { Component } from "react";

class UpdateActor extends Component {
    state = {
        name: false,
        gender: false,
        dateOfBirth: false,
        photo: false
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

    updateActor = () => {
        console.log('Click')
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
                                            <h5><span>Fecha de nacimiento:</span> {this.props.actor.dateOfBirth}</h5>
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
                                            <img src={this.props.photoPath} alt={this.props.actor.name} className="img-card w-75 mx-auto mb-2 rounded d-block" />
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