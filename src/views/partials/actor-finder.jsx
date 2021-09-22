import React, { Component } from "react";

class ActorFinder extends Component {
    state = {
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Will_Smith_by_Gage_Skidmore_2.jpg"
    }
    testClick = () => {
        console.log('BUSCADO')
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-color-1">
                    <div className="container pt-4">
                        <h2 className="text-center mb-4 text-dark-custom">Buscador de actores</h2>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend section-color-2">
                                        <button className="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sexo</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="/">Mujer</a>
                                            <a className="dropdown-item" href="/">Hombre</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-4 pb-5">
                        <h2 className="text-center mb-4 text-dark-custom">Resultados de la búsqueda</h2>
                        <div className="row">
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Will Smith" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Will Smith</h5>
                                        <button onClick={this.testClick} className="btn btn-success mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Will Smith" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Will Smith</h5>
                                        <button onClick={this.testClick} className="btn btn-success mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Will Smith" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Will Smith</h5>
                                        <button onClick={this.testClick} className="btn btn-success mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Will Smith" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Will Smith</h5>
                                        <button onClick={this.testClick} className="btn btn-success mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ActorFinder;