"use client"; // এই ম্যাজিক লাইনটি সবার উপরে যোগ করুন

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 relative w-full bg-gray-950 text-white overflow-hidden rounded-t-[2.5rem] border-t border-white/[0.06] pt-16 pb-8">
      
      {/* ব্যাকগ্রাউন্ড সফট গ্লো */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* টপ সেকশন: গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* কোম্পানি ব্র্যান্ডিং */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
            >
              Book<span className="text-white">Manager</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The next-generation platform for digital library optimization. Track, customize, and deployed your book collection with lightning speed.
            </p>
          </div>

          {/* কুইক লিংকস */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-white transition-colors">All Books</Link>
              </li>
              <li>
                <Link href="/add-books" className="hover:text-white transition-colors">Add Books</Link>
              </li>
              <li>
                <Link href="/manage-books" className="hover:text-white transition-colors">Manage Books</Link>
              </li>
            </ul>
          </div>

          {/* নিউজলেটার সাবস্ক্রিপশন ফর্ম */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Stay Updated</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Subscribe to receive monthly statistics and feature updates.</p>
            
            {/* মডার্ন ডার্ক ইনপুট বক্স */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white/[0.03] border border-white/[0.08] rounded-xl p-1.5 focus-within:border-blue-500/50 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent pl-3 pr-2 text-sm text-white placeholder-gray-500 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* we-end সেকশন: কপিরাইট ও সোশ্যাল লিংক */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} BookManager App. </p>
          
          {/* সোশ্যাল আইকন কালেকশন */}
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
