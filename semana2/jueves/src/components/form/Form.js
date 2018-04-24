import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Form extends Component {
    state = {
        value : ""
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    handleClick = (e) => {
        event.preventDefault()
        //console.log("Estado: ",this.state); 
        //console.log("Estos son los props: ",this.props)   
        const { value } = this.state
        const { mutate } = this.props
        mutate({
            variables: {
                email: value,
                name: "Fernando"
            }
        }).then((res)=>{
            console.log(res)
        })


            
    }
    render() {
        const { value } = this.state
        return (
            <div>
                <TextField 
                    value={value}
                    onChange={this.handleChange}                    
                />
                <Button
                    variant={"raised"}
                    color={"primary"}
                    onClick={this.handleClick}                    
                >
                Agregar
                </Button>
            </div>
            
        )
    }
}

// const mutation = gql`
//      mutation createTodo($input: todoInput){
// 		Todo(todo: $input){
//       id,
//       todo
//     }
//   }
// `


const mutation = gql`
mutation createUser ($email: String,$name: String) {
  createUser(user: {
    name: $name,
    last_name: "Cortes",
    phone: "332213123131",
    email: $email,
    picture: null,
    type_id: 2
  }) {
      name,
      last_name,
      phone,
      email,
      picture,
      type_id,
    }
}
`

export default graphql(mutation)(Form)