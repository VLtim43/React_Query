import { BooksGrid } from "./UI/BookGrid";
import * as S from "./UI/Layout";
import { ShouldRender } from "./UI/shouldRender";
import { useFetchBooks } from "./hooks/useFetchBooksDeprecated";

function App() {
  const { books, loading, error } = useFetchBooks();

  return (
    <S.Layout>
      <ShouldRender if={error}>
        <p>Error loading books: {error?.message}</p>
      </ShouldRender>

      <ShouldRender if={loading}>
        <p>Loading books…</p>
      </ShouldRender>

      <ShouldRender if={books?.length > 0}>
        <BooksGrid books={books} />
      </ShouldRender>
    </S.Layout>
  );
}

export default App;
