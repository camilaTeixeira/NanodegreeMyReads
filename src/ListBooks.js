import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import Book from './book';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    optionsMove: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func,
  }
  state = {
    query: '',
  };
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };
  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { books, optionsMove, onUpdateBook } = this.props;
    const { query } = this.state;

    const readingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const wantRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');
    readingBooks.sort(sortBy('title'));

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <Book books={readingBooks} optionsMove={optionsMove} onUpdateBook={onUpdateBook} />
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
              <Book books={wantRead} optionsMove={optionsMove} onUpdateBook={onUpdateBook} />
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Book books={read} optionsMove={optionsMove} onUpdateBook={onUpdateBook} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
