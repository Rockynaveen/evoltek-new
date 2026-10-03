import { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Play,
  Sparkles,
  Zap,
  Navigation,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Building2,
  Mail,
  Clock,
  DollarSign,
  PieChart,
  Shield,
  Layers,
  Award,
  PhoneCall,
  Check
} from 'lucide-react';

// EV Charging Station Amenities Dataset for Hero Showcase Ticker
const AMENITY_DATA = [
  {
    id: 'fast-charging',
    title: 'Fast Charging Hubs',
    category: '⚡ Ultra-Fast Power',
    icon3d: '/icon_3d_charging.jpg',
    badgeText: 'Up to 360 kW DC',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
    description: 'Liquid-cooled DC ultra-fast chargers giving your EV up to 80% battery in just 15 minutes.',
    highlight: '100% Green Energy Powered',
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Dining',
    category: '🍽️ Gourmet Cafes',
    icon3d: '/icon_3d_restaurant.jpg',
    badgeText: '24/7 Food Courts',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    description: 'Artisanal cafes, hot gourmet meals, and quick drive-thru dining while your vehicle powers up.',
    highlight: 'Dine-in & Express Takeaway',
  },
  {
    id: 'wifi',
    title: 'High-Speed 5G Wi-Fi',
    category: '📶 Free Gigabit Zones',
    icon3d: '/icon_3d_wifi.jpg',
    badgeText: 'Ultra 5G Speed',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=600',
    description: 'Ultra-fast wireless connectivity with quiet workstation pods for seamless work on the road.',
    highlight: 'Unlimited Free Guest Access',
  },
  {
    id: 'parks',
    title: 'Parks & Relaxation',
    category: '🌳 Green Eco Spaces',
    icon3d: '/icon_3d_park.jpg',
    badgeText: 'Garden Trails & Pets',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=600',
    description: 'Landscaped garden promenades, shaded outdoor seating, and dedicated dog park areas.',
    highlight: 'Family & Pet Outdoor Trails',
  },
  {
    id: 'rooms',
    title: 'Rooms & Rest Facilities',
    category: '🛏️ Executive Suites',
    icon3d: '/icon_3d_bed.jpg',
    badgeText: 'Pods & Clean Showers',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600',
    description: 'Quiet soundproof sleep pods, luxury shower facilities, and overnight rest rooms.',
    highlight: 'Hourly & Overnight Stays',
  },
  {
    id: 'lounges',
    title: 'Comfortable Lounges',
    category: '☕ Premium AC Lounges',
    icon3d: '/icon_3d_lounge.jpg',
    badgeText: 'Barista Coffee Bar',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    description: 'Climate-controlled VIP lounges with ergonomic recliner seating and complimentary coffee.',
    highlight: '24/7 Air-Conditioned Comfort',
  },
];

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
    <div className="min-h-screen bg-slate-50 text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] p-2">

      {/* ================= HERO SECTION BLOCK (Light Green with 15px Border Radius) ================= */}
      <div id="home" className="bg-[#e5efd5] rounded-[15px] relative overflow-hidden shadow-sm border border-emerald-100/80">

        {/* Decorative ambient background glows */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-emerald-200/40 via-green-100/20 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
        <div className="absolute top-[400px] -left-40 w-96 h-96 bg-emerald-300/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-[500px] -right-40 w-96 h-96 bg-teal-300/20 blur-3xl pointer-events-none rounded-full" />

        {/* ================= 1. HEADER / NAVIGATION ================= */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#e5efd5]/95 transition-all py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

            {/* Brand Logo - Far Left */}
            <a href="#home" className="flex items-center group shrink-0 py-0.5">
              <img
                src="/logo.png"
                alt="Evoltek Logo"
                className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[240px] sm:max-w-[300px] md:max-w-[340px] object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Floating Central White Navigation Card */}
            <nav className="hidden lg:flex items-center gap-6 bg-white/95 backdrop-blur-md px-7 py-3 rounded-[15px] shadow-md shadow-slate-900/5 border border-white/80 shrink-0">
              <a href="#home" className="text-slate-900 font-semibold hover:text-emerald-800 text-sm transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                About
              </a>
              <a href="#charging-stations" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                Charging Stations
              </a>
              <a href="#investment" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                Investment
              </a>
              <a href="#franchise" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                Franchise
              </a>
              <a href="#roi-calculator" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                ROI Calculator
              </a>
              <a href="#contact" className="text-slate-600 font-medium hover:text-emerald-800 text-sm transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button
                onClick={() => openModalWithOption('Become a Partner')}
                className="relative group overflow-hidden bg-slate-900 text-white font-semibold text-sm px-6 py-3 rounded-[15px] shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-emerald-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-white/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-6 space-y-3 animate-in slide-in-from-top duration-200 mt-2 mx-4 rounded-[15px] shadow-xl">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-emerald-800">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">About</a>
              <a href="#charging-stations" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">Charging Stations</a>
              <a href="#investment" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">Investment</a>
              <a href="#franchise" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">Franchise</a>
              <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">ROI Calculator</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-700">Contact</a>
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => { setMobileMenuOpen(false); openModalWithOption('Become a Partner'); }}
                  className="w-full py-3 bg-emerald-800 text-white font-semibold text-sm rounded-[15px] flex items-center justify-center gap-2 shadow-md"
                >
                  Become a Partner
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </header>

        {/* ================= 2. HERO SECTION — "Powering Every Journey" ================= */}
        <section className="pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          {/* Top Content Block */}
          <div className="text-center max-w-4xl mx-auto space-y-6">

            {/* Hero Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1] font-['Plus_Jakarta_Sans'] whitespace-nowrap">
              Powering Every Journey
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-2xl text-emerald-950 font-bold max-w-3xl mx-auto leading-snug">
              Building a smarter, reliable and scalable EV charging network across cities, highways and destinations.
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              Fast charging, digital convenience and traveller-friendly EV hubs designed for the future of electric mobility.
            </p>

            {/* Hero CTA Buttons (Primary & Secondary) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => openModalWithOption('Invest With Evoltek')}
                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base px-8 py-4 rounded-[15px] shadow-xl shadow-emerald-800/25 hover:shadow-emerald-900/30 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95 cursor-pointer"
              >
                <Zap className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                <span>Invest With Evoltek</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#charging-stations"
                className="w-full sm:w-auto bg-white/80 hover:bg-white text-slate-900 border border-slate-300/80 hover:border-emerald-600 font-bold text-base px-8 py-4 rounded-[15px] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>Explore Charging Stations</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Hero Showcase Ticker & Central Mobile Phone Image */}
          <div className="mt-14 sm:mt-18 relative min-h-[560px] sm:min-h-[640px] flex items-center justify-center">

            {/* Full-width continuous moving cards ticker */}
            <div className="absolute left-1/2 -translate-x-1/2 w-screen top-1/2 -translate-y-1/2 overflow-hidden py-10 pointer-events-auto">

              {/* Ticker Track */}
              <div className="flex gap-6 w-max animate-marquee">
                {[...AMENITY_DATA, ...AMENITY_DATA, ...AMENITY_DATA, ...AMENITY_DATA].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-[310px] sm:w-[340px] bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group flex flex-col justify-between shrink-0 hover:-translate-y-2"
                  >
                    {/* Card Image Block */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-slate-100 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Category Tag Overlay with 3D Glossy Icon */}
                      <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
                        <img src={item.icon3d} alt="" className="w-4 h-4 object-contain rounded-full bg-white/20 p-0.5" />
                        <span>{item.category}</span>
                      </div>

                      {/* Badge Overlay */}
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-slate-800 flex items-center gap-1.5 shadow-md border border-slate-100">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.badgeText}</span>
                      </div>
                    </div>

                    {/* Card Content Text */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-black text-slate-900 text-lg group-hover:text-emerald-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2 font-normal">
                          {item.description}
                        </p>
                      </div>

                      {/* Feature Bar */}
                      <div className="p-3 rounded-2xl border border-emerald-100/90 bg-emerald-50/80 flex items-center gap-3.5 shadow-sm transition-all group-hover:shadow-md">
                        <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md border border-emerald-100 overflow-hidden group-hover:scale-110 transition-transform">
                          <img src={item.icon3d} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800/80">Station Amenity</p>
                          <p className="text-xs font-bold text-slate-900 truncate">{item.highlight}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Mobile Phone Image */}
            <div className="relative z-20 max-w-[300px] sm:max-w-[360px] md:max-w-[420px] shrink-0 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300 pointer-events-auto">
              <img
                src="/mobile%20phone%20hero%20section.png"
                alt="Mobile Phone Hero Section"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Small Statistics Bar Below Hero */}
          <div className="mt-12 pt-8 border-t border-emerald-200/60 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-800">50%</p>
              <p className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Evoltek Investment</p>
            </div>
            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-800">50%</p>
              <p className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Investor Contribution</p>
            </div>
            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-800">60–480 kW</p>
              <p className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Charging Solutions</p>
            </div>
            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-800">5–10 Years</p>
              <p className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Agreement Options</p>
            </div>
          </div>

        </section>
      </div>

      {/* ================= 3. "ABOUT US" SECTION (Matching Reference Design) ================= */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Man Charging EV Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100/80 group bg-slate-100">
              <img
                src="/about_evoltek.jpg"
                alt="EVOLTEK DC Fast Charger - Driver plugging in EV charging nozzle"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/about us.png';
                }}
                className="w-full h-[480px] sm:h-[560px] lg:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Content, Smart Charging, Energy Innovation & Video Preview */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Tagline Badge */}
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#22c55e] fill-[#22c55e]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-slate-500 font-mono">
                ABOUT US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-4xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              The Future of EV Charging Starts Here
            </h2>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Evoltek is a new-generation EV charging station concept designed to build a convenient, reliable and scalable charging network across cities and highways.
            </p>

            {/* Feature Items (Borderless, with custom green icons, increased size, no background circle) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 pt-4">

              {/* Item 1: Fast Charging */}
              <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                <div className="relative shrink-0 flex items-center justify-center [perspective:600px]">
                  <div className="group-hover-flip">
                    <svg
                      className="w-16 h-16 sm:w-18 sm:h-18 text-[#22c55e]"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="8" width="18" height="28" rx="2.5" />
                      <rect x="9" y="11" width="12" height="11" rx="1.5" />
                      <path d="M16 13.5l-3.5 4h3.5l-1.5 4 4.5-5h-3.5l1.5-3z" fill="#22c55e" stroke="none" />
                      <line x1="4" y1="36" x2="26" y2="36" strokeWidth="2.5" />
                      <path d="M24 16h2a3.5 3.5 0 0 1 3.5 3.5v7a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-6" />
                      <rect x="33" y="18" width="5.5" height="5" rx="1" />
                      <line x1="34.5" y1="14.5" x2="34.5" y2="18" strokeWidth="2" />
                      <line x1="37" y1="14.5" x2="37" y2="18" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Fast Charging
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    High-capacity DC fast chargers minimizing wait times for every driver.
                  </p>
                </div>
              </div>

              {/* Item 2: Strategic Locations */}
              <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                <div className="relative shrink-0 flex items-center justify-center [perspective:600px]">
                  <div className="group-hover-flip">
                    <svg
                      className="w-16 h-16 sm:w-18 sm:h-18 text-[#22c55e]"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 27c-4-4-9-9-9-15a13 13 0 0 1 26 0c0 6-5 11-9 15l-4 4-4-4z" />
                      <path d="M18.5 8.5l-3 4.5h3l-1.5 4.5 4.5-5.5h-3l1.5-3.5z" fill="#22c55e" stroke="none" />
                      <ellipse cx="16" cy="38" rx="8" ry="3" />
                      <path d="M26 31h8l2.5 3.5h2a1.5 1.5 0 0 1 1.5 1.5v3h-2" />
                      <circle cx="29" cy="39" r="2.2" />
                      <circle cx="38" cy="39" r="2.2" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Strategic Locations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Optimally placed along busy highways, urban centers and popular hubs.
                  </p>
                </div>
              </div>

              {/* Item 3: Smart Digital Experience */}
              <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                <div className="relative shrink-0 flex items-center justify-center [perspective:600px]">
                  <div className="group-hover-flip">
                    <svg
                      className="w-16 h-16 sm:w-18 sm:h-18 text-[#22c55e]"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="6" width="17" height="34" rx="3" />
                      <line x1="9" y1="10" x2="18" y2="10" />
                      <line x1="11" y1="36" x2="16" y2="36" />
                      <circle cx="13.5" cy="22" r="5.5" />
                      <path d="M14.5 18l-2.2 3.5h2.5l-1.5 3.5 3.2-4h-2.2l1.2-3z" fill="#22c55e" stroke="none" />
                      <path d="M25 24c1.5-2 3.5-3 7-3h5l3 3.5h2a2 2 0 0 1 2 2v6h-2" />
                      <circle cx="28" cy="33.5" r="2.5" />
                      <circle cx="40" cy="33.5" r="2.5" />
                      <path d="M22 30h4" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Smart Digital Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Seamless app navigation, real-time charger availability & contactless payments.
                  </p>
                </div>
              </div>

              {/* Item 4: Scalable Infrastructure */}
              <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                <div className="relative shrink-0 flex items-center justify-center [perspective:600px]">
                  <div className="group-hover-flip">
                    <svg
                      className="w-16 h-16 sm:w-18 sm:h-18 text-[#22c55e]"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="9" width="16" height="30" rx="3" />
                      <path d="M10 5h8v4h-8z" />
                      <line x1="10" y1="18" x2="18" y2="18" />
                      <line x1="10" y1="25" x2="18" y2="25" />
                      <line x1="10" y1="32" x2="18" y2="32" />
                      <path d="M22 17h5a3 3 0 0 1 3 3v8a3 3 0 0 0 3 3h4" />
                      <circle cx="40" cy="31" r="3.5" />
                      <path d="M37 18h6v6h-6z" />
                      <line x1="40" y1="14" x2="40" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Future-ready modular hardware designed to grow with EV adoption.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: Read More Button */}
            <div className="pt-6 border-t border-slate-100">

              {/* Read More Pill Button */}
              <a
                href="#charging-stations"
                className="inline-flex items-center gap-3 bg-[#3db83a] hover:bg-[#34a531] text-white font-bold text-sm sm:text-base pl-7 pr-3 py-3 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-600/30 transition-all duration-300 group cursor-pointer"
              >
                <span>Read More</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-slate-900 stroke-[2.5]" />
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. INVESTMENT MODEL SECTION (50/50) ================= */}
      <section id="investment" className="py-20 bg-slate-900 text-white rounded-[30px] my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
            <PieChart className="w-3.5 h-3.5 text-emerald-400" />
            <span>Co-Investment Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Invest Together. Grow Together.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Evoltek contributes 50% of the project capital and handles end-to-end station setup, maintenance, and technical operations while you share in long-term revenues.
          </p>
        </div>

        {/* Large 50/50 Visual Diagram */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Evoltek Card (50%) */}
          <div className="md:col-span-5 bg-slate-800/90 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/30 shadow-xl space-y-6 relative overflow-hidden group hover:border-emerald-500 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">Co-Partner</span>
                <h3 className="text-2xl font-black text-white">EVOLTEK</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-300 text-2xl font-black px-4 py-2 rounded-2xl border border-emerald-500/40">
                50%
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Co-invests 50% of total station capital</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sets up charging station hardware</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Manages 24/7 technical operations</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Handles routine station maintenance</li>
            </ul>
          </div>

          {/* Center Divider / Icon */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-pulse">
              +
            </div>
            <p className="text-xs font-bold uppercase text-emerald-400 tracking-wider">Combines into</p>
            <div className="px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-slate-300 border border-slate-700">
              ↓ EV CHARGING STATION
            </div>
          </div>

          {/* Investor Card (50%) */}
          <div className="md:col-span-5 bg-slate-800/90 backdrop-blur-xl p-8 rounded-3xl border border-teal-500/30 shadow-xl space-y-6 relative overflow-hidden group hover:border-teal-500 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-teal-400">Co-Partner</span>
                <h3 className="text-2xl font-black text-white">INVESTOR</h3>
              </div>
              <div className="bg-teal-500/20 text-teal-300 text-2xl font-black px-4 py-2 rounded-2xl border border-teal-500/40">
                50%
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> Co-invests remaining 50% project cost</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> Receives steady, transparent monthly returns</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> Tracks performance via Evoltek Mobile App</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" /> Holds 5 or 10-year official agreement</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openModalWithOption('Explore Investment Opportunity')}
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-[15px] shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
          >
            <span>Explore Investment Opportunity</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ================= 5. WHY INVEST WITH EVOLTEK? (6-Card Grid) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Investor Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Invest With Evoltek?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered to deliver high returns, minimal operational burden, and sustainable mobility growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 01 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 01</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Shared Investment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Invest only half the project cost while Evoltek contributes the other half.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 02</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Hassle-Free Operations</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Evoltek handles setup, operations and station maintenance.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 03</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Flexible Returns</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Choose between percentage-based or fixed-return options.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 04</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Long-Term Agreement</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              5 or 10-year agreement options with renewal availability.
            </p>
          </div>

          {/* Card 05 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 05</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Digital Transparency</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Monitor station performance through the Evoltek mobile app.
            </p>
          </div>

          {/* Card 06 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Card 06</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Scalable Network</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Build a growing EV charging network across strategic locations.
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
      <section id="charging-stations" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#edf7f2] relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase">
              <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>Station Types</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Charging Solutions Built for Every Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              High-performance hardware configurations tailored for high-volume highway corridors and busy urban centers.
            </p>
          </div>

          {/* Cards Stack */}
          <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">

            {/* Card 1: Highway Charging Station */}
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Column: Plan Title, Description, Highlight Metric, Action Button */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
                      Highway Charging Station
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                      Best for long-distance travellers & highway traffic
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">1 Acre</span>
                      <span className="text-slate-500 font-medium text-sm">/min space</span>
                    </div>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                      <span>DC Fast Charging • Up to 480 kW</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all group w-fit"
                    >
                      <span>Select Station</span>
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#22c55e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Middle Column: Specs Checklist with Vertical Divider */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/90 pt-5 lg:pt-0 lg:pl-8">
                  <ul className="space-y-3 sm:space-y-3.5">
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Minimum Space:</strong> 1 Acre
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Power:</strong> 60 / 120 / 180 / 240 / 360 / 480 kW
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Charger:</strong> DC Fast Charging
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Best For:</strong> Long-distance travellers & highway traffic
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Amenities:</strong> Restrooms & driver lounge ready
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Stylized Image with Diagonal Chamfer */}
                <div className="lg:col-span-4 flex items-center justify-center">
                  <div
                    className="relative w-full h-52 sm:h-60 rounded-3xl overflow-hidden bg-slate-900 shadow-md group"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 0 100%)'
                    }}
                  >
                    <img
                      src="/highway_charging_card.jpg"
                      alt="Highway Charging Station"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-bold flex items-center gap-1.5 drop-shadow">
                        <Navigation className="w-3.5 h-3.5 text-emerald-400" /> Highway Corridor
                      </span>
                      <span className="text-[11px] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 font-semibold">
                        60–480 kW
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: City Charging Station */}
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Column: Plan Title, Description, Highlight Metric, Action Button */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight">
                      City Charging Station
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                      Best for daily city EV users
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">2,000</span>
                      <span className="text-slate-500 font-medium text-sm">sq. ft. /min space</span>
                    </div>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                      <span>DC Fast Charging • Up to 480 kW</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all group w-fit"
                    >
                      <span>Select Station</span>
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#22c55e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Middle Column: Specs Checklist with Vertical Divider */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/90 pt-5 lg:pt-0 lg:pl-8">
                  <ul className="space-y-3 sm:space-y-3.5">
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Minimum Space:</strong> 2,000 sq. ft.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Power:</strong> 60 / 120 / 180 / 240 / 360 / 480 kW
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Charger:</strong> DC Fast Charging
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Best For:</strong> Daily city EV users
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        <strong className="font-semibold text-slate-900">Access:</strong> Mobile app reservation & contactless pay
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Stylized Image with Diagonal Chamfer */}
                <div className="lg:col-span-4 flex items-center justify-center">
                  <div
                    className="relative w-full h-52 sm:h-60 rounded-3xl overflow-hidden bg-slate-900 shadow-md group"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 0 100%)'
                    }}
                  >
                    <img
                      src="/city_charging_card.jpg"
                      alt="City Charging Station"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-bold flex items-center gap-1.5 drop-shadow">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" /> Urban Hub
                      </span>
                      <span className="text-[11px] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 font-semibold">
                        60–480 kW
                      </span>
                    </div>
                  </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Simple Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial booking to live station monitoring in 4 transparent steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* STEP 01 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md relative space-y-4">
            <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Step 01</span>
            <h3 className="text-xl font-bold text-slate-900">BOOK</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pay a ₹25,000 booking advance and receive an official receipt.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md relative space-y-4">
            <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Step 02</span>
            <h3 className="text-xl font-bold text-slate-900">AGREE</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sign the formal 5 or 10-year co-investment agreement.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md relative space-y-4">
            <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Step 03</span>
            <h3 className="text-xl font-bold text-slate-900">LAUNCH</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your EV station is fully set up & commissioned in about 2 months.
            </p>
          </div>

          {/* STEP 04 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md relative space-y-4">
            <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Step 04</span>
            <h3 className="text-xl font-bold text-slate-900">TRACK</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Monitor live performance and revenue through the Evoltek mobile app.
            </p>
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
      {partnerModalOpen && (
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
      )}

    </div>
  );
}
