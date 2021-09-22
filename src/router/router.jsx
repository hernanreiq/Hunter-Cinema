import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views";
import CRUD from "../views/crud";
import Nav from "../views/partials/nav";

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/crud" component={CRUD} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;