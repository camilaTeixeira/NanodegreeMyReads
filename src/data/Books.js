import * as BooksAPI from '../BooksAPI';

export const { getAll, search } = BooksAPI;

const filterRemoveBook = idBook => book => book.id !== idBook;
const updateBook = (book, shelf) => BooksAPI.update(book, shelf);

export const updateShelf = (book, shelf) =>
  updateBook(book, shelf).then(() => books =>
    books.filter(filterRemoveBook(book.id)).concat({
      ...book,
      shelf,
    }));

export const AddShelf = (book, shelf) =>
  updateBook(book, shelf).then(() => books =>
    books.filter(filterRemoveBook(book.id)).concat({
      ...book,
    }));
