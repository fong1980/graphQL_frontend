import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo/ApolloProvider';
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          react app
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default (App);
