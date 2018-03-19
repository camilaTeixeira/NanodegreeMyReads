import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../BooksAPI';
import Library from './components/Library'



class SearchBook extends Component {
  state = {
    query: '',
    books: [],
    loading: true,
    
  };

  SearchBook = (query) => {
    this.setState({ query: query.trim() });
    BooksAPI.search(query).then((books) => {
      this.setState({ books });
    });
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then()
  };

  render() {
    return (

      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" >Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" 
            value={this.state.query}
            onChange={ event => this.SearchBook(event.target.value)} />
        </div>
      </div>
    <Library books={this.state.books} loading={this.state.loading} onUpdateBook={this.changeShelf} />
  </div>
);
}
}

export default SearchBook;
