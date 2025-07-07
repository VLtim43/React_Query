import { useEffect, useState } from "react";
import type { Book } from "../types";

export function useFetchBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { books, loading, error };
}
