import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/books");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={fetchBooks} disabled={loading}>
        {loading ? "Loading..." : "Fetch Books"}
      </button>
    </div>
  );
}

export default App;
