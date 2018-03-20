import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import { Spin } from 'antd';
import Shelf from './Shelf';

const Shelves = ({
  books, shelves, onUpdateBook, loading,
}) => {
  const filterShelf = shelfName => book => book.shelf === shelfName;
  const shelvesWithoutNone = shelves.filter(shelf => shelf.id !== 'none');
  return (
    <Spin spinning={loading}>
      <div className="list-books-content">
        {shelvesWithoutNone.map(shelf => (
          <Shelf
            key={shelf.id}
            shelf={shelf}
            onUpdateBook={onUpdateBook}
            books={books.filter(filterShelf(shelf.id)).sort(sortBy('title'))}
          />
        ))}
      </div>
    </Spin>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Shelves;
