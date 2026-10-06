import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Driver Charging EV Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <img
                src="/about_evoltek.jpg"
                alt="Evoltek DC Fast Charger - Driver plugging in electric vehicle"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/about us.png';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content & 4 Features */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-2 sm:space-y-3 text-left">

            {/* Tagline Badge */}
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#32aa15] font-sans">
                ABOUT EVOLTEK
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold text-[#1C2029] tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif] uppercase">
              The Future of EV Charging Starts Here
            </h2>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-snug font-normal max-w-2xl">
              Evoltek is a new-generation EV charging station concept designed to build a convenient, reliable and scalable charging network across cities and highways.
            </p>

            {/* 4 Feature Items with Background Circle & Cursor 3D Flip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-7 pt-2">

              {/* Item 1: Fast Charging */}
              <div className="flex items-start gap-4 sm:gap-4.5 group cursor-pointer">
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center [perspective:800px]">
                  <div className="absolute right-0 bottom-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                    <svg className="w-13 h-13 sm:w-15 sm:h-15 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="41" width="22" height="3" rx="1.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                      <rect x="10" y="8" width="18" height="33" rx="2.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                      <rect x="13" y="11" width="12" height="9" rx="1" strokeWidth="2" />
                      <line x1="10" y1="23.5" x2="28" y2="23.5" strokeWidth="2" />
                      <circle cx="12.5" cy="26" r="0.8" fill="currentColor" />
                      <circle cx="25.5" cy="26" r="0.8" fill="currentColor" />
                      <circle cx="12.5" cy="37" r="0.8" fill="currentColor" />
                      <circle cx="25.5" cy="37" r="0.8" fill="currentColor" />
                      <path d="M20.5 26 L17 32 L21 32 L17.5 38" strokeWidth="2.2" strokeLinejoin="miter" />
                      <path d="M28 27 L31 27 C34 27 35.5 29 35.5 33 L35.5 37 C35.5 41 34 43 32 43 C30 43 29 41 29 37 L29 28" strokeWidth="2.3" />
                      <path d="M27 22 L31 22 C32.5 22 33.5 23 33.5 24.5 L33.5 27 C33.5 28.5 32.5 29.5 31 29.5 L27 29.5 C25.5 29.5 24.5 28.5 24.5 27 L24.5 24.5 C24.5 23 25.5 22 27 22 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                      <line x1="27.5" y1="22" x2="27.5" y2="17" strokeWidth="2.3" />
                      <line x1="30.5" y1="22" x2="30.5" y2="17" strokeWidth="2.3" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1 pt-0.5">
                  <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                    Fast Charging
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-snug font-normal">
                    High-capacity DC fast chargers minimizing wait times for every driver.
                  </p>
                </div>
              </div>

              {/* Item 2: Strategic Locations */}
              <div className="flex items-start gap-4 sm:gap-4.5 group cursor-pointer">
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center [perspective:800px]">
                  <div className="absolute right-0 bottom-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                    <svg className="w-13 h-13 sm:w-15 sm:h-15 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 6 C15.5 6 10 11.5 10 18 C10 27 22 37 22 37 C22 37 34 27 34 18 C34 11.5 28.5 6 22 6 Z" fill="white" stroke="currentColor" strokeWidth="2.3" />
                      <path d="M23 11 L19 17 L24 17 L21 23" strokeWidth="2" strokeLinejoin="miter" />
                      <ellipse cx="22" cy="42" rx="10" ry="3.2" strokeWidth="2.1" />
                      <circle cx="36" cy="42" r="3" strokeWidth="2.1" />
                      <line x1="32" y1="42" x2="33" y2="42" strokeWidth="2.1" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1 pt-0.5">
                  <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                    Strategic Locations
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-snug font-normal">
                    Optimally placed along busy highways, urban centers and popular hubs.
                  </p>
                </div>
              </div>

              {/* Item 3: Smart Digital Experience */}
              <div className="flex items-start gap-4 sm:gap-4.5 group cursor-pointer">
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center [perspective:800px]">
                  <div className="absolute right-0 bottom-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                    <svg className="w-13 h-13 sm:w-15 sm:h-15 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M28 19 L35 19 C38 19 39.5 20.5 40.5 22.5 L43 25" />
                      <path d="M40 22 C41.5 22 42.5 23 42.5 24 C42.5 25 41.5 26 40 26" />
                      <rect x="38" y="27" width="4.5" height="2.5" rx="1" />
                      <path d="M28 29 L41 29 C42.5 29 43.5 30 43.5 31.5 L43.5 33 C43.5 34.5 42.5 35.5 41 35.5 L28 35.5" />
                      <line x1="30" y1="32.5" x2="38" y2="32.5" />
                      <rect x="37" y="35.5" width="5" height="5" rx="1.5" />
                      <rect x="8" y="8" width="20" height="36" rx="4" fill="white" stroke="currentColor" strokeWidth="2.3" />
                      <path d="M13 11 L16 11 L17 13 L19 13 L20 11 L23 11" strokeWidth="1.8" />
                      <circle cx="18" cy="25" r="6" strokeWidth="2.1" />
                      <path d="M19 20 L16.5 25 L19.5 25 L17 30" strokeWidth="2" strokeLinejoin="miter" />
                      <line x1="14" y1="39" x2="22" y2="39" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1 pt-0.5">
                  <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                    Smart Digital Experience
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-snug font-normal">
                    Seamless app navigation, real-time availability & contactless payments.
                  </p>
                </div>
              </div>

              {/* Item 4: Scalable Infrastructure */}
              <div className="flex items-start gap-4 sm:gap-4.5 group cursor-pointer">
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center [perspective:800px]">
                  <div className="absolute right-0 bottom-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                    <svg className="w-13 h-13 sm:w-15 sm:h-15 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.5 9 C13.5 7.5 14.5 7 16 7 L18 7 C19.5 7 20.5 7.5 20.5 9" strokeWidth="2.1" />
                      <rect x="9" y="9" width="18" height="32" rx="3.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                      <path d="M19 18 L15.5 24 L20.5 24 L17 30" strokeWidth="2" strokeLinejoin="miter" />
                      <path d="M27 25 L30 25 C33 25 34 27 34 31 L34 36 C34 40 32.5 42 30.5 42 C28.5 42 27.5 40 27.5 36 L27.5 28" strokeWidth="2.3" />
                      <path d="M25.5 22 L29.5 22 C31 22 32 23 32 24.5 L32 27 C32 28.5 31 29.5 29.5 29.5 L25.5 29.5 C24 29.5 23 28.5 23 27 L23 24.5 C23 23 24 22 25.5 22 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                      <line x1="26" y1="22" x2="26" y2="17.5" strokeWidth="2.3" />
                      <line x1="29" y1="22" x2="29" y2="17.5" strokeWidth="2.3" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1 pt-0.5">
                  <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                    Scalable Infrastructure
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-snug font-normal">
                    Future-ready modular hardware designed to grow with EV adoption.
                  </p>
                </div>
              </div>

            </div>

            {/* Read More Green Pill Button */}
            <div className="pt-2">
              <a
                href="#charging-stations"
                className="inline-flex items-center gap-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base pl-7 pr-2.5 py-2.5 rounded-full shadow-lg shadow-[#32aa15]/25 hover:shadow-xl hover:shadow-[#32aa15]/30 transition-all duration-300 group cursor-pointer active:scale-95"
              >
                <span>Read More</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#32aa15] shadow-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#32aa15] stroke-[2.8]" />
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

