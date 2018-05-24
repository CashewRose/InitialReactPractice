# Practice

You're going to create a component named after yourself (e.g. `<Thomas />`, or `<Evelyn />` or `<Priya />`). It should contain the following information.

1. Your full name
1. Your cohort
1. Your home address
1. The make and model of your favorite vehicle
1. The name, and species/breed of your favorite, or ideal, pet

Make sure you author components for each unique object being represented and compose them into the component named after you.

## Advanced Practice

You're going to update your application that represents you to use state and props. Previously, you hard-coded the following information into your components.

1. Your full name
1. Your cohort
1. Your home address
1. The make and model of your favorite vehicle
1. The name, and species/breed of your favorite, or ideal, pet

Now you need to pull all of that data that is scattered across your component files, and give your personal component an initial state with appropriate properties.

```js
import React, { Component } from 'react'
import Home from "./Home"  // Import the Home component


class Me extends Component {
    constructor (props) {
        super(props)

        // Put all information about yourself as state properties
        this.state = {
            firstName: "Rachel",
            lastName: "Morgan"
        }
    }

    // Update your JSX to use state properties
    render() {
        return (
            <div>
                <h3>{this.state.firstName} ${this.state.lastName}</h3>
                <h4>Evening Cohort 1</h4>
                <h5>Nashville Software School</h5>
                <Home />
            </div>
        );
    }
}

export default Me
```

Now, pass the state values from your personal component to each of its children, and use those props in the children components.
