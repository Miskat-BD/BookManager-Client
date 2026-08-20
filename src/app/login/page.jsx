"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            console.log(error);
            setErrorMsg(error.message || "Invalid email or password. Please try again.");
            return;
        }

        console.log(data);
        router.push('/')

    };

    return (
        <main className="min-h-[85vh] flex justify-center items-center bg-gradient-to-b from-white via-blue-50/20 to-white px-6 py-12 relative overflow-hidden">
            
            {/* ব্যাকগ্রাউন্ডে গ্লো ইফেক্ট */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-15 pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-15 pointer-events-none" />

            <div className="w-full max-w-md bg-white rounded-3xl border border-blue-100/70 shadow-2xl p-8 sm:p-10 relative z-10">
                
                {/* হেডার সেকশন */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-2">
                        Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Back</span>
                    </h1>
                    <p className="text-sm font-medium text-gray-500">
                        Sign in to access your custom book database
                    </p>
                </div>

                {/* এরর মেসেজ অ্যালার্ট */}
                {errorMsg && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2.5 text-red-600 text-sm font-semibold">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <span>{errorMsg}</span>
                    </div>
                )}

                {/* ফর্ম শুরু */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                        <div className="relative flex items-center">
                            <span className="absolute left-4 text-gray-400">
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 16.5V6.75m19.75 0a2.25 2.25 0 00-2.25-2.25H4.25a2.25 2.25 0 00-2.25 2.25m19.75 0l-8 5a2.25 2.25 0 01-2.25 0l-8-5" />
                                </svg>
                            </span>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                type="email"
                                required
                                className="w-full bg-gray-50/60 border border-gray-200/80 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                            {/* মডার্ন ই-কমার্স সাইটের মতো একটি ফরগট পাসওয়ার্ড লিংক (ঐচ্ছিক) */}
                            <Link href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot?</Link>
                        </div>
                        <div className="relative flex items-center">
                            <span className="absolute left-4 text-gray-400">
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </span>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                type="password"
                                required
                                className="w-full bg-gray-50/60 border border-gray-200/80 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base py-3.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_25px_rgba(79,70,229,0.45)] active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-4"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <span>Log In</span>
                        )}
                    </button>
                </form>

                {/* Signup Footer Link */}
                <p className="text-center text-sm font-bold text-gray-500 mt-8">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-blue-600 hover:text-indigo-600 underline underline-offset-4 transition-colors ml-1"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}
