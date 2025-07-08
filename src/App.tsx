import { BooksGrid } from "./UI/BookGrid";
import * as S from "./UI/Layout";
import { ShouldRender } from "./UI/shouldRender";
import { useFetchBooks } from "./hooks/useFetchBooks";

function App() {
  const { data: books = [], isLoading, error } = useFetchBooks();

  return (
    <S.Layout>
      <ShouldRender if={error}>
        <p>Error loading books: {error?.message}</p>
      </ShouldRender>

      <ShouldRender if={isLoading}>
        <p>Loading books…</p>
      </ShouldRender>

      <ShouldRender if={books?.length > 0}>
        <BooksGrid books={books} />
      </ShouldRender>
    </S.Layout>
  );
}

export default App;
