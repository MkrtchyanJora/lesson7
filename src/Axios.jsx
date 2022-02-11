import React from 'react'
import axios from 'axios'
import { margin } from '@mui/system'

class Zapros extends React.Component {
    constructor() {
        super()
        this.state = {
            peaple: []
        }
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(result => this.setState({ peaple: result.data.data }))
    }

    render() {
        return (
            <>
            <h2 style={{textAlign:'center'}}>Axsios zapros</h2>
                <div className='rapros-parent'>
                    {this.state.peaple.map((e) => {
                        return (

                            <div key={e.id}>
                                <img src={e.avatar} />
                                <h2>{e.first_name}</h2>
                                <h3>{e.last_name}</h3>
                                <p>{e.email}</p>

                            </div>

                        )
                    })}
                </div>

            </>

        )
    }
}

export default Zapros