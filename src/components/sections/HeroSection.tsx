import React from 'react';
import { HERO_SLIDES } from '../../data/siteData';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  isScrolled?: boolean;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
  currentHeroSlide: number;
  setCurrentHeroSlide?: React.Dispatch<React.SetStateAction<number>>;
  openModalWithOption: (option: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentHeroSlide,
  openModalWithOption
}) => {
  return (
    <div className="h-[calc(100vh-68px)] sm:h-[calc(100vh-76px)] min-h-[560px] flex flex-col justify-between p-0 m-0 bg-white">
      {/* HERO SECTION BLOCK */}
      <div id="home" className="flex-1 min-h-0 w-full relative flex flex-col justify-between rounded-none overflow-hidden bg-[#171E23] text-white shadow-xl">

        {/* HERO BODY AREA */}
        <div className="relative flex-1 flex items-end overflow-hidden">
          {/* Background Images Carousel (Auto-scrolls every 5s) */}
          {HERO_SLIDES.map((imgUrl, index) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Evoltek EV Charging Station Hero Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-all duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
            />
          ))}

          {/* Left Side Dark Card Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171E23] via-[#171E23]/95 md:via-[#171E23]/85 to-transparent md:w-[72%] lg:w-[65%] z-10" />

          {/* Content Box */}
          <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12 w-full">
            <div className="max-w-3xl lg:max-w-5xl space-y-4 sm:space-y-6">

              {/* Welcome Tag */}
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-sm sm:text-base font-bold uppercase tracking-[0.2em]">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>WELCOME TO EVOLTEK</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[0.95] sm:leading-[0.98] lg:leading-[1.0] tracking-tight font-['Plus_Jakarta_Sans'] group">
                Powering Every <br />
                <span className="text-[#32aa15] group-hover:text-white transition-colors duration-300">
                  Journey.
                </span>
              </h1>

              {/* Subtitle / Description Paragraph with Note Callout */}
              <div className="space-y-3 max-w-2xl">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  Building a smarter, reliable and scalable EV charging network across cities, highways and destinations.
                </p>

                {/* Note Callout */}
                <div className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                  <Sparkles className="w-5 h-5 text-[#32aa15] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-white"></strong> Fast charging, digital convenience and traveller-friendly EV hubs designed for the future of electric mobility.
                  </span>
                </div>
              </div>

              {/* Action Button Row */}
              <div className="pt-3 flex flex-row items-center gap-4 sm:gap-5 flex-wrap sm:flex-nowrap">
                {/* Button 1: Green Pill (Find a Charger) */}
                <a
                  href="#charging-stations"
                  className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-base py-2.5 sm:py-3 pl-6 sm:pl-7 pr-2.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-xl shadow-[#32aa15]/30 hover:shadow-none transition-all duration-300 group cursor-pointer active:scale-95 shrink-0"
                >
                  <span className="whitespace-nowrap">Invest With Evoltek</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#32aa15] group-hover:bg-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                {/* Button 2: Pure White Pill (Get Started) -> Transparent Green Outline on Hover */}
                <button
                  onClick={() => openModalWithOption('Become a Partner')}
                  className="border-2 border-white hover:border-[#32aa15] bg-white hover:bg-transparent text-[#0F172A] hover:text-[#32aa15] font-bold text-base py-2.5 sm:py-3 pl-6 sm:pl-7 pr-2.5 rounded-full flex items-center gap-3 sm:gap-4 shadow-xl hover:shadow-none transition-all duration-300 group cursor-pointer active:scale-95 shrink-0"
                >
                  <span className="whitespace-nowrap">Explore Charging Network</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#32aa15] text-white group-hover:bg-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </div>

            </div>
          </div>

          {/* Right Side Bottom Layer Widget (Fast Charging 80% in 30 mins) */}
          <div className="hidden md:block absolute bottom-6 sm:bottom-8 right-6 sm:right-10 xl:right-14 z-20">
            <div className="relative group">
              {/* Ambient Glow behind Widget */}
              <div className="absolute -inset-2 bg-[#38c838]/40 blur-xl rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bright Green Compact Solid Card Container */}
              <div className="relative z-10 bg-[#38c838] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl w-44 sm:w-48 md:w-52 flex flex-col items-center justify-between text-center space-y-2 border border-white/25 group-hover:scale-105 transition-transform duration-300">

                {/* Top Text Content */}
                <div className="space-y-0.5">
                  <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide block">
                    Fast Charging
                  </span>
                  <h3 className="text-white text-base sm:text-lg font-extrabold tracking-tight leading-tight">
                    Up to 80% in 30 mins
                  </h3>
                </div>

                {/* Battery Dial Graphic Image */}
                <div className="pt-0.5 w-full flex justify-center">
                  <img
                    src="/hero section right layer.png"
                    alt="Fast Charging Battery Graphic"
                    className="w-28 sm:w-32 h-auto object-contain drop-shadow-sm"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
