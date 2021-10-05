import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views";
import CRUD from "../views/crud";
import Navigation from "../views/partials/nav";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Index />)
                    }} />
                    <Route exact path="/crud" render={() => {
                        return (<CRUD />)
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;