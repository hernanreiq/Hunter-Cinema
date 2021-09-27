import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { AxiosGetImage } from "../../helpers/axios-http";

class ActorSearchedCrud extends Component {
    state = {
        photoPath: ''
    }

    getImage = () => {
        var fileName = this.props.actor.photo;
        var photoPath = AxiosGetImage(fileName, 'actors');
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
        if (prevProps.actor.name !== this.props.actor.name) {
            this.getImage();
        }
    }

    viewActor = () => {
        this.props.viewActor(this.props.actor, this.state.photoPath)
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-1">
                    <div className="card">
                        <div className="card-body bg-dark text-white p-1">
                            <div className="row">
                                <div className="col-xl-7 text-center">
                                    <h5 className="mb-0 pl-1 py-2">{this.props.actor.name}</h5>
                                </div>
                                <div className="col-xl-5 text-center">
                                    <button className="btn btn-danger mx-1">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className="btn btn-info mx-1">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="btn btn-success mx-1">
                                        <FontAwesomeIcon icon={faEye} onClick={this.viewActor} />
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

export default ActorSearchedCrud