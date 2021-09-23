import React, { Component } from "react";
import axios from "axios";
import { SweetModal } from "../helpers/sweetalert2";
import LatestTemplate from "./templates/latest-actors";

class LatestUpdates extends Component {
    state = {
        actors: []
    }
    getActorsUpdated = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3700/api/actors/updated'
        })
            .then(res => {
                if (res.data.error) {
                    SweetModal('error', res.data.message);
                } else {
                    this.setState({
                        actors: res.data
                    });
                }
            })
    }
    testClick = () => {
        console.log('CLICK')
    }
    componentDidMount(){
        this.getActorsUpdated();
    }
    render() {
        return (
            <React.Fragment>
                {this.state.actors.length !== 0 &&
                    <section className="section-color-2">
                        <div className="container pt-4 pb-5">
                            <h2 className="text-center mb-4 text-white">Últimas actualizaciones</h2>
                            <div className="row">
                                {this.state.actors.map((actor, i) => {
                                    return (
                                        <LatestTemplate
                                            key={i}
                                            actor={actor}
                                            testClick={this.testClick}
                                        />
                                    )
                                })

                                }
                            </div>
                        </div>
                        <div className="white-division"></div>
                    </section>
                }
            </React.Fragment>
        )
    }
}

export default LatestUpdates;