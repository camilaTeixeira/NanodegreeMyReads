import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoveTo extends Component {
  static propTypes = {
    optionsMove: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
  };
  render() {
    const {
      optionsMove, shelf, onUpdateBook, book,
    } = this.props;

    const options = optionsMove.map((option) => {
      option.value === shelf ? (option.className = 'optionselected') : '';
      return option;
    });
    return (
      <div className="book-shelf-changer">
        <select onChange={event => onUpdateBook(book, event.target.value)}>
          <option value="none" disabled>
            Move to...
          </option>
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
              className={option.className}
            >
              {option.option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default MoveTo;
