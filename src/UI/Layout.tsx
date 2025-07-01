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

      <main className="flex-1 overflow-auto p-6 flex justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 max-w-screen-xl w-full">
          {children}
        </div>
      </main>

      <footer className="bg-sepia-500 p-4 text-center text-sm border-sepia-800">
        Fake Amazon for Books — sepia edition
      </footer>
    </div>
  );
};
