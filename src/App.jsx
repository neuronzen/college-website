import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // ডামি নোটিশ ডেটা
  const notices = [
    {
      id: 1,
      title: '২০২৪-২৫ শিক্ষাবর্ষের একাদশ শ্রেণির বিষয় পরিবর্তন সংক্রান্ত বিজ্ঞপ্তি',
      date: '১০ সেপ্টেম্বর, ২০২৬',
      category: 'academic',
      isUrgent: true,
      fileUrl: '#'
    },
    {
      id: 2,
      title: 'এইচএসসি দ্বাদশ শ্রেণির প্রাক-নির্বাচনী পরীক্ষার সময়সূচি প্রকাশ',
      date: '০৮ সেপ্টেম্বর, ২০২৬',
      category: 'exam',
      isUrgent: true,
      fileUrl: '#'
    },
    {
      id: 3,
      title: 'পবিত্র ঈদুল মিলাদুন্নবী (সা:) উপলক্ষে কলেজ বন্ধের নোটিশ',
      date: '০৫ সেপ্টেম্বর, ২০২৬',
      category: 'general',
      isUrgent: false,
      fileUrl: '#'
    },
    {
      id: 4,
      title: 'ডিজিটাল ক্লাস রুটিন ও অনলাইন পোর্টাল ব্যবহারের নির্দেশনা',
      date: '০১ সেপ্টেম্বর, ২০২৬',
      category: 'academic',
      isUrgent: false,
      fileUrl: '#'
    },
  ];

  // ফিল্টার করা নোটিশ
  const filteredNotices = activeTab === 'all' 
    ? notices 
    : notices.filter(n => n.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ১. টপ বার */}
      <div className="bg-emerald-800 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span>📞 হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>
            <span className="hidden md:inline">✉️ ইমেইল: info@college.edu.bd</span>
          </div>
          <div className="bg-emerald-900 px-3 py-1 rounded-full text-emerald-200 text-xs">
            📢 ২০২৪-২৫ শিক্ষাবর্ষের একাদশ শ্রেণির ভর্তি কার্যক্রম চলছে
          </div>
        </div>
      </div>

      {/* ২. হেডার */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                ক
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  সরকারি মডেল কলেজ
                </h1>
                <p className="text-xs text-slate-500">শিক্ষা, শৃঙ্খলা, তথ্যপ্রযুক্তি</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 font-medium text-slate-700">
              <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition">হোম</a>
              <a href="#" className="hover:text-emerald-600 transition">আমাদের কথা</a>
              <a href="#" className="hover:text-emerald-600 transition">একাডেমিক</a>
              <a href="#" className="hover:text-emerald-600 transition">অনলাইন ভর্তি</a>
              <a href="#notice" className="hover:text-emerald-600 transition">নোটিশ বোর্ড</a>
              <a href="#" className="hover:text-emerald-600 transition">যোগাযোগ</a>
            </nav>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-emerald-600 focus:outline-none p-2"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
            <a href="#" className="block py-2 px-3 text-emerald-600 font-semibold bg-emerald-50 rounded-md">হোম</a>
            <a href="#" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">আমাদের কথা</a>
            <a href="#" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">একাডেমিক</a>
            <a href="#" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">অনলাইন ভর্তি</a>
            <a href="#notice" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">নোটিশ বোর্ড</a>
            <a href="#" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">যোগাযোগ</a>
          </div>
        )}
      </header>

      {/* ৩. হিরো ব্যানার */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
              স্মার্ট বাংলাদেশ গড়ার প্রত্যয়ে
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              স্মার্ট শিক্ষাঙ্গনে আপনাকে <span className="text-emerald-400">স্বাগতম</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              একটি আধুনিক, প্রযুক্তিনির্ভর এবং মানসম্মত শিক্ষাপ্রতিষ্ঠান। আমাদের লক্ষ্য দক্ষ ও নীতিবান ভবিষ্যৎ প্রকাশি তৈরি করা।
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition shadow-lg">
                🎓 অনলাইন ভর্তি
              </a>
              <a href="#notice" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg transition backdrop-blur-sm">
                📋 নোটিশ কেন্দ্র
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-emerald-300 border-b border-white/10 pb-3 flex items-center gap-2">
                ⚡ জরুরি সেবা ও লিঙ্ক
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <a href="#" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">📄 পরীক্ষা ও ফলাফল</a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">💳 ফি পরিশোধ</a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">📅 ক্লাস রুটিন</a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">🏛️ বিভাগসমূহ</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ৪. স্ট্যাটিস্টিকস */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">১৯৬৫</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">প্রতিষ্ঠার বছর</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">৩,৫০০+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">বর্তমান শিক্ষার্থী</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">৮৫+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">অভিজ্ঞ শিক্ষক ও কর্মকর্তা</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">৯৮%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">পাসের হার</div>
          </div>
        </div>
      </section>

      {/* ৫. ডায়নামিক নোটিশ বোর্ড সেকশন (Notice Board Section) */}
      <section id="notice" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
              সাম্প্রতিক নোটিশসমূহ
            </h2>
            <p className="text-slate-500 text-sm mt-1">কলেজের যাবতীয় নোটিশ ও সার্কুলার একনজরে দেখুন</p>
          </div>

          {/* ক্যাটাগরি ফিল্টার বাটনসমূহ */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'সকল নোটিশ' },
              { id: 'academic', label: 'একাডেমিক' },
              { id: 'exam', label: 'পরীক্ষা' },
              { id: 'general', label: 'সাধারণ' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* নোটিশ তালিকা */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="p-4 sm:p-6 hover:bg-slate-50/80 transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {notice.isUrgent && (
                    <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-200">
                      জরুরি
                    </span>
                  )}
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    {notice.category === 'academic' ? 'একাডেমিক' : notice.category === 'exam' ? 'পরীক্ষা' : 'সাধারণ'}
                  </span>
                  <span className="text-xs text-slate-400">📅 {notice.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 hover:text-emerald-600 transition cursor-pointer">
                  {notice.title}
                </h3>
              </div>

              <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-medium px-4 py-2 rounded-lg transition whitespace-nowrap border border-slate-200 hover:border-emerald-600">
                📥 ডাউনলোড PDF
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
