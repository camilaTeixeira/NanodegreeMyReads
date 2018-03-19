import * as BooksAPI from '../BooksAPI';

export const { getAll } = BooksAPI;

const filterRemoveBook = idBook => book => book.id !== idBook;

export const updateShelf = (book, shelf) =>
  BooksAPI.update(book, shelf).then(() => books =>
    books.filter(filterRemoveBook(book.id)).concat({
      ...book,
      shelf,
    }),
  );



  