import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

const SearchBar = ({ query, onSearchBook, onBack }) => (
  <div className="search-books-bar">
    <Link onClick={onBack} className="close-search" to="/">
      Close
    </Link>
    <SearchInput query={query} onSearchBook={onSearchBook} />
  </div>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default SearchBar;
