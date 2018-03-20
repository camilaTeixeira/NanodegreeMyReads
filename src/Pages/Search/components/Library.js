import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../../components/Book/index';

const Library = ({  books, onUpdateBook }) => (

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id} book={book} onUpdateBook={onUpdateBook} />
          ))}
        </ol>
      </div>
);

Library.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Library;
