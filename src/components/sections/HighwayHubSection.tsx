import React from 'react';
import { Utensils, Wifi, Trees, Bed, Coffee } from 'lucide-react';

const AMENITIES = [
  {
    id: 'charging',
    title: 'Fast Charging',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white fill-current" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    id: 'restaurant',
    title: 'Restaurants',
    icon: <Utensils className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: <Wifi className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
  },
  {
    id: 'parks',
    title: 'Relaxation',
    icon: <Trees className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
  },
  {
    id: 'rooms',
    title: 'Rooms',
    icon: <Bed className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
  },
  {
    id: 'lounges',
    title: 'Lounges',
    icon: <Coffee className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
  }
];

export const HighwayHubSection: React.FC = () => {
  return (
    <section id="highway-hubs" className="w-full bg-white py-8 sm:py-12 lg:py-16 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Full Image Banner Container */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] shadow-2xl border border-slate-200/80 bg-slate-950 w-full group flex items-center justify-center">

          {/* Desktop Banner Image: public/ev hub section.png */}
          <img
            src="/ev hub section.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/highway_charging_card.jpg';
            }}
            alt="Evoltek Highway EV Charging Station Hub"
            className="hidden sm:block w-full h-auto"
          />

          {/* Mobile Banner Image: public/mobile highway section.png */}
          <img
            src="/mobile highway section.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/ev hub section.png';
            }}
            alt="Evoltek Highway EV Charging Station Hub Mobile"
            className="block sm:hidden w-full h-auto rounded-[24px]"
          />

          {/* Overlay Text Container */}
          <div className="absolute left-[6%] right-[6%] bottom-[8.5%] sm:bottom-0 top-auto sm:top-0 sm:left-[5%] sm:right-auto sm:my-auto h-fit w-auto sm:w-[50%] lg:w-[52%] max-w-[650px] flex flex-col justify-center p-2 sm:p-7 lg:p-9 pl-2 sm:pl-9 lg:pl-11 z-10 text-white space-y-2 sm:space-y-3 lg:space-y-4">

            {/* Header & Tag Block with Comfortable Vertical Spacing */}
            <div className="space-y-2 sm:space-y-2.5">
              {/* Section Tag Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[#32aa15] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>HIGHWAY EV HUB</span>
              </div>

              {/* Headline with Reduced Line Height */}
              <h2 className="text-[18px] sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.02] sm:leading-[1.05] lg:leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                <span className="text-white block">Your EV Recharges.</span>
                <span className="text-[#32aa15] block">You Recharge Too.</span>
              </h2>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-slate-200 text-[9.5px] sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-snug font-normal max-w-xl">
              While your EV is charging, Evoltek Highway Hubs are envisioned to give travellers a comfortable place to eat, work, rest and relax.
            </p>

            {/* 6 Green Circular Feature Badges in Horizontal Row with Clear Spacing between Icon and Text */}
            <div className="grid grid-cols-6 gap-2.5 sm:gap-6 lg:gap-8 pt-2.5 sm:pt-5 border-t border-white/20 justify-items-center items-start w-full">
              {AMENITIES.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center group cursor-pointer w-full"
                >
                  {/* Circular Solid Green Icon Node */}
                  <div className="w-8 h-8 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#38c838] group-hover:bg-[#28a828] border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-lg group-hover:scale-105 shrink-0">
                    {item.icon}
                  </div>

                  {/* Text Label Container with Gap from Icon */}
                  <div className="flex items-start justify-center text-center mt-2 sm:mt-3 lg:mt-3.5 w-full px-0.5">
                    <span className="text-[8px] sm:text-xs lg:text-[13px] font-semibold text-white leading-tight text-center block whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
