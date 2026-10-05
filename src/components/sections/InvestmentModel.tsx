import React from 'react';

export const InvestmentModel: React.FC = () => {
  return (
    <>
      {/* ================= INVESTMENT MODEL SECTION (50/50 COLLABORATION) ================= */}
      <section id="investment" className="w-full bg-[#eef7e3] py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-8 py-6 overflow-hidden">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 relative z-10">
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>INVESTMENT MODEL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#1C2029] tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
                Invest Together. Grow Together.
              </h2>
            </div>

            {/* 3 Column Graphic: Left Circle (Evoltek Plaza) | Center 50%/50% Handshake | Right Circle (Investment Coins) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full my-4 relative z-10">

              {/* Left Circle: EVOLTEK Charging Station Plaza */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative rounded-full overflow-hidden max-w-[280px] sm:max-w-[320px] w-full aspect-square group z-10 shadow-md">
                  <img
                    src="/evoltek_charging_plaza_circle.jpg"
                    onError={(e) => { e.currentTarget.src = '/highway charger.png'; }}
                    alt="Evoltek Charging Station Plaza"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Center: 50% EVOLTEK | Handshake | 50% INVESTOR */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-3 py-4 lg:py-0 relative z-20">
                <div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#32aa15] tracking-tight leading-none block">
                    50%
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#32aa15] uppercase block mt-1">
                    EVOLTEK
                  </span>
                </div>

                {/* Handshake Badge flanked by lines */}
                <div className="flex items-center justify-center gap-3 my-2 w-full">
                  <div className="h-[2px] w-8 sm:w-12 bg-[#38c838]" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-white shadow-md border border-slate-100/80 flex items-center justify-center group">
                    <img
                      src="/shake hand.jpg"
                      alt="Handshake Partnership"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/handshake.png'; }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="h-[2px] w-8 sm:w-12 bg-[#38c838]" />
                </div>

                <div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#32aa15] tracking-tight leading-none block">
                    50%
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#32aa15] uppercase block mt-1">
                    INVESTOR
                  </span>
                </div>
              </div>

              {/* Right Circle: Investment Coins Growth */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative rounded-full overflow-hidden max-w-[280px] sm:max-w-[320px] w-full aspect-square group z-10 shadow-md">
                  <img
                    src="/investment_growth_coins_circle.jpg"
                    onError={(e) => { e.currentTarget.src = '/investor_growth_circle.jpg'; }}
                    alt="Investment Growth Coins"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>

            {/* Bottom 5 Feature Columns - 2 per row on Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-6 border-t border-emerald-200/60 w-full relative z-10 text-center">

              <div className="flex flex-col items-center p-3 space-y-2 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-1 flex items-center justify-center">
                  <svg className="w-full h-full group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="sharedGrad1" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#15803d" />
                      </linearGradient>
                      <linearGradient id="sharedGrad2" x1="16" y1="8" x2="48" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fbbf24" />
                        <stop offset="1" stopColor="#d97706" />
                      </linearGradient>
                    </defs>

                    {/* 3D Base Platform */}
                    <circle cx="32" cy="35" r="25" fill="#14532d" />
                    <circle cx="32" cy="31" r="25" fill="url(#sharedGrad1)" />

                    {/* Left 3D Coin (Evoltek 50%) */}
                    <ellipse cx="23" cy="32" rx="12" ry="12" fill="#b45309" />
                    <circle cx="23" cy="29" r="12" fill="url(#sharedGrad2)" />
                    <circle cx="23" cy="29" r="9.5" stroke="#fef08a" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
                    <text x="23" y="33" textAnchor="middle" fill="#78350f" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">50%</text>

                    {/* Right 3D Coin (Investor 50%) */}
                    <ellipse cx="41" cy="38" rx="12" ry="12" fill="#064e3b" />
                    <circle cx="41" cy="35" r="12" fill="#4ade80" />
                    <circle cx="41" cy="35" r="9.5" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
                    <text x="41" y="39" textAnchor="middle" fill="#064e3b" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">50%</text>

                    {/* Center 3D Growth Sparkle Star */}
                    <path d="M32 15L34.5 21.5L41 24L34.5 26.5L32 33L29.5 26.5L23 24L29.5 21.5L32 15Z" fill="#fef08a" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Shared<br />Investment
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[210px]">
                  You invest only half the cost, and Evoltek invests the other half.
                </p>
              </div>

              <div className="flex flex-col items-center p-3 space-y-2 pt-4 sm:pt-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-1 flex items-center justify-center">
                  <img
                    src="/feat_maintenance.jpg"
                    onError={(e) => { e.currentTarget.src = '/icon_3d_hassle_free.jpg'; }}
                    alt="Hassle-free Maintenance"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Hassle-free<br />Maintenance
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[210px]">
                  Evoltek takes care of setup, operations and station maintenance.
                </p>
              </div>

              <div className="flex flex-col items-center p-3 space-y-2 pt-4 sm:pt-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-1 flex items-center justify-center">
                  <img
                    src="/feat_return_options.jpg"
                    onError={(e) => { e.currentTarget.src = '/icon_3d_flexible_returns.jpg'; }}
                    alt="Two Return Options"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Two Return<br />Options
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[210px]">
                  Choose between a percentage return or a fixed return.
                </p>
              </div>

              <div className="flex flex-col items-center p-3 space-y-2 pt-4 sm:pt-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-1 flex items-center justify-center">
                  <img
                    src="/feat_agreements.jpg"
                    onError={(e) => { e.currentTarget.src = '/icon_3d_long_term.jpg'; }}
                    alt="Secure Agreements"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Secure<br />Agreements
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[210px]">
                  Long-term agreement of 5 or 10 years, renewable.
                </p>
              </div>

              <div className="flex flex-col items-center p-3 space-y-2 pt-4 sm:pt-3 col-span-1 sm:col-span-3 lg:col-span-1 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-1 flex items-center justify-center">
                  <img
                    src="/feat_app_transparency.jpg"
                    onError={(e) => { e.currentTarget.src = '/icon_3d_digital_transparency.jpg'; }}
                    alt="Transparency with App"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Transparency<br />with App
                </h4>
                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[210px]">
                  Track your station's performance through the Evoltek mobile app.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
