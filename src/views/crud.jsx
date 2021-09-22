import React, { Component } from "react";

class CRUD extends Component {
    render(){
        return(
            <React.Fragment>
                <main className="section-color-2">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <div className="card shadow">
                                    <div className="card-header bg-success text-white text-center">
                                        <h2 className="card-title mb-0">CRUD para actores</h2>
                                    </div>
                                    <div className="card-body bg-dark">
                                        <button className="btn btn-red-wine w-100 rounded-pill">ABRIR ESTE CRUD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-2">
                                <div className="card shadow">
                                    <div className="card-header bg-info text-white text-center">
                                        <h2 className="card-title mb-0">CRUD para películas</h2>
                                    </div>
                                    <div className="card-body bg-dark">
                                        <button className="btn btn-red-wine w-100 rounded-pill">ABRIR ESTE CRUD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default CRUD;