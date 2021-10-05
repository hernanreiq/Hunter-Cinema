import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar section-color-1 navbar-expand-md navbar-dark shadow">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand text-white">HUNTER CINEMA</NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink to="/crud" activeClassName="active" className="nav-link text-white">CRUD</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="white-division"></div>
            </React.Fragment>
        )
    }
}

export default Navigation;