import React, { Component } from "react";
import LatestUpdates from "./partials/latest-updates";
import ActorFinder from "./partials/actor-finder";
import FilmFinder from "./partials/film-finder";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <LatestUpdates />
                    <div className="white-division"></div>
                    <ActorFinder />
                    <div className="white-division"></div>
                    <FilmFinder />
                </main>
            </React.Fragment>
        )
    }
}

export default Index;