import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Book from '../../../components/Book/index';
import { filterNone } from '../../../data/Shelves';

const Library = ({
  books, onUpdateBook, loading, shelves,
}) => {
  const shelvesWithoutNone = filterNone(shelves);
  return (
    <Spin spinning={loading}>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              onUpdateBook={onUpdateBook}
              shelves={shelvesWithoutNone}
            />
        ))}
        </ol>
      </div>
    </Spin>);
};

Library.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default Library;
