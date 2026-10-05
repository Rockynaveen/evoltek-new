import React from 'react';
import { Utensils, Wifi, Trees, Bed, Coffee } from 'lucide-react';

const AMENITIES = [
  {
    id: 'charging',
    title: 'Fast Charging',
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15] fill-[#32aa15]" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    id: 'restaurant',
    title: 'Restaurants',
    icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15]" />
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: <Wifi className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15]" />
  },
  {
    id: 'parks',
    title: 'Relaxation',
    icon: <Trees className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15]" />
  },
  {
    id: 'rooms',
    title: 'Rooms ',
    icon: <Bed className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15]" />
  },
  {
    id: 'lounges',
    title: 'Lounges',
    icon: <Coffee className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#32aa15]" />
  }
];

export const HighwayHubSection: React.FC = () => {
  return (
    <section id="highway-hubs" className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Full Image Banner Container */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] shadow-2xl border border-slate-200/80 bg-slate-950 w-full group">

          {/* Background Image: public/ev hub section.png */}
          <img
            src="/ev hub section.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/highway_charging_card.jpg';
            }}
            alt="Evoltek Highway EV Charging Station Hub"
            className="w-full h-auto block"
          />

          {/* Overlay Text vertically centered in the left panel box */}
          <div className="absolute left-[5.5%] top-0 bottom-0 my-auto h-fit w-[48%] max-w-[620px] flex flex-col justify-center p-4 sm:p-8 lg:p-10 pl-6 sm:pl-10 lg:pl-12 z-10 text-white space-y-3 sm:space-y-5 lg:space-y-7">

            {/* Headline */}
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1] font-['Wix_Madefor_Display',sans-serif]">
              <span className="text-white block">Your EV Recharges.</span>
              <span className="text-[#32aa15] block mt-0.5 sm:mt-1">You Recharge Too.</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-200 text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-xl">
              While your EV is charging, Evoltek Highway Hubs are envisioned to give travellers a comfortable place to eat, work, rest and relax.
            </p>

            {/* 6 Green Circular Feature Badges in Horizontal Row (Increased Gap & Right Alignment) */}
            <div className="grid grid-cols-6 gap-2.5 sm:gap-4 lg:gap-5 pt-3 sm:pt-5 border-t border-white/10 justify-items-center items-start">
              {AMENITIES.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Green Icon Node */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 group-hover:bg-[#32aa15]/20 border border-white/20 group-hover:border-[#32aa15] flex items-center justify-center text-[#32aa15] transition-all duration-300 shadow-md group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Centered Title Label below Circle */}
                  <span className="text-[8px] sm:text-[10px] lg:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight mt-1.5 sm:mt-2 whitespace-pre-line text-center block">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
