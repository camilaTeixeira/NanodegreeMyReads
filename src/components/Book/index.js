import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin, Modal } from 'antd';
import imgBookCoverNotAvailable from '../../icons/book-cover-not-available.png';
import MoveTo from '../MoveTo';
import Details from './details';


import './style.css';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
  };
  state = {
    updating: false,
    hover: false,
    modalVisible: false,
  };
  toggleHover = () => {
    this.setState(() => ({ hover: !this.state.hover }));
  };
  changeShelf = (book, shelf) => {
    const { onUpdateBook } = this.props;
    onUpdateBook(book, shelf);
    this.setState(() => ({ updating: true }));
  };
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  }
  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  }
  render() {
    const { book } = this.props;
    const thumbnail = (book.imageLinks && book.imageLinks.thumbnail) || imgBookCoverNotAvailable;
    return (
      <li style={{ position: 'relative' }} key={book.id} onMouseEnter={this.showDetails} >
        <Spin spinning={this.state.updating}>
          <div className="book">
            <div className="book-top" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              <div>
                <button
                  onClick={this.showModal}
                  className={`book-cover ${this.state.hover ? 'onMouseEnterBook' : ''}`}
                  style={{
                     width: 128,
                     height: 193,
                     backgroundImage: `url(${thumbnail})`,
                   }}
                />
              </div>
              <MoveTo
                shelf={book.shelf}
                onUpdateBook={this.changeShelf}
                book={book}
                shelves={this.props.shelves}
              />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            <Modal
              title={book.title}
              visible={this.state.modalVisible}
              onOk={this.handleCancel}
              onCancel={this.handleCancel}
            >
              <Details book={book} />
            </Modal>
          </div>
        </Spin>
      </li>
    );
  }
}

export default Book;
