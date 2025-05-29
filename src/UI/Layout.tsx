import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          📚 Mirage Bookstore
        </h1>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4">{children}</main>

      <footer className="bg-white shadow p-4 text-center text-sm text-gray-500">
        Fake Amazon for Books — powered by Mirage + React Query
      </footer>
    </div>
  );
};
