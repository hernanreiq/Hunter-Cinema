import React, { Component } from "react";
import CreateActor from "../crud/crud_create_actor";
import UpdateActor from "../crud/crud_update_actor";
import DeleteActor from "../crud/crud_delete_actor";
import ViewActor from "../crud/crud_view_actor";


class ChangeOptionsCRUDActor extends Component {
    state = {
        CreateActor: false,
        UpdateActor: false,
        ViewActor: false,
        DeleteActor: false
    }

    CreateActor = () => {
        this.setState({
            CreateActor: true
        })
    }

    CloseOptions = () => {
        this.setState({
            CreateActor: false,
            UpdateActor: false,
            ViewActor: false,
            DeleteActor: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.CreateActor && !this.state.UpdateActor && !this.state.DeleteActor && !this.state.ViewActor ?
                    <div className="card shadow my-2">
                        <div className="card-header bg-info text-white">
                            <h2 className="card-title mb-0 text-center">Opciones</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <button className="btn btn-success w-100 my-2 rounded-pill" onClick={this.CreateActor} >Añadir un actor</button>
                            <button className="btn btn-info w-100 my-2 rounded-pill">Buscar un actor</button>
                        </div>
                    </div> : ''
                }
                {this.state.CreateActor &&
                    <CreateActor CloseOptions={this.CloseOptions} />
                }
                {this.state.ViewActor &&
                    <ViewActor CloseOptions={this.CloseOptions} />
                }
                {this.state.UpdateActor &&
                    <UpdateActor CloseOptions={this.CloseOptions} />
                }
                {this.state.DeleteActor &&
                    <DeleteActor CloseOptions={this.CloseOptions} />
                }
            </React.Fragment>
        )
    }
}

export default ChangeOptionsCRUDActor;