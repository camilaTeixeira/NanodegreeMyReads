import React, { Component } from 'react';
import PropTypes from "prop-types";

class MoveTo extends Component {

  static propTypes = {
    optionsMove: PropTypes.array.isRequired,
    
  };
  render() {
    const { optionsMove } = this.props;

    return (
      <div className="book-shelf-changer">
        <select>
          {optionsMove.map((option, index) => (
            <option value={option.value}>{option.option}</option>))}
        </select>
      </div>
    );
  }
}

export default MoveTo;
