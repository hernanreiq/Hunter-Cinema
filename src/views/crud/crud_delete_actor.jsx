import React, { Component } from "react"

class DeleteActor extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="col-md-12 my-2">
                    <div className="card shadow text-white">
                        <div className="card-header bg-danger">
                            <h2 className="card-title text-center mb-0">Borrar actor</h2>
                        </div>
                        <div className="card-body bg-dark">
                            <h4>¿Quieres borrar a "<span className="text-warning">{this.props.name}</span>" de la base de datos?</h4>
                            <p className="mb-0">Su nombre también se borrará de las películas donde haya trabajado.</p>
                        </div>
                        <div className="card-footer bg-secondary">
                            <button className="btn btn-dark w-100 my-2">Cancelar</button>
                            <button className="btn btn-success w-100 my-2">Borrar definitivamente</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DeleteActor;