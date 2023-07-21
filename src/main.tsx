import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljo1qqg717hb01ugaxawho8z/master',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </StyledEngineProvider>,
)
