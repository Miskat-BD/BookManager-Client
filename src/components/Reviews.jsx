import React from 'react';

const Reviews = () => {
    const reviewsList = [
        {
            id: 1,
            name: "Abdur Rahman",
            role: "Avid Reader",
            review: "BookManager tracking feels like a premium experience. The real-time synchronization is blazing fast!",
            rating: 5,
            initial: "AR"
        },
        {
            id: 2,
            name: "Tanvir Ahmed",
            role: "Software Engineer",
            review: "I really appreciate the clean API integration and Postgres backend. Total control over my digital bookshelf.",
            rating: 5,
            initial: "TA"
        },
        {
            id: 3,
            name: "Sajid Hasan",
            role: "Book Club Host",
            review: "Managing 200+ books was a nightmare. This system's dynamic CRUD operations saved me hours of manual logging.",
            rating: 5,
            initial: "SH"
        },
        {
            id: 4,
            name: "Nafis Fuad",
            role: "Librarian",
            review: "The UI transition and responsive design are top-notch. Better-Auth integration makes data privacy bulletproof.",
            rating: 4,
            initial: "NF"
        }
    ];

    return (
        <section className="py-24 bg-gray-950 text-white overflow-hidden relative w-full mb-16 rounded-[2.5rem]">
            
            {/* ব্যাকগ্রাউন্ডে দুটি অত্যন্ত সফট ও লাক্সারি নিওন গ্লো (চোখে লাগবে না, প্রিমিয়াম ফিল দেবে) */}
            <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* মিনিমালিস্ট ও বোল্ড হেডার */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4 relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                    Wall of Love
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                    Trusted by Next-Gen Readers.
                </h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto font-medium">
                    See how modern readers are transforming their digital library workflows.
                </p>
            </div>

            {/* ইনফিনিট হরাইজন্টাল স্লাইডার কন্টেইনার */}
            <div className="relative flex w-full overflow-x-hidden pt-4 pb-8 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                
                {/* অ্যানিমেশন লুপকে নিখুঁত করতে একই লিস্ট দুবার রেন্ডার করা হয়েছে */}
                <div className="flex gap-6 shrink-0 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
                    {[...reviewsList, ...reviewsList].map((item, index) => (
                        <div 
                            key={`${item.id}-${index}`}
                            className="w-[320px] sm:w-[360px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] hover:scale-[1.02] shadow-2xl"
                        >
                            {/* টপ পার্ট: রিভিউ টেক্সট */}
                            <div>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                                    &ldquo;{item.review}&rdquo;
                                </p>
                            </div>

                            {/* বটম পার্ট: ইউজার প্রোফাইল ও স্টার */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] mt-8">
                                <div className="flex items-center gap-3">
                                    {/* মিনিমালিস্ট ডার্ক অ্যাভাটার */}
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-white flex items-center justify-center text-xs font-bold shadow-inner">
                                        {item.initial}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white tracking-wide">
                                            {item.name}
                                        </h4>
                                        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* ক্লিন গোল্ডেন স্টারস */}
                                <div className="flex items-center gap-0.5">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Reviews;
