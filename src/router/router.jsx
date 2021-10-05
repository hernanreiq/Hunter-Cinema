import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views";
import CRUD from "../views/crud";
import Navigation from "../views/partials/nav";
import Error from "../views/error";

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
                    <Route exact path="*" component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;