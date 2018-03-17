import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveTo from './moveTo';

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    optionsMove: PropTypes.array.isRequired,
  };
  render() {
    const { books, optionsMove, onUpdateBook } = this.props;
    return (
      <div className="bookshelf-books">

        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}
                  />
                 
                  <MoveTo
                    optionsMove={optionsMove}
                    shelf={book.shelf}
                    onUpdateBook={onUpdateBook}
                    book={book}
                  />
                   {book.shelf}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Book;
