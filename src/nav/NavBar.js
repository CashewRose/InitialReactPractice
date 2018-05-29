import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/projects">Project List</Link>
            </nav>
        );
    }
}

export default NavBar;