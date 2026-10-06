import React from 'react';
import { Eye, Target } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">

          {/* ================= CARD 1: OUR VISION ================= */}
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group cursor-pointer">

            {/* Top Right Corner Accent Triangle (Transitions to vibrant green on hover) */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10 overflow-hidden rounded-tr-[32px]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#e6f7e2] group-hover:text-[#32aa15] fill-current transition-colors duration-300">
                <path d="M0,0 L100,0 L100,100 Z" />
              </svg>
            </div>

            {/* Top White Box */}
            <div className="p-8 sm:p-10 bg-white relative z-0 flex flex-col justify-start">
              {/* Soft Green Circular Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e6f7e2] flex items-center justify-center text-[#32aa15] shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif] mt-8 sm:mt-10">
                Our Vision
              </h3>
            </div>

            {/* Bottom Colored Box (Light Mint by default -> Vibrant Green on Hover) */}
            <div className="p-8 sm:p-10 bg-[#e8f7e5] group-hover:bg-[#32aa15] rounded-b-[32px] flex-1 flex items-center border-t border-emerald-100/60 group-hover:border-transparent transition-all duration-300">
              <p className="text-slate-700 group-hover:text-white text-base sm:text-lg leading-relaxed font-medium transition-colors duration-300">
                To build a smart and accessible EV charging network connecting cities, highways and destinations, enabling electric mobility without range anxiety.
              </p>
            </div>
          </div>

          {/* ================= CARD 2: OUR MISSION ================= */}
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group cursor-pointer">

            {/* Top Right Corner Accent Triangle (Transitions to vibrant green on hover) */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10 overflow-hidden rounded-tr-[32px]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#e6f7e2] group-hover:text-[#32aa15] fill-current transition-colors duration-300">
                <path d="M0,0 L100,0 L100,100 Z" />
              </svg>
            </div>

            {/* Top White Box */}
            <div className="p-8 sm:p-10 bg-white relative z-0 flex flex-col justify-start">
              {/* Soft Green Circular Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e6f7e2] flex items-center justify-center text-[#32aa15] shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif] mt-8 sm:mt-10">
                Our Mission
              </h3>
            </div>

            {/* Bottom Colored Box (Light Mint by default -> Vibrant Green on Hover) */}
            <div className="p-8 sm:p-10 bg-[#e8f7e5] group-hover:bg-[#32aa15] rounded-b-[32px] flex-1 flex items-center border-t border-emerald-100/60 group-hover:border-transparent transition-all duration-300">
              <p className="text-slate-700 group-hover:text-white text-base sm:text-lg leading-relaxed font-medium transition-colors duration-300">
                To establish strategically located EV charging stations with reliable technology, fast charging, simple digital payments, high uptime and a customer-friendly charging experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
