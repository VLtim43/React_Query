import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-sepia-400 text-sepia-900 font-serif">
      <header className="bg-sepia-500 border-b border-sepia-800 shadow p-4">
        <h1 className="text-3xl font-bold text-sepia-900">
          📚 Mirage Bookstore
        </h1>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4">{children}</main>

      <footer className="bg-sepia-500 p-4 text-center text-sm  border-sepia-800">
        Fake Amazon for Books — sepia edition
      </footer>
    </div>
  );
};
