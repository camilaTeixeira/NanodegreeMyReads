import * as BooksAPI from '../BooksAPI';

const filterRemoveBook = idBook => book => book.id !== idBook;
export const isBooksArray = books => Array.isArray(books);
export const sortByTitle = books => (books.sort((a, b) => a.title > b.title));

export const getAll = () => BooksAPI.getAll().then(books => sortByTitle(books));


export const search = query =>
  BooksAPI.search(query).then(books => (Array.isArray(books) ? sortByTitle(books) : books));

export const updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => (books) => {
    books.filter(filterRemoveBook(book.id)).concat({
      ...book,
      shelf,
    });
  });
};
