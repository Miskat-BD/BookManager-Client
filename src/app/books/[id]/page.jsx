import { getBookById } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await getBookById(id)
    const book = data?.data?.[0]
    console.log(book);

    // const finalImageSrc = book.image && book.image.trim() !== "" ? book.image : "/images/placeholder-book.png";

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white py-12 px-6">
            <div className="mx-auto max-w-6xl">
                
                {/* Back Button */}
                <Link 
                    href="/books" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 mb-8 transition-colors group"
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <span>Back to All Books</span>
                </Link>

                {/* Main Grid Card */}
                <div className="bg-white rounded-3xl border border-blue-100/70 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 sm:p-10 relative">
                    
                    {/* Background Soft Glow Blur */}
                    <div className="absolute -left-20 -top-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
                    <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-20 pointer-events-none" />

                    {/* Left Column: Image Container (4 cols on large screens) */}
                    <div className="md:col-span-5 flex justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50/40 to-purple-50 rounded-2xl p-8 relative overflow-hidden group min-h-[400px]">
                        <div className="transform group-hover:scale-102 transition-transform duration-500 ease-out drop-shadow-[0_15px_30px_rgba(59,130,246,0.25)]">
                            <Image
                                src={book?.image}
                                alt={book?.name}
                                height={380}
                                width={260}
                                className="object-contain rounded-lg max-h-[380px]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Book Details Info (7 cols on large screens) */}
                    <div className="md:col-span-7 flex flex-col justify-between py-2 relative z-10">
                        <div>
                            {/* Category & Stock Status */}
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <span className="bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-md">
                                    {book.category}
                                </span>
                                <span className="bg-emerald-50 text-emerald-600 font-bold text-xs px-3 py-1 rounded-md flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    {book.stock}
                                </span>
                            </div>

                            {/* Book Title */}
                            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                                {book.name}
                            </h1>

                            {/* Author Name */}
                            <p className="text-lg font-medium text-gray-500 mb-6">
                                By <span className="text-indigo-600 font-bold">{book.author}</span>
                            </p>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gradient-to-r from-gray-100 via-blue-100/50 to-transparent mb-6" />

                            {/* Description Section */}
                            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">About the Book</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                                {book.description}
                            </p>
                        </div>

                        {/* Bottom Actions Section */}
                        <div className="bg-gray-50/80 border border-gray-100 p-6 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                            {/* Price */}
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Total Price</span>
                                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight">
                                    ৳{book.price}
                                </span>
                            </div>

                            {/* Vibrant Glowing Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base px-8 py-3.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_25px_rgba(79,70,229,0.5)] active:scale-95 whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
};

export default BookDetailsPage;
