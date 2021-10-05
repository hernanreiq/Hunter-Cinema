import React, { Component } from "react";
import axios from "axios";
import { AxiosGetGenders, API_URL } from "../helpers/axios-http";
import FilmTemplate from "./templates/film-template";
import FilmSearchedCrud from "./templates/film-searched-crud";
import Modal from "./modal";

class FilmFinder extends Component {
    state = {
        searchMessage: "Debes realizar una búsqueda",
        searched: false,
        films: [],
        genders: [],
        modalFilm: {},
        modalPhoto: '',
        showModal: false
    }

    searchGenderRef = React.createRef();
    searchTitleRef = React.createRef();

    searchFilm = () => {
        var searchTitle = this.searchTitleRef.current.value;
        var searchGender = this.searchGenderRef.current.value;
        if (searchTitle !== '') {
            axios({
                method: "POST",
                url: `${API_URL}/films/search/${searchGender}/${searchTitle}`,
            })
                .then(res => {
                    if (res.data.error === false) {
                        this.setState({
                            searchMessage: res.data.message,
                            searched: true,
                            films: res.data.films
                        })
                    } else if (res.data.error) {
                        this.setState({
                            searchMessage: res.data.message,
                            searched: false
                        })
                    }
                })
        } else {
            this.setState({
                searchMessage: "Debes realizar una búsqueda",
                searched: false
            })
        }
    }

    filterChange = () => {
        var searchTitle = this.searchTitleRef.current.value;
        if (searchTitle !== '') {
            this.searchFilm();
        }
    }

    getAllGenders = () => {
        var genders = AxiosGetGenders()
        genders.then((res) => {
            if (res.length > 0) {
                this.setState({
                    genders: res
                })
            } else {
                this.setState({
                    searchMessage: res
                })
            }
        })
    }

    componentDidMount() {
        this.getAllGenders();
    }

    viewFilm = (film, photoPath) => {
        this.setState({
            modalFilm: film,
            modalPhoto: photoPath,
            showModal: true
        })
    }

    updateFilm = (film, photoPath) => {
        if (this.props.crud) {
            this.props.UpdateFilm(film, photoPath);
        }
    }

    deleteFilm = (film, photoPath) => {
        if (this.props.crud) {
            this.props.DeleteFilm(film, photoPath);
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
                <section className="section-color-2">
                    <div className="container pt-4">
                        <h2 className="text-center mb-4 text-white">Buscador de películas</h2>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <select ref={this.searchGenderRef} name="gender" className="form-control bg-danger text-white" onChange={this.filterChange}>
                                            <option defaultValue="Todas">Todas</option>
                                            {this.state.genders.map((gender, i) => {
                                                return (
                                                    <option value={gender} key={i}>{gender}</option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div>
                                    <input ref={this.searchTitleRef} onChange={this.searchFilm} name="title" autoComplete="off" type="text" className="form-control" placeholder="Escribe el título" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-4 pb-5">
                        <h2 className="text-center mb-4 text-white">{this.state.searchMessage}</h2>
                        {this.state.searched &&
                            <div className="row">
                                {this.state.films.map((film, i) => {
                                    if (this.props.crud) {
                                        return (
                                            <FilmSearchedCrud
                                                key={i}
                                                film={film}
                                                viewFilm={this.viewFilm}
                                                updateFilm={this.updateFilm}
                                                deleteFilm={this.deleteFilm}
                                            />
                                        )
                                    } else {
                                        return (
                                            <FilmTemplate
                                                key={i}
                                                film={film}
                                                viewFilm={this.viewFilm}
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
                        film={this.state.modalFilm}
                        photoPath={this.state.modalPhoto}
                        isActor={false}
                    />
                }
            </React.Fragment>
        )
    }
}

export default FilmFinder;