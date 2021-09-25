import React, { Component } from "react";

class ActorFilmsTemplate extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-10">
                        <h5>{this.props.film.title}</h5>
                    </div>
                    <div className="col-2">
                        X
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ActorFilmsTemplate