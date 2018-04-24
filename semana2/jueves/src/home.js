import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloProvider as Provider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    uri: 'https://toktok-faqs.herokuapp.com/graphql'
})
// const httpLink = new HttpLink({
//     uri: 'http://localhost:8080/todos'
// })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

const container = document.getElementById('container')

render(
    <Provider client={client}>
        <App />
    </Provider>,
    container)