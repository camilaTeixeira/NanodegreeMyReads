import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search as searchBook, updateShelf } from '../../data/Books';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

class SearchBooks extends Component {
  static propTypes = {
    SelectedBooks: PropTypes.array.isRequired,
    reloadMyReads: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    books: [],
    loading: false,
  };
  SearchBook = (query) => {
    if (query.length > 0) {
      this.setState({ query, loading: true });
      searchBook(query, 10).then((books) => {
        this.setState({ books, loading: false });
      });
    } else {
      this.setState({ books: [], query: '', loading: false });
    }
  };
  changeShelf = (book, shelf) => {
    this.setState({ loading: true });
    updateShelf(book, shelf).then((books) => {
      this.setState({ books, loading: false });
    });
  };
  render() {
    const { SelectedBooks, reloadMyReads } = this.props;
    return (
      <div>
        <div className="search-books-results">
          <SearchBar
            onBack={reloadMyReads}
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
