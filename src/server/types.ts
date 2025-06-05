export type Author = {
  id: string;
  name: string;
};

export type Genre = {
  id: string;
  name: string;
};

export type Book = {
  id: string;
  title: string;
  author: Author;
  genre: Genre;
};
