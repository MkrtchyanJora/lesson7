import React from 'react'
import axios from 'axios'

class Life extends React.Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            person: []
        }
    }




    componentDidMount() {
        console.log('componentDidMount')
        // fetch('https://reqres.in/api/users/2')
        // .then(result=>result.json())
        // .then(i=>this.setState({person:i.data}))
        axios.get('https://reqres.in/api/users?page=2')
            .then(result => this.setState({ person: result.data.data }))

    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                {/* <li> {this.state.person.email}</li>
                <li> {this.state.person.last_name}</li>
                <li> {this.state.person.first_name}</li>
                <img src={this.state.person.avatar}/> */}
                {this.state.person.map((i) => {
                    return (
                        <div key={i.id} >
                            <img src={i.avatar} />
                            <h2>{i.email}</h2>
                            <h3>{i.first_name}</h3>
                            <h4>{i.last_name}</h4>


                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Life