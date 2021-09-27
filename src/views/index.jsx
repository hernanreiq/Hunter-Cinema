import React, { Component } from "react";
import LatestUpdates from "./partials/latest-updates";
import ActorFinder from "./partials/actor-finder";
import FilmFinder from "./partials/film-finder";
import Footer from "./partials/footer";

class Index extends Component {    
    render() {
        return (
            <React.Fragment>
                <main>
                    <LatestUpdates />
                    <ActorFinder />
                    <div className="white-division"></div>
                    <FilmFinder />
                </main>
                <div className="white-division"></div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;