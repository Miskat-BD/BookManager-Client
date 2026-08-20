import React from 'react';

const Features = () => {
    // ডাইনামিক এবং কালারফুল ফিচার ডেটা অ্যারে
    const featuresList = [
        {
            id: 1,
            title: "Real-time Tracking",
            description: "Instant data fetching from your PostgreSQL database ensures your library is always live and accurate.",
            icon: (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            colorClass: "from-blue-500 to-cyan-500",
            bgClass: "bg-blue-50/70 border-blue-100/60"
        },
        {
            id: 2,
            title: "Next-Gen Auth",
            description: "Powered by Better-Auth to keep your personalized collection and user sessions heavily secured.",
            icon: (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
            colorClass: "from-purple-500 to-indigo-500",
            bgClass: "bg-purple-50/70 border-purple-100/60"
        },
        {
            id: 3,
            title: "Dynamic Management",
            description: "Easily perform Full CRUD operations—Add, Update, or Delete any book records on the fly.",
            icon: (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            ),
            colorClass: "from-pink-500 to-rose-500",
            bgClass: "bg-pink-50/70 border-pink-100/60"
        }
    ];

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto mb-16 relative">
            
            {/* ব্যাকগ্রাউন্ডে ডেকোরেটিভ গ্রেডিয়েন্ট ব্লাড */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* সেকশন হেডার টেক্সট */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 inline-block px-3 py-1 rounded-full">
                    Features Dashboard
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Library Engine</span>?
                </h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    We provide high-fidelity tools engineered to give you complete digital ownership of your personal or organization&apos;s book shelves.
                </p>
            </div>

            {/* ফিচার কার্ডস গ্রিড লেআউট */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuresList.map((feature) => (
                    <div 
                        key={feature.id}
                        className={`group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden`}
                    >
                        {/* কার্ডের ভেতরের টপ পার্ট (আইকন এবং কন্টেন্ট) */}
                        <div>
                            {/* কালারফুল গ্রেডিয়েন্ট আইকন বক্স */}
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.colorClass} text-white flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* শিরোনাম */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                {feature.title}
                            </h3>

                            {/* বর্ণনা */}
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>

                        {/* কার্ডের বটম পার্ট (একটি চমৎকার মডার্ন ডেকোরেটিভ ট্রেইল লিংক) */}
                        <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                            <span>Learn status</span>
                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Features;
