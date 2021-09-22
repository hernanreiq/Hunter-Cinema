import React, { Component } from "react";

class LatestUpdates extends Component {
    state = {
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Will_Smith_by_Gage_Skidmore_2.jpg"
    }
    testClick = () => {
        console.log('CLICK')
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-color-2">
                    <div className="container pt-4 pb-5">
                        <h2 className="text-center mb-4 text-vanilla">Últimas actualizaciones</h2>
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

export default LatestUpdates;