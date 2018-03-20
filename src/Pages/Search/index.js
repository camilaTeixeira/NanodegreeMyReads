import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search as searchBook, AddShelf } from '../../data/Books';
import Library from './components/Library';

class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
  };

  SearchBook = (query) => {
    this.setState({ query: query.trim(), loading: true });
    searchBook(query).then((books) => {
      this.setState({ books, loading: false });
    });
  };
  changeShelf = (book, shelf) => {
    AddShelf(book, shelf);
  };

  render() {
    return (
      <div className="search-books-results">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.SearchBook(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="list-books">
          <Library
            books={this.state.books}
            loading={this.state.loading}
            onUpdateBook={this.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
