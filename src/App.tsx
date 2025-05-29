import * as S from "./UI/Layout";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <S.Layout>
      <p className="text-lg">
        Welcome to your mock bookstore. Start building features!
      </p>
    </S.Layout>
  );
}

export default App;
