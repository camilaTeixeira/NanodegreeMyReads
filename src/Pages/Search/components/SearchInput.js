import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ query, onSearchBook }) => (
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title or author"
      value={query}
      onChange={event => onSearchBook(event.target.value)}
    />
  </div>
);

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchInput;
