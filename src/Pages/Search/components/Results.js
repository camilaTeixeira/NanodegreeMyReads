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
    const BooksWithShelf = books.map((book) => {
      const index = SelectedIds.indexOf(book.id);
      if (index > -1) {
        return {
          ...book,
          shelf: SelectedBooks[index].shelf,
        };
      }
      return book;
    });
    return (
      <div className="list-books">
        <Library
          books={BooksWithShelf}
          loading={loading}
          onUpdateBook={onUpdateBook}
        />
      </div>
    );
  }
  return <Message />;
};

Results.propTypes = {
  books: PropTypes.any.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  SelectedBooks: PropTypes.array.isRequired,
};

export default Results;
