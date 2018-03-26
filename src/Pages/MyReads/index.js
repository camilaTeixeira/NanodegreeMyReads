import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelves from './components/Shelves';

const MyReads = ({
  books, shelves, onUpdateBook, loading,
}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads ✔</h1>
    </div>

    <Shelves
      books={books}
      shelves={shelves}
      onUpdateBook={onUpdateBook}
      loading={loading}
    />
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

MyReads.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyReads;
