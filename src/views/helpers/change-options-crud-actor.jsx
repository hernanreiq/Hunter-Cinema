import React, { Component } from "react";
import CreateActor from "../crud/crud_create_actor";
import UpdateActor from "../crud/crud_update_actor";
import DeleteActor from "../crud/crud_delete_actor";
import ActorFinder from "../partials/actor-finder";


class ChangeOptionsCRUDActor extends Component {
    state = {
        CreateActor: false,
        UpdateActor: false,
        DeleteActor: false,
        ActorFinder: false,
        actor: {},
        photoPath: ''
    }

    CreateActor = () => {
        this.CloseOptions();
        this.setState({
            CreateActor: true
        })
    }

    ActorFinder = () => {
        this.CloseOptions();
        this.setState({
            ActorFinder: true
        })
    }

    UpdateActor = (actor, photoPath) => {
        this.CloseOptions();
        this.setState({
            UpdateActor: true,
            actor: actor,
            photoPath: photoPath
        })
    }

    DeleteActor = (actor, photoPath) => {
        this.CloseOptions();
        this.setState({
            DeleteActor: true,
            actor: actor,
            photoPath: photoPath
        })
    }

    CloseOptions = () => {
        this.setState({
            CreateActor: false,
            UpdateActor: false,
            DeleteActor: false,
            ActorFinder: false,
            actor: {},
            photoPath: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.CreateActor && !this.state.UpdateActor && !this.state.DeleteActor && !this.state.ActorFinder ?
                    <div className="card shadow my-2">
                        <div className="card-header bg-info text-white">
                            <h2 className="card-title mb-0 text-center">Opciones</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <button className="btn btn-success w-100 my-2 rounded-pill" onClick={this.CreateActor} >Añadir un actor</button>
                            <button className="btn btn-info w-100 my-2 rounded-pill" onClick={this.ActorFinder} >Buscar un actor</button>
                        </div>
                    </div> : ''
                }
                {this.state.CreateActor &&
                    <CreateActor CloseOptions={this.CloseOptions} />
                }
                {this.state.UpdateActor &&
                    <UpdateActor
                        CloseOptions={this.CloseOptions}
                        backToFinder={this.ActorFinder}
                        actor={this.state.actor}
                        photoPath={this.state.photoPath}
                    />
                }
                {this.state.DeleteActor &&
                    <DeleteActor
                        CloseOptions={this.CloseOptions}
                        backToFinder={this.ActorFinder}
                        actor={this.state.actor}
                        photoPath={this.state.photoPath}
                    />
                }
                {this.state.ActorFinder &&
                    <div className="actor-finder shadow">
                        <ActorFinder
                            crud={true}
                            CloseOptions={this.CloseOptions}
                            DeleteActor={this.DeleteActor}
                            UpdateActor={this.UpdateActor}
                        />
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ChangeOptionsCRUDActor;