import React, { Component } from "react";
import { SweetModal } from "../helpers/sweetalert2";
import axios from "axios";
import LatestTemplate from "./templates/latest-actors";
import ActorSearchedCrud from "./templates/actor-searched-crud";
import Modal from "./modal";

class ActorFinder extends Component {
    state = {
        searchMessage: "Debes realizar una búsqueda",
        searched: false,
        actors: [],
        modalActor: {},
        modalPhoto: '',
        showModal: false
    }

    searchGenderRef = React.createRef();
    searchNameRef = React.createRef();

    searchActor = () => {
        var searchName = this.searchNameRef.current.value;
        var searchGender = this.searchGenderRef.current.value;
        if (searchName !== '') {
            if (searchGender === 'Todos' || searchGender === 'Mujer' || searchGender === 'Hombre') {
                axios({
                    method: "POST",
                    url: `http://localhost:3700/api/actors/search/${searchGender}/${searchName}`,
                })
                    .then(res => {
                        if (res.data.error === false) {
                            this.setState({
                                searchMessage: res.data.message,
                                searched: true,
                                actors: res.data.actors
                            })
                        } else if (res.data.error) {
                            this.setState({
                                searchMessage: res.data.message,
                                searched: false
                            })
                        }
                    })
            } else {
                SweetModal('info', 'Usted tiene un filtro que no existe, elija entre Mujer, Hombre o Todos');
            }
        } else {
            this.setState({
                searchMessage: "Debes realizar una búsqueda",
                searched: false
            })
        }
    }

    CloseOptions = () => {
        this.props.CloseOptions();
    }

    viewActor = (actor, photoPath) => {
        this.setState({
            modalActor: actor,
            modalPhoto: photoPath,
            showModal: true
        })
    }

    deleteActor = (actor, photoPath) => {
        if (this.props.crud) {
            this.props.DeleteActor(actor, photoPath);
        }
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-color-1">
                    <div className="container pt-4">
                        <h2 className="text-center mb-4 text-white">Buscador de actores</h2>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend section-color-2">
                                        <select ref={this.searchGenderRef} name="gender" className="form-control bg-dark text-white">
                                            <option defaultValue="Todos">Todos</option>
                                            <option value="Mujer">Mujer</option>
                                            <option value="Hombre">Hombre</option>
                                        </select>
                                    </div>
                                    <input ref={this.searchNameRef} onChange={this.searchActor} name="name" autoComplete="off" type="text" className="form-control" placeholder="Escribe el nombre y apellido" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-4 pb-5">
                        <h2 className="text-center mb-4 text-white">{this.state.searchMessage}</h2>
                        {this.state.searched &&
                            <div className="row">
                                {this.state.actors.map((actor, i) => {
                                    if (this.props.crud) {
                                        return (
                                            <ActorSearchedCrud
                                                key={i}
                                                actor={actor}
                                                viewActor={this.viewActor}
                                                deleteActor={this.deleteActor}
                                            />
                                        )
                                    } else {
                                        return (
                                            < LatestTemplate
                                                key={i}
                                                actor={actor}
                                                viewActor={this.viewActor}
                                            />
                                        )
                                    }
                                })
                                }
                            </div>
                        }
                    </div>
                    {this.props.crud &&
                        <div className="text-center pb-3">
                            <button type="button" className="btn my-2 btn-danger" onClick={this.CloseOptions}>Volver a las opciones</button>
                        </div>
                    }
                </section>
                {this.state.showModal &&
                    <Modal
                        showModal={this.state.showModal}
                        hideModal={this.hideModal}
                        actor={this.state.modalActor}
                        photoPath={this.state.modalPhoto}
                    />
                }
            </React.Fragment>
        )
    }
}

export default ActorFinder;