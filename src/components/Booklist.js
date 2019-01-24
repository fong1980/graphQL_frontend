import React, { Component } from 'react';
import{ gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`;

class Booklist extends Component {
  render() {
    console.log('_', this.props);

    return (
      <div className="App">
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
