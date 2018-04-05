import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchBooks from './Pages/Search/';
import MyReadsPage from './Pages/MyReads/';
import { getAll as getAllShelves } from './data/Shelves';
import { getAll as getAllBooks, updateShelf } from './data/Books';

class BooksApp extends Component {
  state = {
    books: [],
    shelves: [],
    loading: true,
  };
  componentDidMount() {
    Promise.all([getAllBooks(), getAllShelves()]).then(([books, shelves]) => {
      this.setState({ books, shelves, loading: false });
    });
  }

  reloadBooks = () => {
    this.setState({ loading: true });
    getAllBooks().then(books => this.setState({ books, loading: false }));
  };

  changeShelf = (book, shelf) => {
    this.setState({ loading: true });

    return updateShelf(book, shelf).then((updateBooks) => {
      this.setState(({ books }) => ({
        books: updateBooks(books),
        loading: false,
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
            <MyReadsPage
              books={this.state.books}
              shelves={this.state.shelves}
              onUpdateBook={this.changeShelf}
              loading={this.state.loading}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              reloadMyReads={this.reloadBooks}
              SelectedBooks={this.state.books}
              shelves={this.state.shelves}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
