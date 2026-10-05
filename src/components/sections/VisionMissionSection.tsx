import React from 'react';
import { Link2, Target } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 1: Our Vision */}
          <div className="bg-gradient-to-br from-[#E6F4D7] via-[#ECF6E0] to-[#F3F9EA] p-8 sm:p-10 rounded-[28px] border border-[#D5ECC0] shadow-sm hover:shadow-md transition-all duration-300 space-y-6 flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Green Circular Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Link2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] -rotate-45" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E120B] tracking-tight">
                Our Vision
              </h3>

              {/* Content */}
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                To build a smart and accessible EV charging network connecting cities, highways and destinations, enabling electric mobility without range anxiety.
              </p>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-gradient-to-br from-[#E6F4D7] via-[#ECF6E0] to-[#F3F9EA] p-8 sm:p-10 rounded-[28px] border border-[#D5ECC0] shadow-sm hover:shadow-md transition-all duration-300 space-y-6 flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Green Circular Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E120B] tracking-tight">
                Our Mission
              </h3>

              {/* Content */}
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                To establish strategically located EV charging stations with reliable technology, fast charging, simple digital payments, high uptime and a customer-friendly charging experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
