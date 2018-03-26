import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const SearchInput = ({ query, onSearchBook }) => (
  <div className="search-books-input-wrapper">
    <DebounceInput
      debounceTimeout={300}
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
