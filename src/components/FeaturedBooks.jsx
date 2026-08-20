import { getBooks } from "@/lib/books";
import BookCard from "./BookCard"; // আপনার আগের তৈরি করা BookCard কম্পোনেন্টটি এখানে ইম্পোর্ট হবে
import Link from "next/link";

const FeaturedBooks = async () => {
    let books = [];
    
    try {
        // আপনার এপিআই হ্যান্ডলার থেকে সব বই ফেচ করা হচ্ছে
        const response = await getBooks();
        // ব্যাকএন্ড স্ট্রাকচার অনুযায়ী data.data অথবা data থেকে অ্যারে নেওয়া হচ্ছে
        books = response?.data || response || [];
    } catch (error) {
        console.error("Error loading featured books:", error);
    }

    // প্রথম ৩টি বই আলাদা করা হচ্ছে
    const featuredList = books.slice(0, 3);

    // যদি ডেটাবেজে কোনো বই না থাকে
    if (featuredList.length === 0) {
        return null; // বই না থাকলে সেকশনটি স্ক্রিনে হাইড থাকবে
    }

    return (
        <section className="py-12 px-6 max-w-7xl mx-auto mb-16 relative">
            
            {/* সেকশন হেডার এবং ডানপাশে একটি মডার্ন "View All" বাটন */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-gray-100 pb-5">
                <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-md">
                        Our Top Picks
                    </p>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Collections</span>
                    </h2>
                </div>
                
                {/* অল বুকস পেজে যাওয়ার মডার্ন লিঙ্ক */}
                <Link 
                    href="/books" 
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors group whitespace-nowrap"
                >
                    <span>View All Books</span>
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

            {/* ৩টি কার্ডের জন্য পারফেক্ট Tailwind Grid লেআউট (items-stretch দিয়ে সব কার্ড সমান রাখা হয়েছে) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
                {featuredList.map((book) => (
                    // প্রতিটি বইয়ের জন্য আপনার তৈরি করা কালারফুল BookCard রেন্ডার হচ্ছে
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </section>
    );
};

export default FeaturedBooks;
