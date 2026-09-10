import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTeacher, setSearchTeacher] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('all');

  // স্টুডেন্ট পোর্টাল ও লগইন স্টেট
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentIdInput, setStudentIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // স্প্রেডশিট থেকে সংগৃহীত শিক্ষক তালিকা
  const teachers = [
    { id: 1, name: "মোহাম্মদ আবদুর রশিদ", designation: "অধ্যক্ষ (ভারপ্রাপ্ত)", email: "ma.rashidalhera@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashid" },
    { id: 2, name: "মোঃ আবুল হাসনাত নাইস", designation: "উপাধ্যক্ষ", email: "mdlaish@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hasnat" },
    { id: 3, name: "দৌলতেন নাহার", designation: "অধ্যাপক", email: "daulatennahar@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daulaten" },
    { id: 4, name: "মাহমুদা সুলতানা", designation: "অধ্যাপক", email: "smohmuda68@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmuda" },
    { id: 5, name: "আবদুল গনি", designation: "অধ্যাপক", email: "01685770988j@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gani" },
    { id: 6, name: "মোঃ মোখলেছুর রহমান", designation: "অধ্যাপক", email: "mokhlesgazipur@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mokhles" },
    { id: 7, name: "মোঃ ফখরুল আলম", designation: "অধ্যাপক", email: "fakhrul1522@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fakhrul" },
    { id: 8, name: "উম্মে সালমা আক্তার", designation: "সহকারী অধ্যাপক", email: "pelectronnew@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Salma" },
    { id: 9, name: "মোঃ ফজলেহ মনির চৌধুরী", designation: "সহযোগী অধ্যাপক", email: "fazlehmonirc@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fazleh" },
    { id: 10, name: "মোঃ আফজাল হোসেন", designation: "সহযোগী অধ্যাপক", email: "afzalh1@yahoo.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Afzal" },
    { id: 11, name: "মোঃ হুমায়ুন কবির খান", designation: "সহযোগী অধ্যাপক", email: "pphkabir@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Humayun" },
    { id: 12, name: "জিয়া উদ্দিন আহম্মদ", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zia" },
    { id: 13, name: "সৈয়দ কাওছার আলী", designation: "সহকারী অধ্যাপক", email: "skaosar1969@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kaosar" },
    { id: 14, name: "ফারহানা আফরোজ খান", designation: "সহকারী অধ্যাপক", email: "fathanazaima77@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhana" },
    { id: 15, name: "জেসমিন সুলতানা ডেইজী", designation: "সহকারী অধ্যাপক", email: "daizymasharafa@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmin" },
    { id: 16, name: "নাছিমা আক্তার", designation: "সহযোগী অধ্যাপক", email: "nasimaakter011980@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nasima" },
    { id: 17, name: "সাবিনা হক", designation: "সহযোগী অধ্যাপক", email: "haquesabina87@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sabina" },
    { id: 18, name: "মাকসুদা আলপনা", designation: "সহযোগী অধ্যাপক", email: "maksudaalpona0@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maksuda" },
    { id: 19, name: "ইশমাত ঈশা", designation: "সহযোগী অধ্যাপক", email: "ishmat0382@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishmat" },
    { id: 20, name: "আবুল হোসেন চৌধুরী", designation: "সহযোগী অধ্যাপক", email: "abchowdhury20@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbulChowdhury" },
    { id: 21, name: "জোবায়দা নাহার", designation: "সহযোগী অধ্যাপক", email: "zobaidasumi71@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zobaida" },
    { id: 22, name: "মোহাম্মদ রফিকুল ইসলাম", designation: "সহযোগী অধ্যাপক", email: "saditenterprise34@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafiqul" },
    { id: 23, name: "রায়হান আহমেদ", designation: "সহযোগী অধ্যাপক", email: "rayhanahamed1980@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayhan" },
    { id: 24, name: "আসমা আক্তার", designation: "সহকারী অধ্যাপক", email: "asma2018bd@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Asma" },
    { id: 25, name: "ইকবাল হোসেন", designation: "সহকারী অধ্যাপক", email: "iqbalerapc@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Iqbal" },
    { id: 26, name: "মাহমুদা জেসমিন মুহিতা", designation: "সহকারী অধ্যাপক", email: "mahamodajasmen@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muhita" },
    { id: 27, name: "মোক্তার হোসেন", designation: "সহকারী অধ্যাপক", email: "mukterhossain530@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mukter" },
    { id: 28, name: "হাদিউল ইসলাম", designation: "সহকারী অধ্যাপক", email: "hadioulislam02@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hadiul" },
    { id: 29, name: "শামিমা নাসরিন", designation: "সহকারী অধ্যাপক", email: "shamimaruma31@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shamima" },
    { id: 30, name: "মোঃ আনোয়ারুল আজীম", designation: "সহযোগী অধ্যাপক", email: "azim338@yahoo.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anwarul" },
    { id: 31, name: "সুকোমল চন্দ্র সেন", designation: "সহকারী অধ্যাপক", email: "sukumalsen0@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sukumal" },
    { id: 32, name: "নিকুঞ্জ চন্দ্র সরকার", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikunja" },
    { id: 33, name: "লুৎফর রহমান", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lutfor" },
    { id: 34, name: "ফারজানা ফেরদোস", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farjana" },
    { id: 35, name: "শ্যামল চন্দ্র দাস", designation: "প্রভাষক", email: "agnimohondas@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shyamal" },
    { id: 36, name: "মোঃ রাশেদ সাজু", designation: "সহকারী অধ্যাপক", email: "rashad_sazu@yahoo.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashed" },
    { id: 37, name: "তানজিমা সুলতানা", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanjima" },
    { id: 38, name: "তানিয়া বেগম", designation: "প্রভাষক", email: "taniapac384@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tania" },
    { id: 39, name: "রোকসানা আক্তার", designation: "প্রভাষক", email: "roksanaakter994@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roksana" },
    { id: 40, name: "শ্রী সুকুমার চন্দ্র নন্দী", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sukumar" },
    { id: 41, name: "মোঃ মোবারক হোসেন", designation: "শরীরচর্চা শিক্ষক", email: "mdmobarakhossain247@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mobarak" },
    { id: 42, name: "মোঃ ফাইজুল ইসলাম", designation: "প্রদর্শক", email: "mdfaijulislam@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faijul" },
    { id: 43, name: "মোঃ দুলাল উদ্দিন ভূঁইয়া", designation: "প্রদর্শক", email: "dulaluddinbhuiyan209@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dulal" },
    { id: 44, name: "মোঃ মাসুদুর রহমান সিদ্দিকী", designation: "প্রদর্শক", email: "rmasudur.657@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Masudur" },
    { id: 45, name: "মোঃ রুহুল আমিন", designation: "প্রদর্শক", email: "ruhulmdamin50@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ruhul" },
    { id: 46, name: "রোকসানা আক্তার", designation: "সহকারী শিক্ষক (গ্রন্থাগার)", email: "roxana.akterpc@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RoxanaLibrarian" },
    { id: 47, name: "রিজওয়ানা রহমান", designation: "সহকারী অধ্যাপক", email: "rezuananipu19@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rejuana" },
    { id: 48, name: "মোঃ হুমায়ুন কবির", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HumayunKavir" },
    { id: 49, name: "হাছনা হেনা মুক্তা", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HasnaHena" },
    { id: 50, name: "ফরিদা আক্তার", designation: "সহকারী অধ্যাপক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farida" },
    { id: 51, name: "মোঃ শাহাদাৎ হোসেন", designation: "সহকারী অধ্যাপক", email: "shahadatsuman786@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahadat" },
    { id: 52, name: "সেলিম", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Selim" },
    { id: 53, name: "মোঃ মেহেদী হাসান", designation: "প্রভাষক", email: "mehedihassan7777@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehedi" },
    { id: 54, name: "মোঃ আবুল হাসনাত", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbulHasnat" },
    { id: 55, name: "সুলতানা রাজিয়া", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SultanaRajia" },
    { id: 56, name: "মোঃ মিজানুর রহমান", designation: "প্রভাষক", email: "mijanurrahman19822021@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mijanur" },
    { id: 57, name: "এইচ এম আবু হোসেন", designation: "প্রভাষক", email: "hm.abuhossain@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbuHossain" },
    { id: 58, name: "রহিমা খাতুন", designation: "প্রভাষক", email: "laboniakter3748@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahima" },
    { id: 59, name: "জান্নাতুল ফেরদৌস", designation: "প্রভাষক", email: "", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jannatul" },
    { id: 60, name: "মোঃ আব্দুর রাজ্জাক", designation: "প্রভাষক", email: "abdurrazzakbsmrstu@gmail.com", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbdurRazzak" }
  ];

  // ফিল্টার করা শিক্ষক
  const filteredTeachers = teachers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTeacher.toLowerCase()) || t.email.toLowerCase().includes(searchTeacher.toLowerCase());
    const matchesDesig = selectedDesignation === 'all' || t.designation.includes(selectedDesignation);
    return matchesSearch && matchesDesig;
  });

  // ডামি স্টুডেন্ট ডেটা
  const studentData = {
    name: 'আরিফ হোসেন',
    roll: '১০১০৪৫',
    class: 'একাদশ শ্রেণি',
    group: 'বিজ্ঞান',
    session: '২০২৪-২০২৫',
    attendance: '৯২%',
    gpa: '৫.০০ (প্রাক-নির্বাচনী)',
    dueFees: '০.০০ ৳ (পরিশোধিত)',
    results: [
      { subject: 'বাংলা', mark: '৮৫', grade: 'A+' },
      { subject: 'ইংরেজি', mark: '৮০', grade: 'A+' },
      { subject: 'পদার্থবিজ্ঞান', mark: '৭৮', grade: 'A' },
      { subject: 'রসায়ন', mark: '৮২', grade: 'A+' },
      { subject: 'উচ্চতর গণিত', mark: '৮৮', grade: 'A+' },
    ]
  };

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

  // লগইন হ্যান্ডলার
  const handleLogin = (e) => {
    e.preventDefault();
    if (studentIdInput && passwordInput) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert('অনুগ্রহ করে স্টুডেন্ট আইডি ও পাসওয়ার্ড প্রবেশ করান');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ১. টপ বার */}
      <div className="bg-emerald-800 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span>📞 হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>
            <span className="hidden md:inline">✉️ ইমেইল: info@college.edu.bd</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-900 px-3 py-1 rounded-full text-emerald-200 text-xs">
              📢 ২০২৪-২৫ শিক্ষাবর্ষের একাদশ শ্রেণির ভর্তি কার্যক্রম চলছে
            </span>
            {isLoggedIn && (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs px-2.5 py-1 rounded font-medium transition"
              >
                লগআউট
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ২. হেডার */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                পূ
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  পূবাইল আদর্শ কলেজ
                </h1>
                <p className="text-xs text-slate-500">শিক্ষা, শৃঙ্খলা, তথ্যপ্রযুক্তি</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 font-medium text-slate-700">
              <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition">হোম</a>
              <a href="#teachers" className="hover:text-emerald-600 transition">শিক্ষকমণ্ডলী</a>
              <a href="#portals" className="hover:text-emerald-600 transition">পোর্টাল</a>
              <a href="#notice" className="hover:text-emerald-600 transition">নোটিশ বোর্ড</a>
              <a href="#message" className="hover:text-emerald-600 transition">আমাদের কথা</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-800 text-sm font-semibold">
                  👤 {studentData.name}
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition shadow-sm"
                >
                  স্টুডেন্ট লগইন
                </button>
              )}
            </div>

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
            <a href="#teachers" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">শিক্ষকমণ্ডলী</a>
            <a href="#portals" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">পোর্টাল</a>
            <a href="#notice" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">নোটিশ বোর্ড</a>
            <a href="#message" className="block py-2 px-3 text-slate-700 hover:bg-slate-50 rounded-md">আমাদের কথা</a>
            {!isLoggedIn && (
              <button 
                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                className="w-full text-left py-2 px-3 bg-emerald-600 text-white font-semibold rounded-md"
              >
                স্টুডেন্ট লগইন
              </button>
            )}
          </div>
        )}
      </header>

      {/* যদি শিক্ষার্থী লগইন করা থাকে তবে ড্যাশবোর্ড দেখাবে */}
      {isLoggedIn ? (
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
          <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="bg-emerald-700 text-emerald-200 text-xs px-3 py-1 rounded-full font-medium">শিক্ষার্থী প্রোফাইল ড্যাশবোর্ড</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">স্বাগতম, {studentData.name}!</h2>
              <p className="text-emerald-200 text-sm mt-1">শ্রেণি: {studentData.class} | বিভাগ: {studentData.group} | রোল: {studentData.roll}</p>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow"
            >
              লগআউট করুন
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">উপস্থিতির হার</span>
              <div className="text-3xl font-extrabold text-emerald-600">{studentData.attendance}</div>
              <p className="text-xs text-slate-400">সর্বমোট কর্মদিবসের উপর ভিত্তি করে</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">সর্বশেষ জিপিএ</span>
              <div className="text-3xl font-extrabold text-emerald-600">{studentData.gpa}</div>
              <p className="text-xs text-slate-400">প্রাক-নির্বাচনী পরীক্ষা ২০২৬</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-medium">বকেয়া ফি স্ট্যাটাস</span>
              <div className="text-3xl font-extrabold text-emerald-600">{studentData.dueFees}</div>
              <p className="text-xs text-slate-400">সকল ফি পরিশোধিত রয়েছে</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
              সাম্প্রতিক পরীক্ষার নম্বরপত্র (Mark Sheet)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-700 uppercase text-xs">
                  <tr>
                    <th className="py-3 px-4 rounded-l-lg">বিষয়</th>
                    <th className="py-3 px-4">প্রাপ্ত নম্বর</th>
                    <th className="py-3 px-4 rounded-r-lg">লেটার গ্রেড</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentData.results.map((res, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-medium text-slate-800">{res.subject}</td>
                      <td className="py-3 px-4">{res.mark}</td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">{res.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ৩. হিরো ব্যানার */}
          <section className="relative bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white py-16 md:py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  স্মার্ট বাংলাদেশ গড়ার প্রত্যয়ে
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                  পূবাইল আদর্শ কলেজে আপনাকে <span className="text-emerald-400">স্বাগতম</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  একটি আধুনিক, প্রযুক্তিনির্ভর এবং মানসম্মত শিক্ষাপ্রতিষ্ঠান। আমাদের লক্ষ্য দক্ষ ও নীতিবান ভবিষ্যৎ প্রজন্ম তৈরি করা।
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
                    <a href="#teachers" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">👨‍🏫 শিক্ষকমণ্ডলী</a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-white/15 rounded-xl border border-white/5 transition flex items-center gap-2">🏛️ বিভাগসমূহ</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ৪. শিক্ষকমণ্ডলী তালিকা সেকশন (Teachers Directory) */}
          <section id="teachers" className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
                  শিক্ষকমণ্ডলী ও কর্মকর্তা
                </h2>
                <p className="text-slate-500 text-sm mt-1">পূবাইল আদর্শ কলেজের সন্মানিত শিক্ষক ও কর্মকর্তাবৃন্দ (মোট {teachers.length} জন)</p>
              </div>

              {/* ফিল্টার ও সার্চ অপশন */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input 
                  type="text" 
                  placeholder="শিক্ষকের নাম বা ইমেইল সার্চ করুন..." 
                  value={searchTeacher}
                  onChange={(e) => setSearchTeacher(e.target.value)}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-emerald-600 w-full sm:w-64"
                />
                <select 
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                >
                  <option value="all">সকল পদবী</option>
                  <option value="অধ্যক্ষ">অধ্যক্ষ / উপাধ্যক্ষ</option>
                  <option value="অধ্যাপক">অধ্যাপক</option>
                  <option value="সহযোগী অধ্যাপক">সহযোগী অধ্যাপক</option>
                  <option value="সহকারী অধ্যাপক">সহকারী অধ্যাপক</option>
                  <option value="প্রভাষক">প্রভাষক</option>
                </select>
              </div>
            </div>

            {/* টিচারদের গ্রিড কার্ড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredTeachers.map((teacher) => (
                <div key={teacher.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition text-center space-y-3 flex flex-col items-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden border-2 border-emerald-500 p-1">
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{teacher.name}</h3>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full mt-1 inline-block">
                      {teacher.designation}
                    </span>
                  </div>
                  {teacher.email ? (
                    <p className="text-xs text-slate-500 truncate w-full" title={teacher.email}>
                      ✉️ {teacher.email}
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400 italic">ইমেইল উপলব্ধ নয়</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ৫. অধ্যক্ষের বাণী */}
          <section id="message" className="py-16 px-4 max-w-7xl mx-auto border-t border-slate-200">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0 border-4 border-emerald-50 text-emerald-700 font-bold text-5xl shadow">
                👨‍🏫
              </div>
              <div className="space-y-4 text-center md:text-left">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  স্বাগতম বার্তা
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">অধ্যক্ষের বাণী</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  "আমাদের লক্ষ্য কেবল একাডেমিক ফলাফল নয়, বরং শিক্ষার্থীদের নৈতিকতা, শৃঙ্খলা ও আধুনিক প্রযুক্তিনির্ভর শিক্ষায় শিক্ষিত করে তোলা। ডিজিটাল বাংলাদেশ ও স্মার্ট সমাজ বিনির্মাণে পূবাইল আদর্শ কলেজ নিরলসভাবে কাজ করে যাচ্ছে।"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">মোহাম্মদ আবদুর রশিদ</h4>
                  <p className="text-xs text-slate-500">অধ্যক্ষ (ভারপ্রাপ্ত), পূবাইল আদর্শ কলেজ</p>
                </div>
              </div>
            </div>
          </section>

          {/* ৬. শিক্ষক ও শিক্ষার্থী পোর্টাল কার্ড */}
          <section id="portals" className="py-12 px-4 max-w-7xl mx-auto bg-slate-100/60 rounded-3xl mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">স্মার্ট পোর্টাল এক্সেস</h2>
              <p className="text-slate-500 text-sm">শিক্ষার্থী ও শিক্ষকদের পৃথক ড্যাশবোর্ডে প্রবেশের সুবিধা</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  👨‍🎓
                </div>
                <h3 className="text-xl font-bold text-slate-900">শিক্ষার্থী পোর্টাল</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  উপস্থিতি, পরীক্ষার ফলাফল, অনলাইন ক্লাস রুটিন এবং ফি দেওয়ার হিস্ট্রি দেখতে লগইন করুন।
                </p>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-sm shadow-sm"
                >
                  স্টুডেন্ট লগইন ➔
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                  👨‍🏫
                </div>
                <h3 className="text-xl font-bold text-slate-900">শিক্ষক পোর্টাল</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  দৈনন্দিন উপস্থিতি এন্ট্রি, নম্বর ইনপুট এবং ক্লাস নোটিশ প্রকাশের জন্য প্রবেশ করুন।
                </p>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition text-sm shadow-sm">
                  শিক্ষক লগইন ➔
                </button>
              </div>
            </div>
          </section>

          {/* ৭. ডায়নামিক নোটিশ বোর্ড */}
          <section id="notice" className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
                  সাম্প্রতিক নোটিশসমূহ
                </h2>
                <p className="text-slate-500 text-sm mt-1">কলেজের যাবতীয় নোটিশ ও সার্কুলার একনজরে দেখুন</p>
              </div>

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
        </>
      )}

      {/* ৮. লগইন মোডাল */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 relative border border-slate-100">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold p-1"
            >
              ✕
            </button>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto font-bold">
                🎓
              </div>
              <h3 className="text-xl font-bold text-slate-900">স্টুডেন্ট পোর্টাল লগইন</h3>
              <p className="text-xs text-slate-500">আপনার তথ্য দেখতে রোল নম্বর ও পাসওয়ার্ড দিন</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">স্টুডেন্ট রোল / আইডি</label>
                <input 
                  type="text" 
                  placeholder="যেমন: ১০১০৪৫" 
                  value={studentIdInput}
                  onChange={(e) => setStudentIdInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">পাসওয়ার্ড</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600 text-sm"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition text-sm shadow-md"
              >
                প্রবেশ করুন
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ৯. ফুটার */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="text-white text-lg font-bold">পূবাইল আদর্শ কলেজ</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              একটি আধুনিক ও স্মার্ট শিক্ষাপ্রতিষ্ঠান। গুণগত শিক্ষা নিশ্চিত করাই আমাদের মূল অঙ্গীকার।
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-semibold mb-3">গুরুত্বপূর্ণ লিঙ্ক</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition">শিক্ষা মন্ত্রণালয়</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">শিক্ষা বোর্ড</a></li>
            </ul>
          </div>
          <div className="space-y-2 text-xs">
            <h4 className="text-white font-semibold mb-3">যোগাযোগ</h4>
            <p>📍 পূবাইল, গাজীপুর, বাংলাদেশ</p>
            <p>📞 +৮৮০ ১৭০০-০০০০০০</p>
            <p>✉️ info@college.edu.bd</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © ২০২৬ পূবাইল আদর্শ কলেজ। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </footer>
    </div>
  );
}
