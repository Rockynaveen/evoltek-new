import React from 'react';
import { Utensils, Wifi, Trees, Bed, Coffee } from 'lucide-react';

const AMENITIES = [
  {
    id: 'charging',
    title: 'Fast Charging',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    id: 'restaurant',
    title: 'Restaurants',
    icon: <Utensils className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors" />
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: <Wifi className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors" />
  },
  {
    id: 'parks',
    title: 'Relaxation',
    icon: <Trees className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors" />
  },
  {
    id: 'rooms',
    title: 'Rooms',
    icon: <Bed className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors" />
  },
  {
    id: 'lounges',
    title: 'Lounges',
    icon: <Coffee className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#38c838] group-hover:text-white transition-colors" />
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

          {/* Overlay Text Container (Mobile: Positioned 8.5% from bottom to fit inside blur card, Desktop: Vertically centered) */}
          <div className="absolute left-[6%] right-[6%] bottom-[8.5%] sm:bottom-0 top-auto sm:top-0 sm:left-[5.5%] sm:right-auto sm:my-auto h-fit w-auto sm:w-[48%] max-w-[620px] flex flex-col justify-center p-2 sm:p-8 lg:p-10 pl-2 sm:pl-10 lg:pl-12 z-10 text-white space-y-2 sm:space-y-5 lg:space-y-7">

            {/* Headline */}
            <h2 className="text-[17px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
              <span className="text-white block">Your EV Recharges.</span>
              <span className="text-[#32aa15] block mt-0.5 sm:mt-1">You Recharge Too.</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-200 text-[9.5px] sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-relaxed font-normal max-w-xl">
              While your EV is charging, Evoltek Highway Hubs are envisioned to give travellers a comfortable place to eat, work, rest and relax.
            </p>

            {/* 6 Green Circular Feature Badges in Horizontal Row */}
            <div className="grid grid-cols-6 gap-1 sm:gap-4 lg:gap-5 pt-1.5 sm:pt-6 border-t border-white/15 justify-items-center items-start w-full">
              {AMENITIES.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center group cursor-pointer w-full"
                >
                  {/* Circular Green Icon Node */}
                  <div className="w-7 h-7 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#32aa15]/15 group-hover:bg-[#32aa15] border border-[#32aa15]/60 group-hover:border-[#32aa15] flex items-center justify-center text-[#38c838] group-hover:text-white transition-all duration-300 shadow-md group-hover:scale-110 shrink-0">
                    {item.icon}
                  </div>

                  {/* Fixed Height Label Container */}
                  <div className="h-5 sm:h-10 flex items-start justify-center text-center mt-1 sm:mt-2 w-full px-0.5">
                    <span className="text-[7px] sm:text-[11px] lg:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight text-center block">
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
