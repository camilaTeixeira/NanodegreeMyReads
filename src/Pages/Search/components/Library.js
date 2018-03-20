import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Book from '../../../components/Book/index';

const Library = ({ books, onUpdateBook, loading }) => {
  const BooksWithoutShelf = books.filter(book => book.shelf !== '');
  return (
    <Spin spinning={loading}>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {BooksWithoutShelf.map(book => (
            <Book key={book.id} book={book} onUpdateBook={onUpdateBook} />
        ))}
        </ol>
      </div>
    </Spin>);
};

Library.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Library;
