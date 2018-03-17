import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBook from './SearchBook';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {

    books: [],
    optionsMove: [
      { value: 'currentlyReading', option: 'Currently Reading' },
      { value: 'wantToRead', option: 'Want to Read' },
      { value: 'read', option: 'Read' },
      { value: 'none', option: 'None' },
    ],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((bookNovo) => {
      this.setState(state => ({
        books: state.books.concat([bookNovo]),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              optionsMove={this.state.optionsMove}
              onUpdateBook={this.changeShelf}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBook />} />
      </div>
    );
  }
}

export default BooksApp;
