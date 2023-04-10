import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GqlMode } from './common'
import GlobalStyles from './Global'

const GQLMode = GqlMode

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
