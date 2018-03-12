import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import MoveTo from './moveTo'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func
  };
  state = {
    query: ""
  };
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { books, optionsMove, onDeleteContact } = this.props;
    const { query } = this.state;
    let readingBooks, wantRead, read;

    const match = new RegExp(escapeRegExp(query), "i");
    readingBooks = books.filter(book => book.shelf === "currentlyReading");
    wantRead = books.filter(book => book.shelf === "wantToRead");
    read = books.filter(book => book.shelf === "read");
    readingBooks.sort(sortBy("title"));

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readingBooks.map((book, index) => (
                    <li key={book.index}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              })`
                            }}
                          />
                       <MoveTo optionsMove={optionsMove} />
                    
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantRead.map((book, index) => (
                    <li key={book.index}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              })`
                            }}
                          />
                          <MoveTo />
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book, index) => (
                    <li key={book.index}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${
                                book.imageLinks.thumbnail
                              })`
                            }}
                          />
                           <MoveTo />
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
