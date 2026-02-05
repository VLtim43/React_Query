import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => fetch("/api/test").then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{data}</div>;
}

export default App;
