import React, { Component } from "react";

class CreateActor extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="col-md-12 my-2">
                    <div className="card text-white">
                        <div className="card-header bg-success">
                            <h2 className="card-title mb-0 text-center">Añade un nuevo actor</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateActor;