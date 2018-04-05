import * as BooksAPI from '../BooksAPI';

const filterRemoveBook = idBook => book => book.id !== idBook;
export const isBooksArray = books => Array.isArray(books);

const sortByTitle2 = (a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
};

export const sortByTitle = books => books.sort(sortByTitle2);

export const getAll = () => BooksAPI.getAll().then(books => sortByTitle(books));

export const search = (query, maxResults) =>
  BooksAPI.search(query, maxResults).then(books =>
    (Array.isArray(books) ? sortByTitle(books) : books));

export const updateShelf = (book, shelf) =>
  BooksAPI.update(book, shelf).then(() => books =>
    sortByTitle(books.filter(filterRemoveBook(book.id)).concat([
      {
        ...book,
        shelf,
        loading: false,
      },
    ])));
