import { useEffect, useState } from "react";
import { BookCard } from "./UI/BookCard";
import * as S from "./UI/Layout";
import type { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched books:", data);
        setBooks(data);
      });
  }, []);

  // fetch("/api/authors").then((res) => res.json());

  // fetch("/api/genres").then((res) => res.json());

  console.log(books);
  return (
    <S.Layout>
      {books?.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author.name}
          genre={book.genre.name}
        />
      ))}
    </S.Layout>
  );
}

export default App;
