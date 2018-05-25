import React, { Component } from 'react'
import Project from './project'


class ProjectList extends Component {

    constructor (props) {
        super(props)
        this.uniqueKey = 1
    }

    state = {
        projectList: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/projects")
            .then(r => r.json())
            .then(projects => {
                    this.setState({
                        projectList: projects
                    })
            })
    }

    render() {
        return (
            <div className="projectList">
                {this.state.projectList.map(project => (
                    <Project name={project.name}
                             groupRepo={project.groupRepo}
                             myRepo= {project.personalGroupRepo}
                             key={this.uniqueKey++} />
                ))}
            </div>
        )
    }
}

export default ProjectList
