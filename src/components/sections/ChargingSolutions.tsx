import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface ChargingSolutionsProps {
  openModalWithOption: (option: string) => void;
}

interface StationType {
  id: string;
  title: string;
  image: string;
  fallbackImage: string;
  space: string;
  power: string;
  charger: string;
  bestFor: string;
}

const STATIONS: StationType[] = [
  {
    id: 'city-charging',
    title: 'City Charging Station',
    image: '/city_charging_card.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?auto=format&fit=crop&w=1200&q=80',
    space: '2,000 sq. ft.',
    power: '60 / 120 / 180 / 240 / 360 / 480 kW',
    charger: 'DC Fast Charging',
    bestFor: 'Daily city EV users'
  },
  {
    id: 'highway-charging',
    title: 'Highway Charging Station',
    image: '/highway_charging_card.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1558441719-aa34edd57e24?auto=format&fit=crop&w=1200&q=80',
    space: '1 Acre',
    power: '60 / 120 / 180 / 240 / 360 / 480 kW',
    charger: 'DC Fast Charging',
    bestFor: 'Long-distance travellers & highway traffic'
  }
];

export const ChargingSolutions: React.FC<ChargingSolutionsProps> = ({ openModalWithOption }) => {
  return (
    <section id="charging-stations" className="w-full bg-white text-slate-900 py-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#32aa15]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>STATION CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#1C2029] tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
            Charging Solutions Built for Every Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            High-performance EV charging hardware configurations tailored for home setups, commercial complexes, highway corridors, and fleet depots.
          </p>
        </div>

        {/* Station Cards Grid - 50-50 Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {STATIONS.map((station) => (
            <div
              key={station.id}
              onClick={() => openModalWithOption('Charging Station')}
              className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px] rounded-tl-[6px] bg-slate-900 shadow-2xl hover:shadow-[0_20px_50px_rgba(50,170,21,0.3)] transition-all duration-500 min-h-[460px] sm:min-h-[520px] flex flex-col justify-end cursor-pointer border border-white/10"
            >
              {/* Background Station Image */}
              <img
                src={station.image}
                alt={station.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = station.fallbackImage;
                }}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out z-0"
              />

              {/* Gradient Darkness Overlay for Image Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

              {/* DEFAULT VISIBLE TITLE & ARROW (Smoothly hides when hovered/tapped) */}
              <div className="flex relative z-20 p-6 sm:p-8 items-center justify-between gap-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500 ease-out">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                  {station.title}
                </h3>
                <div className="text-[#32aa15] shrink-0 drop-shadow-md">
                  <ArrowDownRight className="w-7 h-7 stroke-[2.8]" />
                </div>
              </div>

              {/* SPECS OVERLAY CARD (Reveals on hover/tap) */}
              <div className="absolute inset-x-3.5 sm:inset-x-6 bottom-3.5 sm:bottom-6 z-30 bg-[#0b0f19]/95 backdrop-blur-md border border-[#32aa15]/50 rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-7 shadow-2xl space-y-3 sm:space-y-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">

                {/* Subtle Ambient Green Corner Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#32aa15]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Top Row: Title + Green Arrow */}
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight max-w-[82%] font-['Wix_Madefor_Display',sans-serif]">
                    {station.title}
                  </h3>
                  <div className="shrink-0 text-[#32aa15] p-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.8]" />
                  </div>
                </div>

                {/* Horizontal Divider Line */}
                <div className="h-px w-full bg-slate-800 relative z-10" />

                {/* Specs 2x2 Grid */}
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 pt-0.5 sm:pt-1 relative z-10">
                  {/* MINIMUM SPACE */}
                  <div>
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 sm:mb-1">
                      MINIMUM SPACE
                    </span>
                    <span className="text-white font-extrabold text-xs sm:text-base block">
                      {station.space}
                    </span>
                  </div>

                  {/* POWER */}
                  <div>
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 sm:mb-1">
                      POWER
                    </span>
                    <span className="text-[#32aa15] font-extrabold text-xs sm:text-base block leading-tight">
                      {station.power}
                    </span>
                  </div>

                  {/* CHARGER */}
                  <div>
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 sm:mb-1">
                      CHARGER
                    </span>
                    <span className="text-white font-extrabold text-xs sm:text-base block">
                      {station.charger}
                    </span>
                  </div>

                  {/* BEST FOR */}
                  <div>
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 sm:mb-1">
                      BEST FOR
                    </span>
                    <span className="text-white font-extrabold text-xs sm:text-base block leading-snug">
                      {station.bestFor}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
