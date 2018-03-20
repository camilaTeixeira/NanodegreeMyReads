export const SHELVES = [

  { id: 'currentlyReading', label: 'Currently Reading' },
  { id: 'wantToRead', label: 'Want to Read' },
  { id: 'read', label: 'Read' },
  { id: 'none', label: 'None' },
];

export const getAll = () => new Promise(resolve => resolve(SHELVES));
