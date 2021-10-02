import React, { Component } from "react";
import { AxiosGetImage } from "../../helpers/axios-http";
import { ShortName } from "../../helpers/functions";

class LatestTemplate extends Component {
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
                <div className="col-lg-3 mb-3 mt-2">
                    <div className="card shadow card-actor">
                        <img src={this.state.photoPath} alt={this.props.actor.name} className="img-card" />
                        <div className="card-body p-2 text-center">
                            <h5 className="card-title mb-0 d-none d-lg-block">{ShortName(this.props.actor.name)}</h5>
                            <h5 className="card-title mb-0 d-lg-none">{this.props.actor.name}</h5>
                            <button className="btn btn-red-wine mt-2 py-0" onClick={this.viewActor}>Ver detalles</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LatestTemplate;