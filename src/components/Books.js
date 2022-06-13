import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksList } from '../redux/books/books';
import BookItem from './BookItem';

const Books = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);

  return (
    <ul className="books-list-section">
      {booksList
        ? booksList.map((book) => <BookItem key={book.id} book={book} />)
        : 'Loading...'}
    </ul>
  );
};

export default Books;
