import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar section-color-1 navbar-expand-md navbar-dark shadow">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand text-white">HUNTER CINEMA</NavLink>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/crud" activeClassName="active" className="nav-link text-white">CRUD</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="white-division"></div>
            </React.Fragment>
        )
    }
}

export default Nav;