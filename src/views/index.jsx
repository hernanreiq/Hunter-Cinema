import React, { Component } from "react";
import LatestUpdates from "./partials/latest-updates";
import ActorFinder from "./partials/actor-finder";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <LatestUpdates />
                    <ActorFinder />
                </main>
            </React.Fragment>
        )
    }
}

export default Index;