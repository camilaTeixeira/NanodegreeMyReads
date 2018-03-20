import React from 'react';
import PropTypes from 'prop-types';
import { SHELVES } from '../data/Shelves';

const MoveTo = (props) => {
  const { onUpdateBook, book } = props;

  const options = SHELVES.map(shelf => (
    <option key={shelf.id} value={shelf.id}>
      {shelf.id === book.shelf ? '✔' : '  '}
      {shelf.label}
    </option>
  ));

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={book.shelf}
        onChange={event => onUpdateBook(book, event.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        {options}
      </select>
    </div>
  );
};

MoveTo.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default MoveTo;