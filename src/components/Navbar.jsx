import Link from "next/link";

const Navbar = () => {
  return (
    // backdrop-blur এবং bg-white/80 এর মাধ্যমে স্ক্রোল করার সময় একটি প্রিমিয়াম গ্লাস ইফেক্ট পাওয়া যাবে
    <nav className="sticky top-0 z-50 border-b border-blue-50 bg-white/80 backdrop-blur-md shadow-sm mb-8 transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo - টেক্সটে কার্ডের প্রাইসের মতো ব্লু-টু-ইন্ডিগো গ্রেডিয়েন্ট দেওয়া হয়েছে */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-90 transition-opacity"
        >
          Book<span className="text-gray-900">Manager</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1.5 bg-gray-100/60 p-1 rounded-xl border border-gray-200/30">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            Home
          </Link>

          <Link
            href="/books"
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            All Books
          </Link>

          <Link
            href="/add-books"
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            Add Books
          </Link>

          <Link
            href="/manage-books"
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            Manage Books
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* মডার্ন লগইন বাটন */}
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200"
          >
            Login
          </Link>

          {/* কার্ডের মডার্ন বাটনের সাথে ম্যাচিং করা সাইন-আপ বাটন */}
          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-bold px-5 py-2.5 shadow-[0_4px_14px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] hover:from-blue-700 hover:to-purple-700 transition-all duration-300 active:scale-95"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
