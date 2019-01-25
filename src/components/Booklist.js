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
  displayBooks() {
    const { data }=this.props;

    if(!data){
      return null;
    }

    return(
      <ul id="book-list">
        {this.props.data.books.map(book => {
          return(
            <li key={book.id}>{book.name}</li>
          );
        })}
      </ul>
    );
  }

  render() {
    if(this.props.data.loading){
      return <div>loading</div>;
    }
    // console.log(this.props.data.books);

    return (
      <div className="App">
        {this.displayBooks()}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
