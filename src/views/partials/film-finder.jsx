import React, { Component } from "react";

class FilmFinder extends Component {
    state = {
        photo: "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg"
    }
    testClick = () => {
        console.log('BUSCADO')
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-color-2">
                    <div className="container pt-4">
                        <h2 className="text-center mb-4 text-white">Buscador de películas</h2>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend section-color-1">
                                        <button className="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Género</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="/">Suspenso</a>
                                            <a className="dropdown-item" href="/">Acción</a>
                                            <a className="dropdown-item" href="/">Ciencia ficción</a>
                                            <a className="dropdown-item" href="/">Romance</a>
                                            <a className="dropdown-item" href="/">Animada</a>
                                            <a className="dropdown-item" href="/">Comedia</a>
                                            <a className="dropdown-item" href="/">Terror</a>
                                            <a className="dropdown-item" href="/">Drama</a>
                                            <a className="dropdown-item" href="/">Musical</a>
                                            <a className="dropdown-item" href="/">Crimen</a>
                                            <a className="dropdown-item" href="/">Bélica</a>
                                            <a className="dropdown-item" href="/">Aventura</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-4 pb-5">
                        <h2 className="text-center mb-4 text-white">Resultados de la búsqueda</h2>
                        <div className="row">
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Interstellar" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Interstellar</h5>
                                        <button onClick={this.testClick} className="btn btn-red-wine mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Interstellar" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Interstellar</h5>
                                        <button onClick={this.testClick} className="btn btn-red-wine mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Interstellar" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Interstellar</h5>
                                        <button onClick={this.testClick} className="btn btn-red-wine mt-2 py-0">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="card shadow">
                                    <img src={this.state.photo} alt="Interstellar" />
                                    <div className="card-body p-2 text-center">
                                        <h5 className="card-title mb-0">Interstellar</h5>
                                        <button onClick={this.testClick} className="btn btn-red-wine mt-2 py-0">View details</button>
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

export default FilmFinder;