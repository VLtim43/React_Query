import { BookCard } from "./BookCard";
import type { Book } from "../types";

type BooksGridProps = {
  books: Book[];
};

export const BooksGrid = ({ books }: BooksGridProps) => (
  <>
    {books?.map((book) => (
      <BookCard
        key={book.id}
        title={book.title}
        author={book.author.name}
        genre={book.genre.name}
      />
    ))}
  </>
);
