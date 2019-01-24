import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';

class Booklist extends Component {
  render() {
    return (
      <div className="App">
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
