import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

const SearchBar = ({ query, onSearchBook }) => (
  <div className="search-books-bar">
    <Link className="close-search" to="/">
      Close
    </Link>
    <SearchInput query={query} onSearchBook={onSearchBook} />
  </div>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchBar;
