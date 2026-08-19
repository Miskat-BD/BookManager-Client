
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Book Icon */}
      <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-blue-50">
        <span className="text-7xl">📖</span>
      </div>

      {/* Book Info */}
      <h2 className="text-xl font-bold text-gray-900">
        {book.name}
      </h2>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
        {book.description}
      </p>

      {/* Button */}
      <Link
        href={`/books/${book.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2.5 text-center font-medium text-white transition hover:bg-blue-700"
      >
        View Details
      </Link>

    </div>
  );
};

export default BookCard;

