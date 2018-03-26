import React from 'react';
import PropTypes from 'prop-types';
import { Rate, Row, Col } from 'antd';
import imgBookCoverNotAvailable from '../../icons/book-cover-not-available.png';


const Details = ({ book }) => {
  const thumbnail = (book.imageLinks && book.imageLinks.smallThumbnail) || imgBookCoverNotAvailable;
  return (
    <div>
      <Row className="book-detail">
        <Col span={5}>
          <div
            className="book-cover"
            style={{
              width: 128,
                height: 193,
                backgroundImage: `url(${thumbnail})`,
                paddingTop: 20,
                }}
          />
        </Col>
        <Col>
          <Row>
            <Col>
              <Rate disabled defaultValue={book.averageRating} />
            </Col>
            <Col>Categories: {book.categories}</Col>
            <Col>Authors: {book.authors}</Col>
            <Col>Publisher: {book.publisher}</Col>
            <Col>Page Count: {book.pageCount}</Col>
          </Row>
        </Col>
      </Row>
      <div>
        <p className="description">
          {book.description}
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Details;
