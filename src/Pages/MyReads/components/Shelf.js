import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import Book from '../../../components/Book/index';

const Shelf = ({
  shelf, books, onUpdateBook, shelves,
}) => (
  <div>
    <div className="bookshelf">
      <Divider orientation="left">{shelf.label}</Divider>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              onUpdateBook={onUpdateBook}
              shelves={shelves}
            />
          ))}
        </ol>
      </div>
    </div>
  </div>
);

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default Shelf;
