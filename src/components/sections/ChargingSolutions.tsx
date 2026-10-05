import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ChargingSolutionsProps {
  openModalWithOption: (option: string) => void;
}

interface StationType {
  id: string;
  title: string;
  badge: string;
  image: string;
  fallbackImage: string;
  space: string;
  power: string;
  charger: string;
  bestFor: string;
  description: string;
  highlights: string[];
}

const STATIONS: StationType[] = [
  {
    id: 'city-charging',
    title: 'City Charging Station',
    badge: 'Commercial & Urban',
    image: '/city_charging_card.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?auto=format&fit=crop&w=1200&q=80',
    space: '2,000 sq. ft.',
    power: '60 / 120 / 180 / 240 / 360 / 480 kW',
    charger: 'DC Fast Charging',
    bestFor: 'Daily city EV users',
    description: 'Tailored for high-footfall urban destinations, shopping complexes, corporate hubs, and hospitality properties to monetize parking spaces.',
    highlights: [
      'High driver footfall attraction',
      'OCPP 1.6J open protocol compatibility',
      'Integrated digital payment gateway & QR',
      '24/7 Remote diagnostics & automated uptime'
    ]
  },
  {
    id: 'highway-charging',
    title: 'Highway Charging Station',
    badge: 'Express Corridor',
    image: '/highway_charging_card.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1558441719-aa34edd57e24?auto=format&fit=crop&w=1200&q=80',
    space: '1 Acre',
    power: '60 / 120 / 180 / 240 / 360 / 480 kW',
    charger: 'DC Fast Charging',
    bestFor: 'Long-distance travellers & highway traffic',
    description: 'Engineered for high-volume highway expressways and transit corridors with ultra-fast charging speeds (10 to 80% charge in 20 minutes).',
    highlights: [
      'Liquid-cooled high amp charging cables',
      'Solar canopy integration ready',
      'Driver rest lounge & cafe amenities',
      'Dual & quad gun simultaneous power distribution'
    ]
  }
];

export const ChargingSolutions: React.FC<ChargingSolutionsProps> = ({ openModalWithOption }) => {
  return (
    <section id="charging-stations" className="w-full bg-[#eef7e3] text-slate-900 py-20 sm:py-24 lg:py-28 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#32aa15]/5 blur-[140px] pointer-events-none rounded-full" />

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

        {/* Station Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {STATIONS.map((station) => (
            <div
              key={station.id}
              onClick={() => openModalWithOption('Charging Station')}
              className="group relative overflow-hidden rounded-[32px] bg-slate-900 transition-all duration-500 shadow-2xl hover:shadow-[#32aa15]/25 flex flex-col justify-end p-4 sm:p-6 cursor-pointer border border-white/10 min-h-[520px]"
            >
              {/* Background Station Image */}
              <img
                src={station.image}
                alt={station.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = station.fallbackImage;
                }}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              />

              {/* Gradient Darkness Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20 z-10" />

              {/* Floating Dark Card Panel Overlay (Matches Morning Screenshot) */}
              <div className="relative z-20 w-full bg-[#0D1424]/90 backdrop-blur-xl border border-white/15 rounded-[28px] p-6 sm:p-7 shadow-2xl space-y-4 group-hover:border-[#32aa15]/50 transition-colors duration-300">

                {/* Subtle Ambient Green Corner Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#32aa15]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top Row: Title + Green Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight max-w-[80%] font-['Wix_Madefor_Display',sans-serif]">
                    {station.title}
                  </h3>
                  <div className="shrink-0 text-[#32aa15] p-1.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                    <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.8]" />
                  </div>
                </div>

                {/* Horizontal Divider Line */}
                <div className="h-px w-full bg-white/10" />

                {/* Specs 2x2 Grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-1">
                  {/* MINIMUM SPACE */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      MINIMUM SPACE
                    </span>
                    <span className="text-white font-extrabold text-sm sm:text-base block">
                      {station.space}
                    </span>
                  </div>

                  {/* POWER */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      POWER
                    </span>
                    <span className="text-[#32aa15] font-extrabold text-sm sm:text-base block leading-tight">
                      {station.power}
                    </span>
                  </div>

                  {/* CHARGER */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      CHARGER
                    </span>
                    <span className="text-white font-extrabold text-sm sm:text-base block">
                      {station.charger}
                    </span>
                  </div>

                  {/* BEST FOR */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      BEST FOR
                    </span>
                    <span className="text-white font-extrabold text-sm sm:text-base block leading-snug">
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
