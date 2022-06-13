import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    booktitle, author, id, category,
  } = book;
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={id}>
      <p>
        Book:
        {booktitle}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={HandleRemove}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    booktitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
