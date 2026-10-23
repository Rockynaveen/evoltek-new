import React, { useState } from 'react';
import { Zap, BatteryCharging, Clock, ShieldCheck, Wifi, Coffee, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChargingStationsPageProps {
  openModalWithOption: (option: string) => void;
}

export const ChargingStationsPage: React.FC<ChargingStationsPageProps> = ({ openModalWithOption }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'highway' | 'city' | 'destination'>('all');

  const CHARGER_MODELS = [
    {
      category: 'highway',
      title: 'Hyper-Hub 480kW Ultra DC Fast Charger',
      tag: 'Flagship Highway Tech',
      power: '480 kW',
      time: '12 - 18 Mins (10% to 80%)',
      connectors: 'Dual CCS2 (Liquid Cooled)',
      voltage: '200V - 1000V DC',
      idealFor: 'National Expressways, High-Density Corridors & Fleet Hubs',
      image: '/ai_charging_hub.jpg',
      features: ['Liquid-cooled ultra-light cabling', 'Dynamic load allocation', 'Touchscreen display & POS terminal', 'Over-the-air firmware updates']
    },
    {
      category: 'highway',
      title: 'Rapid-Charge 240kW Modular DC Station',
      tag: 'Expressway Standard',
      power: '240 kW',
      time: '20 - 25 Mins',
      connectors: 'Dual Gun CCS2 + Optional GB/T',
      voltage: '150V - 1000V DC',
      idealFor: 'Highway Toll plazas, Rest stops & Fuel Retail stations',
      image: '/charging station 1.png',
      features: ['Simultaneous dual EV charging', 'Automated power sharing', 'High ambient temperature rating 50°C', 'Smart app authentication']
    },
    {
      category: 'city',
      title: 'UrbanCore 60kW / 120kW City Fast Charger',
      tag: 'Metro & Commercial',
      power: '60kW - 120kW',
      time: '35 - 45 Mins',
      connectors: 'Dual CCS2 Gun',
      voltage: '150V - 750V DC',
      idealFor: 'Commercial complexes, Malls, Tech parks & Metro hubs',
      image: '/city chareger.png',
      features: ['Compact footprint design', 'Quiet air cooling system', 'RFID card reader & QR code pay', 'Anti-theft connector locks']
    },
    {
      category: 'destination',
      title: 'DestinaPro 22kW Smart AC Charger',
      tag: 'Overnight & Leisure',
      power: '22 kW (3-Phase)',
      time: '3 - 5 Hours (Full Charge)',
      connectors: 'Type 2 AC Socket / Tethered Cable',
      voltage: '415V AC ±10%',
      idealFor: 'Hotels, Resorts, Golf clubs & Luxury residential societies',
      image: '/highway charger.png',
      features: ['Sleek architectural aesthetic', 'Solar integration compatible', 'Guest billing & revenue management', 'Low operating & maintenance cost']
    }
  ];

  const filteredChargers = activeTab === 'all' 
    ? CHARGER_MODELS 
    : CHARGER_MODELS.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. HERO WITH AI CHARGING HUB VISUAL */}
      <section className="relative bg-[#0b101b] text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#32aa15] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#32aa15]">Charging Stations &amp; Hardware</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs font-extrabold tracking-widest uppercase">
                <BatteryCharging className="w-4 h-4 text-[#32aa15]" />
                <span>Next-Gen EV Charging Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                Ultra-Fast <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#32aa15]">Highway &amp; Urban</span> EV Stations
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Deploying state-of-the-art DC fast charging technology from 60kW to 480kW with liquid-cooled cables, delivering rapid 15-minute turnaround times across India's premier transport corridors.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openModalWithOption('Set Up a Charging Station')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#32aa15] to-[#288c10] hover:from-[#39bd18] hover:to-[#2e9f13] text-white font-bold text-sm shadow-[0_10px_25px_rgba(50,170,21,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Station Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/franchise"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                >
                  View Franchise Models
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">15 Min</p>
                  <p className="text-xs text-slate-400 mt-1">Average 80% Charge</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#4ade80] font-['Wix_Madefor_Display',sans-serif]">1000 V</p>
                  <p className="text-xs text-slate-400 mt-1">Wide Voltage Range</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">OCPP 2.0</p>
                  <p className="text-xs text-slate-400 mt-1">Smart Protocol Ready</p>
                </div>
              </div>
            </div>

            {/* AI Image Banner */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/ai_charging_hub.jpg"
                  alt="Ultra Fast Highway EV Charging Hub with Multiple Electric Vehicles"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Hyper-Charge Expressway Plaza</p>
                    <p className="text-xs text-slate-300">480kW &amp; 360kW Liquid-Cooled Dispensers</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#32aa15]/20 text-[#4ade80] text-xs font-bold border border-[#32aa15]/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Live Active Station
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HARDWARE PORTFOLIO TABS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">ENGINEERED FOR POWER</h4>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                Complete Charging Hardware Spectrum
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
                Certified, heavy-duty chargers designed for India’s climate, high grid fluctuations, and commercial longevity.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-2xl shrink-0 self-start md:self-auto">
              {[
                { id: 'all', label: 'All Chargers' },
                { id: 'highway', label: 'Highway DC (120-480kW)' },
                { id: 'city', label: 'City DC (60kW)' },
                { id: 'destination', label: 'Destination AC (22kW)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredChargers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#32aa15]/10 text-[#32aa15] text-xs font-extrabold tracking-wider uppercase border border-[#32aa15]/30">
                      {item.tag}
                    </span>
                    <span className="text-2xl font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                      {item.power}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium">
                    {item.idealFor}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs sm:text-sm">
                    <div>
                      <p className="text-slate-400 font-medium">Charging Time</p>
                      <p className="text-slate-900 font-bold mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#32aa15]" />
                        {item.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Connectors</p>
                      <p className="text-slate-900 font-bold mt-0.5 truncate">{item.connectors}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 mt-auto">
                  <button
                    onClick={() => openModalWithOption(`Station: ${item.title}`)}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Request Technical Specs &amp; Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIGHWAY DESTINATION AMENITIES (WHY DRIVERS LOVE EVOLTEK) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">COMPLETE TRAVELER EXPERIENCE</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              More Than a Charger: A Highway Oasis
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              While your vehicle charges at hyper-speed, relax in climate-controlled lounge pods with high-speed WiFi, cafes, and clean hygiene facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon: <Coffee className="w-6 h-6 text-[#32aa15]" />, title: 'Café & Dining', desc: 'Gourmet coffee & healthy meals' },
              { icon: <Wifi className="w-6 h-6 text-blue-600" />, title: 'High-Speed WiFi', desc: 'Work remotely on the go' },
              { icon: <ShieldCheck className="w-6 h-6 text-purple-600" />, title: '24/7 Security', desc: 'CCTV & well-lit security' },
              { icon: <Zap className="w-6 h-6 text-amber-500" />, title: 'Green Solar Roof', desc: 'Renewable power microgrid' },
              { icon: <BatteryCharging className="w-6 h-6 text-emerald-600" />, title: 'Smart App Pay', desc: 'Seamless QR & RFID tap' },
              { icon: <Sparkles className="w-6 h-6 text-teal-600" />, title: 'Clean Restrooms', desc: 'Sanitized baby care & washrooms' }
            ].map((amenity, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 mx-auto flex items-center justify-center mb-3 shadow-sm">
                  {amenity.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{amenity.title}</h4>
                <p className="text-[11px] text-slate-500">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-16 bg-[#121722] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Wix_Madefor_Display',sans-serif]">
              Want to install an Evoltek Charging Station on your property?
            </h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl">
              Turn your commercial real estate, highway frontage, or parking facility into an income-generating EV destination with our 50/50 joint model.
            </p>
          </div>
          <button
            onClick={() => openModalWithOption('Landowner Site Feasibility')}
            className="px-8 py-4 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all shrink-0 cursor-pointer"
          >
            Check Site Feasibility
          </button>
        </div>
      </section>

    </div>
  );
};
