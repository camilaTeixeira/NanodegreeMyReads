import React from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import Message from './Message';

const Results = ({ books, onUpdateBook, loading }) => {
  const isBooksArray = Array.isArray(books);
  if (isBooksArray) {
    return (
      <div className="list-books">
        <Library books={books} loading={loading} onUpdateBook={onUpdateBook} />
      </div>
    );
  }
  return <Message />;
};

Results.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Results;
