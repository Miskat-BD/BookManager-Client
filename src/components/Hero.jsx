import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50/50 via-indigo-50/20 to-white overflow-hidden py-20 lg:py-28 px-6 mb-16 rounded-3xl max-w-7xl mx-auto border border-blue-100/40 shadow-sm">
      
      {/* ব্যাকগ্রাউন্ডে নিয়ন গ্লো ইফেক্ট */}
      <div className="absolute left-[-10%] top-[-10%] w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* বাম কলাম: টেক্সট কন্টেন্ট */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* গ্লোয়িং মিনি ট্যাগ */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 text-blue-700 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Next-Gen Book Management
          </div>

          {/* বড় বোল্ড হেডলাইন */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 tracking-tight leading-[1.05]">
            The Ultimate Hub for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm">
              Book Enthusiasts
            </span>
          </h1>

          {/* ডেসক্রিপশন */}
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Take total control of your reading ecosystem. Organize, update, and deploy your digital bookshelves beautifully with our lightning-fast, sleek, and intuitive dashboard interface.
          </p>

          {/* ডুয়াল বাটন সেকশন */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/books"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.5)] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
              </svg>
            </Link>

            <Link
              href="/add-books"
              className="w-full sm:w-auto flex items-center justify-center bg-white text-gray-800 font-bold text-sm px-8 py-4 rounded-2xl hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Quick Add Book
            </Link>
          </div>

        </div>

        {/* ডান কলাম: পিওর সিএসএস থ্রিডি বুক স্ট্যাক (৫ কলাম) */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-full min-h-[400px]">
          
          {/* ব্যাকগ্রাউন্ড সফট গ্লো */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* বুক স্ট্যাক কন্টেইনার - মাউস নিলে পুরো স্ট্যাকটি হালকা জুম ও সোজা হবে */}
          <div className="relative flex flex-col items-center justify-center gap-2 w-full max-w-[280px] group transform transition-all duration-500 hover:scale-105">
            
            {/* বই ১ (টপ বুক - পার্পল গ্রেডিয়েন্ট) */}
            <div className="w-[160px] h-[34px] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md border-l-[12px] border-purple-800 flex items-center px-3 rotate-[6deg] translate-y-3 group-hover:rotate-0 group-hover:translate-y-0 transition-transform duration-300 relative z-30">
              <span className="text-[10px] font-black text-purple-100 tracking-wider truncate">FICTION</span>
              <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>

            {/* বই ২ (মিডল বুক - ভাইব্রেন্ট পিংক) */}
            <div className="w-[200px] h-[38px] bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg shadow-lg border-l-[14px] border-pink-700 flex items-center px-4 rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300 relative z-20">
              <span className="text-[11px] font-black text-pink-100 tracking-wider truncate">NOVELS</span>
              <div className="absolute right-3 w-2 h-2 rounded-full bg-white/30" />
            </div>

            {/* বই ৩ (মিডল বুক ২ - সায়ান/ব্লু) */}
            <div className="w-[220px] h-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-xl border-l-[16px] border-blue-800 flex items-center px-4 rotate-[3deg] -translate-y-2 group-hover:rotate-0 group-hover:translate-y-0 transition-transform duration-300 relative z-10">
              <span className="text-xs font-black text-blue-50 tracking-widest truncate">SCI-FI COLLECTION</span>
              <div className="absolute right-3 top-0 bottom-0 m-auto w-1 h-1/2 bg-white/10" />
            </div>

            {/* বই ৪ (বেস বুক - ডিপ ব্ল্যাক-ইন্ডিগো) */}
            <div className="w-[240px] h-[44px] bg-gradient-to-r from-gray-900 to-slate-800 rounded-xl shadow-2xl border-l-[18px] border-indigo-950 flex items-center px-5 -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-black text-indigo-400 tracking-widest truncate">ENCYCLOPEDIA</span>
              {/* বইয়ের পাতার সোনালী এফেক্ট */}
              <div className="absolute right-0 top-1 bottom-1 w-2 bg-amber-400/40 rounded-r" />
            </div>

            {/* বুক রিফ্লেকশন শ্যাডো (মেঝেতে পড়ার মতন শ্যাডো) */}
            <div className="w-[220px] h-4 bg-gray-900/10 rounded-full blur-md -mt-3 transform scale-x-100 group-hover:scale-x-110 transition-transform duration-300" />
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
