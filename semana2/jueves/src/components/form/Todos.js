import React, { Component } from 'react'
import { TextField, Button } from 'material-ui'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class Todos extends Component {
    render() {

        if(this.props.data.loading){
            return (<div>Loading...</div>)
        }

        if (!this.props.data.loading) {
            return (<div>
                <List component="nav">
                {
                    this.props.data.Users.map((emails,index) => {
                        return (
                            <ListItem key={index} button>
                                <ListItemText primary={`${emails.name}`} secondary={`${emails.email}`} />
                            </ListItem>                        
                        )
                    })
                }
                </List>
            </div>)
        }
    
    }
}

const FEED_QUERY = gql`
 {
  Users{
    email,
    name
  }
}
`

export default graphql(FEED_QUERY)(Todos)