import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    if (!book) return null;
    const { id, name, description, image, price } = book;

    // সেফটি চেক এবং ফলব্যাক ইমেজ
    const finalImageSrc = image && image.trim() !== "" ? image : "/images/placeholder-book.png";

    return (
        <div className="group bg-white rounded-2xl border border-blue-100/70 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 w-full h-full flex flex-col justify-between overflow-hidden relative">
            
            {/* কালারফুল ট্রেন্ডিং ব্যাজ */}
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md animate-pulse">
                    Trending
                </span>
            </div>

            <div>
                {/* Book Image Wrapper - পেছনে একটি সুন্দর সফট ব্লু-পার্পল গ্রাডিয়েন্ট ব্যাকগ্রাউন্ড */}
                <div className="w-full h-64 flex justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 p-6 overflow-hidden relative">
                    {/* ব্যাকগ্রাউন্ডে একটি কালারফুল ব্লাড এফেক্ট */}
                    <div className="absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                    
                    {/* ইমেজ হোভার জুমিং */}
                    <div className="transform group-hover:scale-105 transition-transform duration-300 ease-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_12px_24px_rgba(59,130,246,0.3)] z-10">
                        <Image
                            src={finalImageSrc}
                            alt={name || "Book Image"}
                            height={190} 
                            width={135}
                            className="object-contain max-h-52 rounded-md"
                            priority={false}
                        />
                    </div>
                </div>

                {/* Book Info Body */}
                <div className="p-5 pb-3">
                    {/* ক্যাটাগরি ট্যাগ - ভাইব্রেন্ট পার্পল কালার */}
                    <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-1.5 bg-indigo-50 inline-block px-2 py-0.5 rounded">
                        Book Store
                    </p>

                    {/* বইয়ের নাম - হোভার করলে চমৎকার একটি নীল কালার হবে */}
                    <h2 className="text-lg font-extrabold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 leading-snug">
                        {name || "Untitled Book"}
                    </h2>

                    {/* ডেসক্রিপশন */}
                    <p className="text-gray-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                        {description || "No description available for this book. Explore to learn more details."}
                    </p>
                </div>
            </div>

            {/* Price & Action Button Section */}
            <div className="p-5 pt-0 mt-auto">
                {/* কালারফুল ডিভাইডার লাইন */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-100 to-transparent mb-4" />

                <div className="flex items-center justify-between gap-3">
                    {/* প্রাইস সেকশন - ডিপ ব্লু টোন */}
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Price</span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
                            ৳{price ?? 0}
                        </span>
                    </div>

                    {/* কালারফুল গ্লোয়িং বাটন */}
                    <Link
                        href={`/books/${id}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm px-5 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_4px_14px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)] active:scale-95 whitespace-nowrap"
                    >
                        <span>Details</span>
                        <svg 
                            xmlns="http://w3.org" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.5} 
                            stroke="currentColor" 
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
