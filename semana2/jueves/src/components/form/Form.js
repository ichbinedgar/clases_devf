import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'

class Form extends Component {
    render() {
        return (
            <div>
                <TextField 
                    value={"holi"}
                />
                <Button
                    variant={"raised"}
                    color={"primary"}
                >
                Agregar
                </Button>
            </div>
            
        )
    }
}

export default Form;