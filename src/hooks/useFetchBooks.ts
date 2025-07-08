import { useQuery } from "@tanstack/react-query";
import type { Book } from "../types";

export const useFetchBooks = () => {
  return useQuery<Book[]>({
    queryKey: ["Books"],
    queryFn: async () => {
      const res = await fetch("/api/books");
      if (!res.ok) throw new Error("Failed to fetch books");
      return res.json();
    },
  });
};
