import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'; 

import Nav from './components/Nav';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), 
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
            <Nav />
              <div className='container'>
                <Routes>
                  <Route
                    path="/"
                    element={<Landing />}
                  />  
                  <Route 
                    path="/home"
                    element={<Home />}
                  />
                  <Route
                    path="/login"
                    element={<Login />}
                  />
                  <Route
                    path="/signup"
                    element={<Signup />}
                  />
                  <Route 
                    path="/recipes"
                    element={<Recipes />}
                  /> 
                  {/* <Route
                    path="/recipe/:category"
                  element={<SingleRecipe />} 
                />  */}
                </Routes>
            </div>  
        </div>    
      </Router>
    </ApolloProvider> 
  );
}

export default App;
