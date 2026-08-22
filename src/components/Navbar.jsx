"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter()
    const handleSingOut = () => {
        authClient.signOut()
        router.push('/')
    }

    return (
        // sticky top-0 এবং backdrop-blur এর কারণে স্ক্রোল করার সময় গ্লাস ইফেক্ট পাওয়া যাবে
        <nav className="sticky top-0 z-50 border-b border-blue-50 bg-white/80 backdrop-blur-md shadow-sm mb-8 transition-all">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo - টেক্সটে কার্ডের প্রাইসের মতো ব্লু-টু-ইন্ডিগো গ্রেডিয়েন্ট দেওয়া হয়েছে */}
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-90 transition-opacity"
                >
                    Book<span className="text-gray-900">Manager</span>
                </Link>

                {/* Navigation Links - মডার্ন ড্যাশবোর্ড স্টাইল ক্যাপসুল মেনু */}
                <div className="hidden md:flex items-center gap-1.5 bg-gray-100/60 p-1 rounded-xl border border-gray-200/30">
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

                {/* Right Side: Auth Status (Loading / User Profile / Guest Links) */}
                <div className="flex items-center gap-4">
                    {isPending ? (
                        // স্মুথ লোডিং কঙ্কাল (Skeleton) - যাতে জাম্পিং ইফেক্ট না হয়
                        <div className="h-9 w-24 bg-gray-100 animate-pulse rounded-xl" />
                    ) : session ? (
                        // সেশন থাকলে: ইউজারের নাম ও লগআউট বাটন
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-xl">
                                {/* ইউজার অ্যাভাটার আইকন */}
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-indigo-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">
                                    {session.user.name}
                                </span>
                            </div>

                            <button
                                onClick={handleSingOut}
                                className="flex items-center gap-1.5 border border-red-100 bg-red-50 text-red-600 text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_4px_12px_rgba(220,38,38,0.2)] transition-all duration-200 active:scale-95 cursor-pointer"
                            >
                                <span>Logout</span>
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        // সেশন না থাকলে: লগইন ও সাইন-আপ লিঙ্ক
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="rounded-xl px-4 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200"
                            >
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-bold px-5 py-2.5 shadow-[0_4px_14_rgba(59,130,246,0.35)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] hover:from-blue-700 hover:to-purple-700 transition-all duration-300 active:scale-95"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
