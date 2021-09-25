import React, { Component } from "react";
import CreateActor from "./crud/crud_create_actor";
import UpdateActor from "./crud/crud_update_actor";
import DeleteActor from "./crud/crud_delete_actor";
import ViewActor from "./crud/crud_view_actor";

class CRUD extends Component {
    state = {
        actorCRUD: false,
        filmCRUD: false,
        textCloseCRUD: ''
    }
    crudActor = () => {
        this.setState({
            actorCRUD: true,
            filmCRUD: false,
            textCloseCRUD: 'Estás en el CRUD de actores'
        })
    }
    crudFilm = () => {
        this.setState({
            actorCRUD: false,
            filmCRUD: true,
            textCloseCRUD: 'Estás en el CRUD de películas'
        })
    }
    closeCRUD = () => {
        this.setState({
            actorCRUD: false,
            filmCRUD: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <main className="section-color-2">
                    <div className="container p-4">
                        <div className="row">
                            {this.state.actorCRUD === true || this.state.filmCRUD === true ?
                                <div className="col-md-8 offset-md-2 my-2">
                                    <div className="card shadow">
                                        <div className="card-header bg-crud-1 text-white text-center">
                                            <h2 className="card-title mb-0">{this.state.textCloseCRUD}</h2>
                                        </div>
                                        <div className="card-body bg-dark">
                                            <button className="btn btn-danger w-100 rounded-pill" onClick={this.closeCRUD}>CERRAR ESTE CRUD</button>
                                        </div>
                                    </div>
                                </div> : ''
                            }
                            {this.state.actorCRUD === false && this.state.filmCRUD === false &&
                                <div className="col-md-6 my-2">
                                    <div className="card shadow">
                                        <div className="card-header bg-crud-2 text-white text-center">
                                            <h2 className="card-title mb-0">CRUD para actores</h2>
                                        </div>
                                        <div className="card-body bg-dark">
                                            <button className="btn btn-success w-100 rounded-pill" onClick={this.crudActor}>ABRIR ESTE CRUD</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {this.state.filmCRUD === false && this.state.actorCRUD === false &&
                                <div className="col-md-6 my-2">
                                    <div className="card shadow">
                                        <div className="card-header bg-crud-3 text-white text-center">
                                            <h2 className="card-title mb-0">CRUD para películas</h2>
                                        </div>
                                        <div className="card-body bg-dark">
                                            <button className="btn btn-success w-100 rounded-pill" onClick={this.crudFilm}>ABRIR ESTE CRUD</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-2 p-0">
                                {this.state.actorCRUD &&
                                    <CreateActor />
                                }
                            </div>
                            <div className="col-md-6 my-2 p-0">
                                {this.state.actorCRUD &&
                                    <UpdateActor 
                                        actor={{
                                            name: "Hernan Demorizi",
                                            gender: "Hombre",
                                            dateOfBirth: "1998-12-02",
                                            photo: "http://localhost:3700/api/actors/get-image/woWM7YOCqd4hYGHFnBowr-iX.jpg"
                                        }}
                                    />
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-2 p-0">
                                {this.state.actorCRUD &&
                                    <DeleteActor 
                                        name="Hernan Demorizi Ureña"
                                    />
                                }
                            </div>
                            <div className="col-md-6 my-2 p-0">
                                {this.state.actorCRUD &&
                                    <ViewActor 
                                    actor={{
                                        name: "Hernan Demorizi",
                                        gender: "Hombre",
                                        dateOfBirth: "1998-12-02",
                                        photo: "http://localhost:3700/api/actors/get-image/woWM7YOCqd4hYGHFnBowr-iX.jpg"
                                    }}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default CRUD;