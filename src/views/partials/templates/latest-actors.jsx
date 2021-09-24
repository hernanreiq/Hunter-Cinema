import React, { Component } from "react";
import axios from "axios";
import { SweetModal } from "../../helpers/sweetalert2";

class LatestTemplate extends Component {
    state = {
        photoPath: ''
    }

    getImage = () => {
        var fileName = this.props.actor.photo;
        axios({
            method: 'GET',
            url: 'http://localhost:3700/api/actors/get-image/' + fileName
        })
            .then(res => {
                if (res.data.error) {
                    SweetModal('error', res.data.message);
                    this.setState({
                        photoPath: 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png'
                    })
                } else {
                    this.setState({
                        photoPath: res.config.url
                    })
                }
            })
    }

    componentDidMount() {
        this.getImage();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-3 my-2">
                    <div className="card shadow">
                        <img src={this.state.photoPath} alt={this.props.actor.name} className="img-card" />
                        <div className="card-body p-2 text-center">
                            <h5 className="card-title mb-0">{this.props.actor.name}</h5>
                            <button onClick={this.props.testClick} className="btn btn-red-wine mt-2 py-0">Ver detalles</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LatestTemplate;