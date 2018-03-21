import React, { Component } from 'react';
import { search as searchBook, AddShelf } from '../../data/Books';
import SearchBar from './components/SearchBar';
import Results from './components/Results';


class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
  };

  SearchBook = (query) => {
    this.setState({ query: query.trim(), loading: true });
    searchBook(query, 10).then((books) => {
      this.setState({ books, loading: false });
    });
  };
  changeShelf = (book, shelf) => {
    AddShelf(book, shelf);
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
            onUpdateBook={this.SearchBook}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}


export default SearchBooks;
