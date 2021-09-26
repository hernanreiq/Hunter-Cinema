import React, { Component } from "react";

class ActorSearchedCrud extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-1">
                    <div className="card">
                        <div className="card-body p-1">
                            <div className="row">
                                <div className="col-md-7">
                                    <h5 className="mb-0 py-3 pl-1">{this.props.actor.name}</h5>
                                </div>
                                <div className="col-md-5">
                                    <button className="btn btn-success mx-1 mt-2">DD</button>
                                    <button className="btn btn-success mx-1 mt-2">UU</button>
                                    <button className="btn btn-success mx-1 mt-2">RR</button>
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