type Props = {
  title: string;
  author: string;
  genre: string;
};

export const BookCard = ({ title, author, genre }: Props) => {
  return (
    <div className="h-40 w-full border border-gray-300 rounded-md p-4 flex flex-col">
      <h2 className="m-0 text-lg font-semibold">{title}</h2>
      <p className="my-1 text-sm text-gray-700">by {author}</p>
      <p className="my-1 italic text-sm text-gray-600">{genre}</p>
    </div>
  );
};
