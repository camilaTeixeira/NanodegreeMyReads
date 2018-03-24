import * as BooksAPI from '../BooksAPI';

const filterRemoveBook = idBook => book => book.id !== idBook;
export const isBooksArray = books => Array.isArray(books);
const sortByTitle = books => isBooksArray(books) && (books.sort((a, b) => a.title > b.title));

export const getAll = () => BooksAPI.getAll().then(books => sortByTitle(books));
export const search = query => BooksAPI.search(query).then(books => sortByTitle(books));

const createMutations = (book, shelf) => ({
  updateBookOf(books) {
    return books.filter(filterRemoveBook(book.id)).concat({
      ...book,
      shelf,
    });
  },
  deleteBookOf(books) {
    return books.filter(filterRemoveBook(book.id));
  },
});

export const updateShelf = (book, shelf) =>
  BooksAPI.update(book, shelf).then(() => createMutations(book, shelf));
