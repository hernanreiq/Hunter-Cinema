import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../views";
import Nav from "../views/partials/nav";

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;