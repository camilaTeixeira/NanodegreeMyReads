import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'antd';

const MoveTo = (props) => {
  const { onUpdateBook, book } = props;

  const options = (
    <Menu onClick={({ key }) => onUpdateBook(book, key)}>
      {props.shelves.map(shelf => (
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
  shelves: PropTypes.array.isRequired,
};

export default MoveTo;
