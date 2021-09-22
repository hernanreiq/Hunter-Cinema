import React, { Component } from "react";
import LatestUpdates from "./partials/latest-updates";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <LatestUpdates />
                </main>
            </React.Fragment>
        )
    }
}

export default Index;