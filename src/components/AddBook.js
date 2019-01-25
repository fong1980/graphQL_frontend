import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from './../queries/queries';

class AddBook extends Component {
  displayAuthors() {
    const data = this.props.data;

    if (data) {
      return <option disabled>loading...</option>;
    }
 
    return data.authors.map(author => {
      return ( <option key={ author.id } value={ author.id}>{ author.name }</option> );
    });
  }  

  render() {
    if(this.props.data.loading){
      return <div>loading</div>;
    }
    // console.log(this.props.data.books);
  
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);