import React, { Component } from "react";

class ViewActor extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-2">
                    <div className="card shadow text-white">
                        <h2 className="card-header text-center bg-info">
                            Detalles del actor
                        </h2>
                        <div className="card-body bg-dark">
                            <img src={this.props.actor.photo} alt={this.props.actor.name} className="img-card w-100 rounded mb-2" />
                            <h5><span>Nombre completo: </span>{this.props.actor.name}</h5>
                            <h5><span>Sexo: </span>{this.props.actor.gender}</h5>
                            <h5 className="mb-3"><span>Fecha de nacimiento: </span>{this.props.actor.dateOfBirth}</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ViewActor;