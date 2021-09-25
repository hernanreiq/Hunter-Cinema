import React, { Component } from "react";
import LatestUpdates from "./partials/latest-updates";
import ActorFinder from "./partials/actor-finder";
import FilmFinder from "./partials/film-finder";
import Footer from "./partials/footer";
import ModalBootstrap from "./partials/templates/modal";

class Index extends Component {
    state = {
        isActor: false,
        isFilm: false,
        actor: {},
        film: {},
        photo: '',
        showModal: false
    }

    viewActor = (actor, photo) => {
        this.setState({
            isActor: true,
            actor: actor,
            photo: photo,
            showModal: true
        })
    } 

    hideModal = (status) => {
        this.setState({
            showModal: status
        })
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <LatestUpdates viewActor={this.viewActor} />
                    <ActorFinder viewActor={this.viewActor} />
                    <div className="white-division"></div>
                    <FilmFinder />
                </main>
                <div className="white-division"></div>
                <Footer />
                <ModalBootstrap actor={this.state.actor} photo={this.state.photo} show={this.state.showModal} hideModal={this.hideModal} />
            </React.Fragment>
        )
    }
}

export default Index;