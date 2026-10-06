import React from 'react';
import { Eye, Target } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-50/40 py-12 sm:py-16 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">

          {/* ================= CARD 1: OUR VISION (Dark overlay + perfect fit for my vision.png) ================= */}
          <div
            className="rounded-[32px] sm:rounded-[38px] overflow-hidden flex flex-col justify-between relative bg-cover bg-center bg-no-repeat text-white min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] p-6 sm:p-9 lg:p-10 shadow-none border border-emerald-950/20 group"
            style={{ backgroundImage: `url('/my vision.png')` }}
          >
            {/* Gradient Overlay to guarantee 100% crisp text readability over green trees */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061d0f]/80 via-[#061d0f]/45 to-transparent pointer-events-none" />

            {/* Top Content Block */}
            <div className="relative z-10 space-y-2.5 max-w-lg">
              {/* White Circular Icon Badge */}
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white flex items-center justify-center shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] stroke-[2.2]" />
              </div>

              {/* Green Bar Accent */}
              <div className="w-9 h-1 bg-[#38c838] rounded-full mt-3 mb-2 group-hover:w-14 transition-all duration-300 shadow-sm" />

              {/* Title: Our Vision */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] uppercase">
                Our <span className="text-[#38c838]">Vision</span>
              </h3>

              {/* Description Paragraph */}
              <p className="text-white font-medium text-sm sm:text-base leading-relaxed pt-1 max-w-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                To build a smart and accessible EV charging network connecting cities, highways and destinations, enabling electric mobility without range anxiety.
              </p>
            </div>
          </div>

          {/* ================= CARD 2: OUR MISSION (Perfect fit for my mission.png) ================= */}
          <div
            className="rounded-[32px] sm:rounded-[38px] overflow-hidden flex flex-col justify-between relative bg-cover bg-bottom bg-no-repeat text-slate-900 min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] p-6 sm:p-9 lg:p-10 shadow-none border border-slate-200/80 group"
            style={{ backgroundImage: `url('/my mission.png')` }}
          >
            {/* Subtle Gradient Overlay for Top Sky Light Balance */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Content Block */}
            <div className="relative z-10 space-y-2.5 max-w-lg">
              {/* Soft Light Mint Circular Icon Badge */}
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#38c838]/15 flex items-center justify-center text-[#15803d] shrink-0 group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-[#38c838]/20">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] stroke-[2.2]" />
              </div>

              {/* Green Bar Accent */}
              <div className="w-9 h-1 bg-[#15803d] rounded-full mt-3 mb-2 group-hover:w-14 transition-all duration-300" />

              {/* Title: Our Mission */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif] uppercase">
                Our <span className="text-[#15803d]">Mission</span>
              </h3>

              {/* Description Paragraph */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium max-w-md pt-1">
                To establish strategically located EV charging stations with reliable technology, fast charging, simple digital payments, high uptime and a customer-friendly charging experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
