import { useEffect, useState } from "react";
import { BookCard } from "./UI/BookCard";
import * as S from "./UI/Layout";
import type { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(console.log);

    fetch("/api/authors")
      .then((res) => res.json())
      .then(console.log);

    fetch("/api/genres")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <S.Layout>
      <div>
        {books?.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author.name}
          />
        ))}
      </div>
    </S.Layout>
  );
}

export default App;
