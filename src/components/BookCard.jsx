import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    const { id, name, description, image, price } = book;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl   mx-auto ">
            
            {/* Book Image */}
            <div className=" w-full h-64 mx-auto flex justify-center items-center">
                <Image
                    src={image}
                    alt={name}
                    height={200} width={200}
                />
            </div>

            {/* Book Info */}
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {name}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                        ৳{price}
                    </span>
                </div>

                {/* Button */}
                <Link
                    href={`/books/${id}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;