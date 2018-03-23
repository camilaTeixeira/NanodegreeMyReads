import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search as searchBook, AddShelf } from '../../data/Books';
import SearchBar from './components/SearchBar';
import Results from './components/Results';


class SearchBooks extends Component {
  static propTypes = {
    SelectedBooks: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    books: [],
    loading: false,
  };
  SearchBook = (query) => {
    if (query.length > 0) {
      this.setState({ query: query.trim(), loading: true });
      searchBook(query, 10).then((books) => {
        this.setState({ books, loading: false });
      });
    } else {
      this.setState({ books: [], query: '', loading: false });
    }
  };
  changeShelf = (book, shelf, query) => {
    AddShelf(book, shelf, query).then((books) => {
      this.setState({ books, loading: false });
    });
  };

  render() {
    const { SelectedBooks } = this.props;
    return (
      <div>
        <div className="search-books-results">
          <SearchBar
            query={this.state.query}
            onSearchBook={this.SearchBook}
          />
        </div>
        <div className="list-books">
          <Results
            books={this.state.books}
            onUpdateBook={this.changeShelf}
            loading={this.state.loading}
            SelectedBooks={SelectedBooks}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
