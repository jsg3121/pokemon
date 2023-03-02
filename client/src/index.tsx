import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './Global'

const GQLMode =
  process.env.NODE_ENV === 'production'
    ? 'http://43.201.49.91:4000/graphql'
    : 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri: GQLMode,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
