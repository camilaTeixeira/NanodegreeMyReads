import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import imgBookCoverNotAvailable from '../../icons/book-cover-not-available.png';
import MoveTo from '../MoveTo';
import './style.css';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
  };
  state = {
    updating: false,
  };

  changeShelf = (book, shelf) => {
    const { onUpdateBook } = this.props;
    onUpdateBook(book, shelf);
    this.setState(() => ({ updating: true }));
  };

  render() {
    const { book } = this.props;
    const thumbnail = (book.imageLinks && book.imageLinks.thumbnail) || imgBookCoverNotAvailable;
    return (
      <li style={{ position: 'relative' }} key={book.id}>
        <Spin spinning={this.state.updating}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${thumbnail})`,
                }}
              />
              <MoveTo
                shelf={book.shelf}
                onUpdateBook={this.changeShelf}
                book={book}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </Spin>
      </li>
    );
  }
}

export default Book;
