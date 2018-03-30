import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'antd';
import { SHELVES } from '../data/Shelves';

const MoveTo = ({ onUpdateBook, book }) => {
  const options = (
    <Menu onClick={({ key }) => onUpdateBook(book, key)}>
      {SHELVES.map(shelf => (
        <Menu.Item key={shelf.id}>
          {shelf.id === book.shelf ? '✔' : '  '}
          {shelf.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="book-shelf-changer">
      <Dropdown overlay={options} placement="bottomLeft">
        <Button type="primary" shape="circle" icon="caret-down" />
      </Dropdown>
    </div>
  );
};

MoveTo.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default MoveTo;
