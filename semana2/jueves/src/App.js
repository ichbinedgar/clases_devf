import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'
import Form from './components/form/Form'
import Todos from './components/form/Todos'

class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <Todos />
            </div>
            
        )
    }
}

export default App;