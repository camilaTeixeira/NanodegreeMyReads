import React from 'react';
import PropTypes from 'prop-types';
import Library from './Library';

const Results = ({ books, onUpdateBook, loading }) => (
   
  <div className="list-books">
    {Array.isArray(books)}
        <Library
        books={books}
        loading={loading}
          onUpdateBook={onUpdateBook}
        />
  </div>
    
);

Results.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Results;
