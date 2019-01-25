import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, getBooksQuery } from './../queries/queries';

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state={

      name    : '',
      genre   : '',
      authorId: '',
    };
  }
  displayAuthors() {
    const data = this.props.data;

    if (data) {
      return <option disabled>loading...</option>;
    }
 
    return data.authors.map(author => {
      return ( <option key={ author.id } value={ author.id}>{ author.name }</option> );
    });
  }  

  submitForm(event) {
    event.preventDefault();

    console.log(this.state); 
  }

  render() {
    if(this.props.data.loading){
      return <div>loading</div>;
    }
    // console.log(this.props.data.books);
  
    return (
      <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ e => this.setState({ name: e.target.value })} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ e => this.setState({ genre: e.target.value })} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={ e => this.setState({ authorId: e.target.value })} >
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