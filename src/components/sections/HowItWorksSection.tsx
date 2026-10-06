import React from 'react';

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'BOOK',
    description: 'Pay a ₹25,000 booking advance and receive an official digital receipt.',
    icon: (
      <svg className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Yellow Card (Behind) */}
        <g transform="translate(4, -2) rotate(6 32 32)">
          <rect x="12" y="14" width="38" height="24" rx="4" fill="#ca8a04" />
          <rect x="12" y="12" width="38" height="24" rx="4" fill="#facc15" stroke="#fde047" strokeWidth="0.8" />
          <rect x="16" y="22" width="8" height="6" rx="1.5" fill="#fef08a" />
          <circle cx="42" cy="28" r="3" fill="#eab308" />
        </g>
        {/* Green VISA Card (Front) */}
        <g transform="translate(-2, 4)">
          <rect x="10" y="16" width="40" height="26" rx="4.5" fill="#14532d" opacity="0.4" />
          <rect x="10" y="14" width="40" height="26" rx="4.5" fill="url(#visaGrad)" stroke="#4ade80" strokeWidth="1" />
          <rect x="15" y="24" width="8" height="6" rx="1.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
          <path d="M26 25C27 26 27 28 26 29M28 24C29.5 25.5 29.5 29.5 28 31" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          <circle cx="16" cy="34" r="1" fill="#ffffff" opacity="0.9" />
          <circle cx="19" cy="34" r="1" fill="#ffffff" opacity="0.9" />
          <circle cx="22" cy="34" r="1" fill="#ffffff" opacity="0.9" />
          <circle cx="25" cy="34" r="1" fill="#ffffff" opacity="0.9" />
          <text x="44" y="22" textAnchor="end" fill="#ffffff" fontSize="7" fontWeight="900" fontFamily="sans-serif">VISA</text>
        </g>
        <defs>
          <linearGradient id="visaGrad" x1="10" y1="14" x2="50" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32aa15" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    step: 'STEP 02',
    title: 'AGREE',
    description: 'Sign the flexible 5 or 10-year official agreement with renewal options.',
    icon: (
      <svg className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" y="9" width="30" height="42" rx="3" fill="#020617" opacity="0.2" />
        <rect x="16" y="7" width="30" height="42" rx="3" fill="#ffffff" stroke="#15803d" strokeWidth="1.2" />
        <path d="M38 7L46 15H40C38.9 15 38 14.1 38 13V7Z" fill="#e2e8f0" stroke="#15803d" strokeWidth="1" />
        <line x1="21" y1="15" x2="33" y2="15" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="21" y1="20" x2="41" y2="20" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="24" x2="39" y2="24" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="28" x2="36" y2="28" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="32" x2="32" y2="32" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="31" cy="40" r="6" fill="#dc2626" />
        <circle cx="31" cy="40" r="4.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
        <path d="M44 14C44 14 36 22 34 29L32 35L36 33C40 29 46 18 46 18Z" fill="#15803d" />
        <path d="M44 14C44 14 39 19 36 26L34 29" stroke="#86efac" strokeWidth="0.8" />
        <path d="M32 35L30 38" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    step: 'STEP 03',
    title: 'LAUNCH',
    description: 'Your complete high-speed charging station is fully set up in ~2 months.',
    icon: (
      <svg className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chargerBody" x1="18" y1="8" x2="44" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38c838" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
        </defs>
        <rect x="20" y="10" width="24" height="42" rx="6" fill="#020617" opacity="0.3" />
        <rect x="18" y="8" width="24" height="42" rx="6" fill="url(#chargerBody)" stroke="#4ade80" strokeWidth="1" />
        <circle cx="30" cy="22" r="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M31 16L27 23H31L29 28L34 21H30L31 16Z" fill="#facc15" />
        <circle cx="26" cy="35" r="1.5" fill="#4ade80" />
        <circle cx="34" cy="35" r="1.5" fill="#38bdf8" />
        <rect x="25" y="41" width="10" height="3" rx="1.5" fill="#052e16" />
        <path d="M38 34C44 34 46 40 44 46C42 50 36 50 34 44L34 38" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="32" y="34" width="4" height="7" rx="1.5" fill="#334155" />
      </svg>
    )
  },
  {
    step: 'STEP 04',
    title: 'TRACK',
    description: 'Monitor live uptime, revenue, and station health via the Evoltek mobile app.',
    icon: (
      <svg className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navPhoneGrad" x1="18" y1="6" x2="44" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect x="20" y="8" width="24" height="48" rx="5" fill="#020617" opacity="0.3" />
        <rect x="18" y="6" width="24" height="48" rx="5" fill="url(#navPhoneGrad)" stroke="#32aa15" strokeWidth="1.2" />
        <rect x="20" y="9" width="20" height="42" rx="3" fill="#f8fafc" />
        <line x1="20" y1="20" x2="40" y2="20" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="20" y1="32" x2="40" y2="32" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="28" y1="9" x2="28" y2="51" stroke="#e2e8f0" strokeWidth="1" />
        <path d="M23 44C23 38 35 34 35 25C35 18 26 16 26 12" stroke="#32aa15" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M23 44C23 38 35 34 35 25C35 18 26 16 26 12" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M26 12L31 22L26 19L21 22L26 12Z" fill="#15803d" stroke="#ffffff" strokeWidth="1" />
        <circle cx="35" cy="25" r="3" fill="#32aa15" stroke="#ffffff" strokeWidth="1" />
      </svg>
    )
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#0B1320] text-white py-12 relative overflow-hidden">
      {/* Background Image - Highly Visible with Dark Tint matching reference screenshot */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
        style={{ backgroundImage: `url('/charging_solutions_hub.jpg')` }}
      />
      <div className="absolute inset-0 bg-[#0B1320]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/80 via-transparent to-[#0B1320]/80 pointer-events-none" />

      {/* Dark Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#38c838]/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>WORK PROCESS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-white tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
            Simple. Fast. Reliable.
          </h2>
        </div>

        {/* 4 Cards Grid - Reduced Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white text-slate-900 border border-slate-200/90 p-4.5 sm:p-5 hover:border-[#38c838] flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
              }}
            >
              <div className="flex flex-col">
                {/* Header Row: Step Icon & Number Tag */}
                <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                  {/* Icon Container without background box */}
                  <div className="flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Step Number Tag */}
                  <div className="bg-slate-100/90 rounded-full px-2.5 py-0.5 flex items-center gap-1.5 border border-slate-200/70 group-hover:bg-[#38c838]/10 group-hover:border-[#38c838]/30 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38c838]" />
                    <span className="text-[11px] font-bold text-slate-600 group-hover:text-[#32aa15] tracking-tight transition-colors duration-300">{item.step}</span>
                  </div>
                </div>

                {/* Title Row with Green Line Accent */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1 h-5 bg-[#38c838] rounded-full shrink-0 group-hover:scale-y-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C2029] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description Text - Tight gap below title */}
                <p className="text-xs sm:text-sm text-slate-700 leading-normal font-medium mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
