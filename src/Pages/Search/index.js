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
    SelectedBooks: this.props.SelectedBooks,
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

    return updateShelf(book, shelf).then((updateBooks) => {
      this.setState(({ books, SelectedBooks }) => ({
        books: updateBooks(books),
        SelectedBooks: updateBooks(SelectedBooks),
        loading: false,
      }));
    });
  };
  render() {
    const { reloadMyReads } = this.props;
    const { SelectedBooks } = this.state;
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
            query={this.state.query}
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