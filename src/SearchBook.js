import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './book';


class SearchBook extends Component {

  state = {
    query: '',
    books: [],
    optionsMove: [
      { value: 'currentlyReading', option: 'Currently Reading' },
      { value: 'wantToRead', option: 'Want to Read' },
      { value: 'read', option: 'Read' },
      { value: 'none', option: 'None' },
    ],
  };
  SearchBook = (query) => {
    this.setState({ query: query.trim() });
    BooksAPI.search(query).then((books) => {
      this.setState({ books });
    });
  }


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
      <div className="search-books-results">
        {this.state.books.length !== 0 && (
        <Book books={this.state.books}  optionsMove={this.state.optionsMove} onUpdateBook={this.state.onUpdateBook} />
      )}
      </div>
    </div>
  );
}
}

export default SearchBook;
