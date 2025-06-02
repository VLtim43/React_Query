type Props = {
  title: string;
  author: string;
};

export const BookCard = ({ title, author }: Props) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">by {author}</p>
    </div>
  );
};
