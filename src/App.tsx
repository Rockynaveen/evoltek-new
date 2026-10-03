import { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Navigation,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Building2,
  Mail,
  DollarSign,
  Award,
  PhoneCall,
  Check,
  Handshake,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';



export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState<string>('General Enquiry');

  // Interactive ROI Calculator State
  const [roiLocation, setRoiLocation] = useState<'highway' | 'city'>('highway');
  const [roiInvestment, setRoiInvestment] = useState<number>(5000000); // Default ₹50 Lakhs total
  const [roiAgreement, setRoiAgreement] = useState<5 | 10>(5);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    interest: 'Investment',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Calculations for ROI Calculator
  const investorContribution = roiInvestment * 0.5;
  const evoltekContribution = roiInvestment * 0.5;

  // Return estimation
  // If 5 years: Fixed Return 5% monthly on investor contribution
  // If 10 years: Percentage Return 28% annual return on investor contribution
  const monthlyReturn = roiAgreement === 5 ? investorContribution * 0.05 : (investorContribution * 0.28) / 12;
  const totalReturn = roiAgreement === 5 ? monthlyReturn * 12 * 5 : investorContribution * 0.28 * 10;
  const roiPercentage = ((totalReturn / investorContribution) * 100).toFixed(0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        location: '',
        interest: 'Investment',
        message: ''
      });
    }, 4000);
  };

  const openModalWithOption = (optionTitle: string) => {
    setModalOption(optionTitle);
    setPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] p-1">

      {/* ================= HERO SECTION BLOCK (Electa EV Charging Station Exact Design) ================= */}
      <div id="home" className="relative w-full h-[calc(100vh-1rem)] flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden bg-[#171E23] text-white shadow-xl">

        {/* TOP NAVIGATION HEADER (Full White Header Bar) */}
        <header className="relative z-30 w-full bg-white px-6 sm:px-8 py-0 flex items-center justify-between shadow-sm rounded-t-2xl sm:rounded-t-3xl">
          {/* Logo (Left) */}
          <a href="#home" className="flex items-center group py-0 shrink-0">
            <img
              src="/logo.png"
              alt="Evoltek Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[360px] object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Navigation Links (Center/Right) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 ml-auto mr-8">
            <a href="#home" className="text-[#32aa15] font-bold text-sm xl:text-base hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#about" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              About
            </a>
            <a href="#charging-stations" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Charging Stations
            </a>
            <a href="#investment" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Investment
            </a>
            <a href="#franchise" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Franchise
            </a>
            <a href="#roi-calculator" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              ROI Calculator
            </a>
            <a href="#contact" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Contact
            </a>
          </nav>

          {/* Become a Partner Green Pill Button */}
          <div className="hidden sm:flex items-center ml-auto lg:ml-0 shrink-0">
            <button
              onClick={() => openModalWithOption('Become a Partner')}
              className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-sm sm:text-base py-2.5 px-5 sm:px-6 rounded-full flex items-center gap-3 shadow-lg shadow-[#32aa15]/25 transition-all duration-300 group active:scale-95 cursor-pointer shrink-0"
            >
              <span className="whitespace-nowrap">Become a Partner</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#32aa15] text-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#32aa15] ml-auto"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </header>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#171E23]/95 backdrop-blur-xl border-b border-slate-700/80 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-white relative z-50">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#32aa15]">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">About</a>
            <a href="#charging-stations" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Charging Stations</a>
            <a href="#investment" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Investment</a>
            <a href="#franchise" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Franchise</a>
            <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">ROI Calculator</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Contact</a>
            <div className="pt-4 border-t border-slate-700">
              <button
                onClick={() => { setMobileMenuOpen(false); openModalWithOption('Become a Partner'); }}
                className="w-full py-3.5 bg-[#32aa15] text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-lg"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* HERO BODY AREA */}
        <div className="relative flex-1 flex items-center overflow-hidden">
          {/* Background Image */}
          <img
            src="/electa_hero_bg.jpg"
            alt="Electa EV Charging Station"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Left Side Dark Card Overlay (Matches dark logo tab seamlessly) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171E23] via-[#171E23]/95 md:via-[#171E23]/85 to-transparent md:w-[72%] lg:w-[65%] z-10" />

          {/* Content Box */}
          <div className="relative z-20 max-w-7xl px-6 sm:px-8 py-10 sm:py-14 md:py-16 w-full">
            <div className="max-w-3xl lg:max-w-5xl space-y-6 sm:space-y-7">

              {/* Welcome Tag */}
              <div className="inline-flex items-center gap-3 text-slate-200 text-sm sm:text-base font-semibold tracking-wide">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#32aa15] fill-current shrink-0" />
                <span>WELCOME TO EVOLTEK</span>
              </div>

              {/* Main Headline (Single Line) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight font-['Plus_Jakarta_Sans'] whitespace-nowrap group">
                Powering Every{' '}
                <span className="text-[#32aa15] group-hover:text-white hover:text-white transition-colors duration-300">
                  Journey
                </span>
              </h1>

              {/* Subtitle / Description Paragraph with Note Callout */}
              <div className="space-y-3 max-w-2xl">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  Building a smarter, reliable and scalable EV charging network across cities, highways and destinations.
                </p>

                {/* Note Callout (No Card Background) */}
                <div className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                  <Sparkles className="w-5 h-5 text-[#32aa15] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-white">Note:</strong> Fast charging, digital convenience and traveller-friendly EV hubs designed for the future of electric mobility.
                  </span>
                </div>
              </div>

              {/* Action Button Row (Side-by-Side) */}
              <div className="pt-3 flex flex-row items-center gap-3 sm:gap-5 flex-wrap sm:flex-nowrap">
                {/* Primary CTA Button */}
                <button
                  onClick={() => openModalWithOption('Invest With Evoltek')}
                  className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-sm sm:text-base py-3 px-6 sm:px-7 rounded-full flex items-center justify-between gap-3 sm:gap-4 shadow-xl shadow-[#32aa15]/30 hover:shadow-none transition-all duration-300 group cursor-pointer active:scale-95 hover:scale-105 shrink-0"
                >
                  <span className="whitespace-nowrap">Invest With Evoltek</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white group-hover:bg-[#32aa15] text-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                    <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>

                {/* Secondary CTA Button */}
                <a
                  href="#about"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm sm:text-base py-3.5 px-6 sm:px-7 rounded-full flex items-center gap-2.5 shadow-md backdrop-blur-md transition-all duration-300 group cursor-pointer active:scale-95 hover:border-white/60 shrink-0"
                >
                  <span className="whitespace-nowrap">Explore Charging Stations</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. "WHAT IS EVOLTEK?" SECTION ================= */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: EV Charging Station Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/80 group">
              <img
                src="/about%20us.png"
                alt="Evoltek EV Charging Station - About Us"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Content & 4 Features */}
          <div className="lg:col-span-6 space-y-8 text-left">

            <div className="space-y-4">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-950 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
                <Navigation className="w-3.5 h-3.5 text-emerald-700" />
                <span>City → Highway → Destination</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
                The Future of EV Charging Starts Here
              </h2>

              {/* Main Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Evoltek is a new-generation EV charging station concept designed to build a convenient, reliable and scalable charging network across cities and highways.
              </p>
            </div>

            {/* 4 Clean Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  ⚡ Fast Charging
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  High-capacity DC fast chargers minimizing wait times for every driver.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  📍 Strategic Locations
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Optimally placed along busy highways, urban centers and popular hubs.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  📱 Smart Digital Experience
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Seamless app navigation, real-time charger availability & contactless payments.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  🔋 Scalable Infrastructure
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Future-ready modular hardware designed to grow with EV adoption.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. INVESTMENT MODEL SECTION (50/50 COLLABORATION) ================= */}
      <section id="investment" className="py-16 sm:py-20 bg-[#F2F8F4] rounded-[32px] my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Header with Horizontal Green Lines */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <div className="h-[2px] w-12 sm:w-28 bg-[#1A7D0D]" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A7D0D] tracking-wide uppercase text-center font-['Plus_Jakarta_Sans']">
              INVESTMENT MODEL: COLLABORATION
            </h2>
            <div className="h-[2px] w-12 sm:w-28 bg-[#1A7D0D]" />
          </div>
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2D3748] mt-2.5">
            EVOLTEK & INVESTOR – GROWING TOGETHER
          </p>
        </div>

        {/* Top Visual Diagram (2 Circle Photos + 50/50 Handshake Center) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-14 sm:mb-18">

          {/* Left Circle Photo: EV Charging Station */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 sm:p-2.5 bg-white border-[5px] border-[#1A7D0D] shadow-2xl shadow-green-900/15 overflow-hidden group">
              <img
                src="/about us.png"
                alt="Evoltek EV Charging Station"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center 50/50 Handshake Badge */}
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <div>
              <span className="text-5xl sm:text-6xl font-black text-[#1A7D0D] block tracking-tight leading-none">50%</span>
              <span className="text-xs sm:text-sm font-black uppercase text-[#1A7D0D] tracking-widest block mt-1">EVOLTEK</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 w-full justify-center py-2">
              <span className="h-[2px] w-10 sm:w-14 bg-[#1A7D0D]"></span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#1A7D0D] bg-white flex items-center justify-center shadow-md text-[#1A7D0D] shrink-0 hover:scale-105 transition-transform">
                <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A7D0D] stroke-[2.2]" />
              </div>
              <span className="h-[2px] w-10 sm:w-14 bg-[#1A7D0D]"></span>
            </div>

            <div>
              <span className="text-5xl sm:text-6xl font-black text-[#1A7D0D] block tracking-tight leading-none">50%</span>
              <span className="text-xs sm:text-sm font-black uppercase text-[#1A7D0D] tracking-widest block mt-1">INVESTOR</span>
            </div>
          </div>

          {/* Right Circle Photo: Investor Growth & Nature */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 sm:p-2.5 bg-white border-[5px] border-[#1A7D0D] shadow-2xl shadow-green-900/15 overflow-hidden group">
              <img
                src="/investor_growth_circle.jpg"
                alt="Investor Growth"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Bottom 5 Features Row (Matching Reference Layout & 3D Flat Icons) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto pt-4 items-start text-center">

          {/* Feature 1: Shared Investment */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="gradCoinBase" cx="40%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="70%" stopColor="#15803d" />
                    <stop offset="100%" stopColor="#14532d" />
                  </radialGradient>
                  <linearGradient id="goldHalf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="60%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="greenHalf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="70%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="36" fill="url(#gradCoinBase)" />
                <circle cx="40" cy="40" r="32" fill="#ffffff" fillOpacity="0.2" />
                <path d="M 40 12 A 28 28 0 0 0 40 68 Z" fill="url(#goldHalf)" />
                <path d="M 40 12 A 28 28 0 0 1 40 68 Z" fill="url(#greenHalf)" />
                <line x1="40" y1="12" x2="40" y2="68" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.8" />
                <text x="26" y="44" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">50%</text>
                <text x="54" y="44" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">50%</text>
                <ellipse cx="40" cy="22" rx="18" ry="7" fill="#ffffff" fillOpacity="0.3" />
              </svg>
            </div>
            <h3 className="font-extrabold text-[#1A7D0D] text-sm sm:text-base mt-3 leading-snug">
              Shared<br />Investment
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-1 leading-relaxed max-w-[190px]">
              You invest only half the cost, and Evoltek invests the other half.
            </p>
          </div>

          {/* Feature 2: Hassle-free Maintenance */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gearGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient id="metalTool" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                </defs>
                <path d="M40 12 L43 18 L50 17 L52 23 L58 24 L58 31 L64 34 L62 40 L64 46 L58 49 L58 56 L52 57 L50 63 L43 62 L40 68 L37 62 L30 63 L28 57 L22 56 L22 49 L16 46 L18 40 L16 34 L22 31 L22 24 L28 23 L30 17 L37 18 Z" 
                      fill="url(#gearGrad)" stroke="#065f46" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="40" cy="40" r="16" fill="#f0fdf4" stroke="#047857" strokeWidth="2" />
                <g transform="rotate(-30 40 40)">
                  <rect x="37" y="20" width="6" height="40" rx="3" fill="url(#metalTool)" stroke="#475569" strokeWidth="1" />
                  <path d="M33 25 C33 19 47 19 47 25 L44 25 C43 22 37 22 36 25 Z" fill="url(#metalTool)" stroke="#475569" strokeWidth="1" />
                  <circle cx="40" cy="54" r="5" fill="url(#metalTool)" stroke="#475569" strokeWidth="1" />
                  <circle cx="40" cy="54" r="2.5" fill="#f0fdf4" />
                </g>
                <g transform="rotate(40 40 40)">
                  <rect x="38.5" y="24" width="3" height="30" fill="url(#metalTool)" stroke="#475569" strokeWidth="0.8" />
                  <rect x="37" y="44" width="6" height="14" rx="2" fill="#15803d" stroke="#065f46" strokeWidth="1" />
                </g>
              </svg>
            </div>
            <h3 className="font-extrabold text-[#1A7D0D] text-sm sm:text-base mt-3 leading-snug">
              Hassle-free<br />Maintenance
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-1 leading-relaxed max-w-[190px]">
              Evoltek takes care of setup, operations and station maintenance.
            </p>
          </div>

          {/* Feature 3: Two Return Options */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="scaleGreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="50%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                  <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
                <ellipse cx="40" cy="68" rx="16" ry="5" fill="#14532d" />
                <rect x="38" y="22" width="4" height="46" rx="2" fill="url(#scaleGreen)" />
                <circle cx="40" cy="20" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                <rect x="14" y="21" width="52" height="4" rx="2" fill="url(#scaleGreen)" stroke="#15803d" strokeWidth="1" />
                <circle cx="18" cy="23" r="2.5" fill="#15803d" />
                <circle cx="62" cy="23" r="2.5" fill="#15803d" />
                
                {/* Left Pan */}
                <line x1="18" y1="24" x2="10" y2="44" stroke="#16a34a" strokeWidth="1.2" />
                <line x1="18" y1="24" x2="26" y2="44" stroke="#16a34a" strokeWidth="1.2" />
                <path d="M 9 44 Q 18 52 27 44 Z" fill="url(#panGrad)" stroke="#15803d" strokeWidth="1" />
                <circle cx="18" cy="41" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

                {/* Right Pan */}
                <line x1="62" y1="24" x2="54" y2="44" stroke="#16a34a" strokeWidth="1.2" />
                <line x1="62" y1="24" x2="70" y2="44" stroke="#16a34a" strokeWidth="1.2" />
                <path d="M 53 44 Q 62 52 71 44 Z" fill="url(#panGrad)" stroke="#15803d" strokeWidth="1" />
                <circle cx="62" cy="41" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="font-extrabold text-[#1A7D0D] text-sm sm:text-base mt-3 leading-snug">
              Two Return<br />Options
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-1 leading-relaxed max-w-[190px]">
              Choose between a percentage return or a fixed return.
            </p>
          </div>

          {/* Feature 4: Secure Agreements */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="60%" stopColor="#15803d" />
                    <stop offset="100%" stopColor="#14532d" />
                  </linearGradient>
                </defs>
                <path d="M 40 8 C 58 14 66 18 66 38 C 66 54 52 66 40 72 C 28 66 14 54 14 38 C 14 18 22 14 40 8 Z" 
                      fill="url(#shieldGrad)" stroke="#166534" strokeWidth="2" />
                <path d="M 40 12 C 54 17 62 20 62 38 C 62 51 50 62 40 67 C 30 62 18 51 18 38 C 18 20 26 17 40 12 Z" 
                      fill="#ffffff" fillOpacity="0.15" />
                {/* Document */}
                <rect x="26" y="22" width="28" height="36" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                <path d="M 46 22 L 54 30 L 46 30 Z" fill="#e2e8f0" />
                <line x1="30" y1="29" x2="42" y2="29" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
                <line x1="30" y1="35" x2="48" y2="35" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="30" y1="40" x2="48" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="30" y1="45" x2="44" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="43" cy="50" r="5" fill="#16a34a" />
                <path d="M41 50 L42.5 51.5 L45 49" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-extrabold text-[#1A7D0D] text-sm sm:text-base mt-3 leading-snug">
              Secure<br />Agreements
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-1 leading-relaxed max-w-[190px]">
              Long-term agreement of 5 or 10 years, renewable.
            </p>
          </div>

          {/* Feature 5: Transparency with App */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="phoneCase" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="60%" stopColor="#15803d" />
                    <stop offset="100%" stopColor="#052e16" />
                  </linearGradient>
                </defs>
                <rect x="26" y="10" width="28" height="60" rx="6" fill="url(#phoneCase)" stroke="#22c55e" strokeWidth="2" />
                <rect x="28.5" y="14" width="23" height="52" rx="4" fill="url(#screenGrad)" />
                <rect x="36" y="12" width="8" height="1.5" rx="0.75" fill="#94a3b8" />
                <circle cx="40" cy="32" r="7" fill="#ffffff" fillOpacity="0.25" stroke="#4ade80" strokeWidth="1.5" />
                <path d="M40 28 L37.5 33 L40.5 33 L39.5 37 L42.5 31.5 L39.5 31.5 Z" fill="#ffffff" />
                <rect x="31" y="45" width="18" height="3" rx="1.5" fill="#4ade80" />
                <rect x="31" y="50" width="13" height="2.5" rx="1.25" fill="#86efac" />
                <rect x="31" y="55" width="16" height="2.5" rx="1.25" fill="#86efac" />
                <rect x="36" y="62" width="8" height="1.5" rx="0.75" fill="#ffffff" fillOpacity="0.8" />
              </svg>
            </div>
            <h3 className="font-extrabold text-[#1A7D0D] text-sm sm:text-base mt-3 leading-snug">
              Transparency<br />with App
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700 font-medium mt-1 leading-relaxed max-w-[190px]">
              Track your station's performance through the Evoltek mobile app.
            </p>
          </div>

        </div>

      </section>

      {/* ================= 6. VISION & MISSION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision Screen */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-emerald-800/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">Strategic Direction</span>
              <h3 className="text-3xl font-black text-white">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To build a smart and accessible EV charging network connecting cities, highways and destinations, enabling electric mobility without range anxiety.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-800/40 text-xs font-semibold text-emerald-400">
              ⚡ Zero Range Anxiety Mobility
            </div>
          </div>

          {/* Mission Screen */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Navigation className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-800">Core Purpose</span>
              <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                To establish strategically located EV charging stations with reliable technology, fast charging, simple digital payments, high uptime and a customer-friendly charging experience.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              🌱 High Uptime & Customer Excellence
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. "THE SMARTER DIFFERENCE" COMPARISON ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            EVOLTEK — The Smarter Difference
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how Evoltek modernizes the EV infrastructure experience compared to traditional standalone chargers.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-2 bg-slate-900 text-white p-4 sm:p-6 text-center text-sm sm:text-base font-extrabold">
            <div className="text-slate-400">Traditional Charging</div>
            <div className="text-emerald-400 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 fill-emerald-400" /> EVOLTEK Network
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Standalone charging points
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Connected charging network
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Individual locations
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> City → Highway → Destination
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Limited charging options
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Multiple power options (60–480 kW)
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Basic highway charging
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Highway charging destinations
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Limited traveller amenities
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Complete highway experience
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Basic digital experience
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Smart charging experience
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> General EV charging
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Passenger + fleet solutions
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Fixed capacity
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Built to scale
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8. CHARGING STATIONS SECTION ================= */}
      <section id="charging-stations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Station Types</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Charging Solutions Built for Every Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance hardware configurations tailored for high-volume highway corridors and busy urban centers.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="space-y-8 max-w-6xl mx-auto">

          {/* Card 1: Highway Charging Station */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Title + Subtitle + Action Button */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Highway Charging Station
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Designed for high-speed highway corridors and long-distance drivers.
                  </p>
                </div>

                <button
                  onClick={() => openModalWithOption('Highway Charging Station')}
                  className="inline-flex items-center justify-between sm:justify-start gap-3 bg-[#38c838] hover:bg-[#2eb02e] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 group cursor-pointer w-fit"
                >
                  <span>Select Option</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>
              </div>

              {/* Middle Column: Vertical Divider + Specs List */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Minimum Space: </strong>
                    <span>1 Acre</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Power: </strong>
                    <span>60 / 120 / 180 / 240 / 360 / 480 kW</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Charger: </strong>
                    <span>DC Fast Charging</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Best For: </strong>
                    <span>Long-distance travellers & highway traffic</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Custom Rounded Cut */}
              <div className="lg:col-span-4">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden rounded-[28px] rounded-tr-[55px] rounded-bl-[55px] shadow-md group">
                  <img
                    src="/highway%20charger.png"
                    alt="Highway Charging Station"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: City Charging Station */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Title + Subtitle + Action Button */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    City Charging Station
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Compact, high-throughput charging hubs tailored for daily EV commuters.
                  </p>
                </div>

                <button
                  onClick={() => openModalWithOption('City Charging Station')}
                  className="inline-flex items-center justify-between sm:justify-start gap-3 bg-[#38c838] hover:bg-[#2eb02e] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 group cursor-pointer w-fit"
                >
                  <span>Select Option</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>
              </div>

              {/* Middle Column: Vertical Divider + Specs List */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Minimum Space: </strong>
                    <span>2,000 sq. ft.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Power: </strong>
                    <span>60 / 120 / 180 / 240 / 360 / 480 kW</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Charger: </strong>
                    <span>DC Fast Charging</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Best For: </strong>
                    <span>Daily city EV users</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Custom Rounded Cut */}
              <div className="lg:col-span-4">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden rounded-[28px] rounded-tr-[55px] rounded-bl-[55px] shadow-md group">
                  <img
                    src="/city%20chareger.png"
                    alt="City Charging Station"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 10. RETURNS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
            <span>Investment Options</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Choose Your Return Model
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Pick between high-upside percentage revenue sharing or predictable fixed monthly returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Option A */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase">
              Option A
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900">Percentage Return</h3>
              <div className="text-4xl font-extrabold text-emerald-800">28% Return</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Participate directly in station utilization growth with a percentage-based payout model over a long-term agreement.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10-Year Agreement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Renewal availability after 10 years</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Managed technical operations</li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithOption('Choose Percentage Return Model')}
              className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
            >
              Choose Percentage Return
            </button>
          </div>

          {/* Option B */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-900 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-slate-900 text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase">
              Option B
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900">Fixed Return</h3>
              <div className="text-4xl font-extrabold text-slate-900">5% Monthly ROI</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy consistent, predictable cash flow with guaranteed fixed monthly returns paid directly to your account.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> 5-Year Agreement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> Guaranteed monthly cash flow</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> Complete operational support</li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithOption('Choose Fixed Return Model')}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
            >
              Choose Fixed Return
            </button>
          </div>

        </div>
      </section>

      {/* ================= 11. HOW IT WORKS ================= */}
      <section className="space-y-12 py-8 w-full">
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[2px] w-16 sm:w-28 bg-[#1a7d0d]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a7d0d] tracking-wider uppercase text-center">
            HOW TO GET STARTED
          </h2>
          <div className="h-[2px] w-16 sm:w-28 bg-[#1a7d0d]" />
        </div>

        <div className="relative w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_book.jpg"
                    alt="Step 1: Book"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  1
                </span>

                {/* Connector Arrow (1 -> 2) */}
                <div className="absolute left-[98%] right-[-65%] sm:right-[-70%] lg:right-[-65%] top-1/2 -translate-y-1/2 flex items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Book</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Pay a ₹25,000 booking advance and receive a receipt.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_agree.jpg"
                    alt="Step 2: Agree"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  2
                </span>

                {/* Desktop Connector Arrow (2 -> 3) */}
                <div className="hidden lg:flex absolute left-[98%] right-[-65%] top-1/2 -translate-y-1/2 items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-5 h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Agree</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Sign the agreement (5 or 10 years).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_launch.jpg"
                    alt="Step 3: Launch"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  3
                </span>

                {/* Connector Arrow (3 -> 4) */}
                <div className="absolute left-[98%] right-[-65%] sm:right-[-70%] lg:right-[-65%] top-1/2 -translate-y-1/2 flex items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Launch</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Your station is set up in about 2 months.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_track.jpg"
                    alt="Step 4: Track"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  4
                </span>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Track</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Monitor everything on the Evoltek mobile app.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 12. ROI CALCULATOR ================= */}
      <section id="roi-calculator" className="py-20 bg-slate-900 text-white rounded-[30px] my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Financial Forecasting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Calculate Your Evoltek Investment
          </h2>
          <p className="text-slate-300 text-base">
            Adjust parameters below to estimate co-investment numbers and expected financial returns.
          </p>
        </div>

        {/* Calculator Controls Container */}
        <div className="bg-slate-800/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-700 space-y-8">

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Location Type */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Location Type</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setRoiLocation('highway')}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiLocation === 'highway' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Highway
                </button>
                <button
                  type="button"
                  onClick={() => setRoiLocation('city')}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiLocation === 'city' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  City
                </button>
              </div>
            </div>

            {/* Agreement Duration */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Agreement Option</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setRoiAgreement(5)}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiAgreement === 5 ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  5 Yrs (5%/mo)
                </button>
                <button
                  type="button"
                  onClick={() => setRoiAgreement(10)}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiAgreement === 10 ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  10 Yrs (28%)
                </button>
              </div>
            </div>

            {/* Investment Amount Display */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Total Project Budget</label>
              <div className="bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-700 text-lg font-black text-emerald-400">
                {formatCurrency(roiInvestment)}
              </div>
            </div>

          </div>

          {/* Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Min: ₹20 Lakhs</span>
              <span>Max: ₹2 Crores</span>
            </div>
            <input
              type="range"
              min={2000000}
              max={20000000}
              step={500000}
              value={roiInvestment}
              onChange={(e) => setRoiInvestment(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700 rounded-lg appearance-none"
            />
          </div>

          {/* Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-700/80">

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Your Investment (50%)</p>
              <p className="text-xl font-extrabold text-white">{formatCurrency(investorContribution)}</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Evoltek Contribution (50%)</p>
              <p className="text-xl font-extrabold text-emerald-400">{formatCurrency(evoltekContribution)}</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Estimated Return</p>
              <p className="text-xl font-extrabold text-teal-300">{formatCurrency(totalReturn)}</p>
              <p className="text-[10px] text-slate-400">Over {roiAgreement} years</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Potential ROI</p>
              <p className="text-xl font-extrabold text-emerald-400">{roiPercentage}%</p>
              <p className="text-[10px] text-slate-400">Total Return Ratio</p>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => openModalWithOption(`Start Investment Journey (Calculated ${formatCurrency(investorContribution)})`)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-[15px] shadow-lg shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              <span>Start Your Investment Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
      </section>

      {/* ================= 13. EVOLTEK MOBILE APP ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-950 text-white rounded-[30px] p-8 sm:p-14 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Smart Mobile Portal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Everything. In One App.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Investors and EV Network Users can check station status, usage and earnings through the Evoltek mobile app, all in one place.
          </p>

          <div className="inline-block bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-bold px-5 py-2.5 rounded-2xl shadow-inner">
            📱 Coming Soon on iOS & Android
          </div>
        </div>

        {/* Phone Mockup Display UI */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="bg-slate-900 rounded-[35px] p-6 border-4 border-slate-700 shadow-2xl max-w-xs w-full space-y-4">

            {/* App Status Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-extrabold text-sm text-emerald-400">EVOLTEK APP</span>
              <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>● Online</span>
              </div>
            </div>

            {/* Stats Widgets */}
            <div className="space-y-3">
              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-400">Today's Usage</span>
                <span className="text-sm font-black text-white">1,284 kWh</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-400">Sessions</span>
                <span className="text-sm font-black text-white">86</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-400">Earnings</span>
                <span className="text-sm font-black text-emerald-400">₹ 42,500</span>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 space-y-2">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Station Performance</span>
                  <span className="text-emerald-400 font-bold">98.4%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[98%]" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      </section>

      {/* ================= 14. FRANCHISE OPPORTUNITY ================= */}
      <section id="franchise" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Franchise Business</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Build Your Own EV Charging Business With Evoltek
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive business model with shared investment, operational support, and multi-stream revenue potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">🤝 50% Shared Investment</h4>
            <p className="text-sm text-slate-600">Evoltek funds half the project cost.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">📈 Multiple Return Options</h4>
            <p className="text-sm text-slate-600">Choose percentage or fixed return.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">📜 Long-Term Security</h4>
            <p className="text-sm text-slate-600">5 or 10-year agreements.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">⚙️ Managed Operations</h4>
            <p className="text-sm text-slate-600">Evoltek handles technical operations and maintenance.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">⚡ Fast DC Charging</h4>
            <p className="text-sm text-slate-600">Highway and city charging solutions.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">🍽️ Additional Income</h4>
            <p className="text-sm text-slate-600">Add cafeteria, restaurant or gaming facilities.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">🏞️ Landowner Opportunity</h4>
            <p className="text-sm text-slate-600">Provide land and earn rent.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">🚀 Quick Launch</h4>
            <p className="text-sm text-slate-600">Station setup in about 2 months.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-slate-900 text-base">📱 Full Visibility</h4>
            <p className="text-sm text-slate-600">Monitor performance through the mobile app.</p>
          </div>

        </div>
      </section>

      {/* ================= 15. LANDOWNER CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-[30px] my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300">Property Partnership</span>
          <h2 className="text-2xl sm:text-4xl font-black">
            Have Land? Turn It Into an EV Opportunity.
          </h2>
          <p className="text-slate-200 text-sm sm:text-base">
            Provide the space. Evoltek builds and operates the charging station.
          </p>
        </div>

        <button
          onClick={() => openModalWithOption('Landowner Partnership')}
          className="shrink-0 bg-white text-emerald-950 font-bold px-8 py-4 rounded-[15px] shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Partner With Evoltek</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* ================= 16. FINAL CTA ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Invest in the Future of Mobility?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Join Evoltek and become part of the next generation of EV charging infrastructure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModalWithOption('Invest With Evoltek')}
            className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base px-8 py-4 rounded-[15px] shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            <span>Invest With Evoltek</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-4 rounded-[15px] shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Talk to Our Team</span>
          </a>
        </div>
      </section>

      {/* ================= 17. CONTACT SECTION ================= */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[30px] p-8 sm:p-14 border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
              <Mail className="w-3.5 h-3.5 text-emerald-700" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Let's Power the Future Together
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach out to discuss co-investment models, franchise setups, land partnerships, or general enquiries.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Email Us Direct</p>
                <a href="mailto:evoltekchargeindia@gmail.com" className="text-slate-900 font-bold text-base hover:text-emerald-800 transition-colors">
                  evoltekchargeindia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          {contactSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
              <p className="text-sm text-slate-600">
                Thank you for reaching out. Our Evoltek team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">City / Location</label>
                  <input
                    type="text"
                    required
                    placeholder="Mumbai / NH-44 Corridor"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase">I am interested in:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {['Investment', 'Franchise', 'Charging Station', 'Land Partnership'].map((type) => (
                    <label key={type} className={`p-3 rounded-2xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center text-center ${contactForm.interest === type ? 'bg-emerald-800 text-white border-emerald-800 shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'}`}>
                      <input
                        type="radio"
                        name="interest"
                        value={type}
                        checked={contactForm.interest === type}
                        onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                        className="sr-only"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your location, investment preferences, or questions..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
              >
                Submit Enquiry
              </button>

            </form>
          )}
        </div>

      </div>
      </section>

      {/* ================= 18. FOOTER ================= */}
      <footer className="bg-slate-950 text-white rounded-[30px] mt-12 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="space-y-4">
            <img src="/logo.png" alt="Evoltek Logo" className="h-16 w-auto object-contain brightness-200 invert" />
            <p className="text-slate-400 text-sm font-medium">Powering Every Journey.</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Building a convenient, reliable and scalable EV charging network across cities and highway destinations.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#charging-stations" className="hover:text-emerald-400 transition-colors">Charging Stations</a></li>
              <li><a href="#investment" className="hover:text-emerald-400 transition-colors">Investment</a></li>
              <li><a href="#franchise" className="hover:text-emerald-400 transition-colors">Franchise</a></li>
              <li><a href="#roi-calculator" className="hover:text-emerald-400 transition-colors">ROI Calculator</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Business</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#investment" className="hover:text-emerald-400 transition-colors">Become an Investor</a></li>
              <li><a href="#franchise" className="hover:text-emerald-400 transition-colors">Franchise Opportunity</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Landowner Partnership</a></li>
              <li><a href="#charging-stations" className="hover:text-emerald-400 transition-colors">EV Hub Destinations</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Contact & Support</h4>
            <p className="text-xs text-slate-400">Email:</p>
            <a href="mailto:evoltekchargeindia@gmail.com" className="text-sm font-bold text-emerald-400 block hover:underline">
              evoltekchargeindia@gmail.com
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2026 Evoltek. All Rights Reserved.
        </div>
      </footer>

      {/* ================= ENQUIRY / PARTNER MODAL ================= */}
  {
    partnerModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">

          <button
            onClick={() => setPartnerModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Partner With Evoltek</span>
              <h3 className="text-2xl font-black text-slate-900">{modalOption}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details to discuss our 50/50 investment model or franchise setups.
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert(`Thank you! Your enquiry for "${modalOption}" has been registered.`); setPartnerModalOpen(false); }} className="space-y-4 pt-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Submit Partner Enquiry
              </button>
            </form>

          </div>
        </div>
      </div>
    )
  }

    </div>
  );
}
