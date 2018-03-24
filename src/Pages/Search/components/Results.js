import React from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import Message from './Message';
import { isBooksArray } from '../../../data/Books';

const Results = ({
  books, onUpdateBook, loading, SelectedBooks,
}) => {
  if (isBooksArray(books)) {
    const SelectedIds = SelectedBooks.map(book => book.id);
    const BooksWithoutShelf = books.filter(book => !SelectedIds.includes(book.id));
    return (
      <div className="list-books">
        <Library books={BooksWithoutShelf} loading={loading} onUpdateBook={onUpdateBook} />
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
  SelectedBooks: PropTypes.array.isRequired,
};

export default Results;
