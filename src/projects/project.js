import React, { Component } from "react"
import "../styles/projects.css"


class Project extends Component {
    render() {
        return (
            <article>
                <p><h2>{ this.props.name}</h2></p>
                <p><a href={ this.props.groupRepo }>Group Repo</a></p>
                <p><a href={ this.props.myRepo }>Personal Group Repo Project</a></p>
            </article>
        )
    }
}

export default Project