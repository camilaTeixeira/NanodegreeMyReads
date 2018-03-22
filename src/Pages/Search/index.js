import React, { Component } from 'react';
import { search as searchBook, AddShelf, getAll as getAllBooks } from '../../data/Books';
import SearchBar from './components/SearchBar';
import Results from './components/Results';


class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
    bookMyShelf: [],
  };
  componentDidMount() {
    getAllBooks().then((bookMyShelf) => {
      this.setState(bookMyShelf);
    });
  }

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
  changeShelf = (book, shelf) => {
    AddShelf(book, shelf).then((books) => {
      this.setState({ books, loading: false });
    });
  };

  render() {
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
          />
        </div>
      </div>
    );
  }
}


export default SearchBooks;
