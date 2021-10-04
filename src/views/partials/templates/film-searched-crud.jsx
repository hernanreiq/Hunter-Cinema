import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { AxiosGetImage } from "../../helpers/axios-http";

class FilmSearchedCrud extends Component {
    state = {
        photoPath: ''
    }

    getImage = () => {
        var fileName = this.props.film.photo;
        var photoPath = AxiosGetImage(fileName, 'films');
        photoPath.then((photoPath, err) => {
            if (photoPath) {
                this.setState({
                    photoPath: photoPath
                })
            }
        })
    }

    componentDidMount() {
        this.getImage();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.film.title !== this.props.film.title) {
            this.getImage();
        }
    }

    viewFilm = () => {
        this.props.viewActor(this.props.film, this.state.photoPath);
    }

    deleteFilm = () => {
        this.props.deleteActor(this.props.film, this.state.photoPath);
    }

    updateFilm = () => {
        this.props.updateActor(this.props.film, this.state.photoPath);
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-1">
                    <div className="card">
                        <div className="card-body bg-dark text-white p-xl-1 pb-2 pt-2">
                            <div className="row">
                                <div className="col-xl-7 text-center">
                                    <h5 className="mb-0 py-xl-2 pb-2">{this.props.film.title}</h5>
                                </div>
                                <div className="col-xl-5 text-center">
                                    <button className="btn btn-danger mx-1" onClick={this.deleteFilm}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className="btn btn-info mx-1" onClick={this.updateFilm}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="btn btn-success mx-1" onClick={this.viewFilm}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FilmSearchedCrud