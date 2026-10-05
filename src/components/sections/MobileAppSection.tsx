import React from 'react';
import { Zap, Activity, TrendingUp, Apple } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section id="mobile-app" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN DARK APP CARD WRAPPER */}
        <div className="relative rounded-[36px] bg-[#0B1320] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#32aa15]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Background Subtle Tech Grid Line Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

            {/* LEFT COLUMN: HEADLINE, SUBTEXT & STAT CARDS */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[#32aa15] bg-[#32aa15]/15 border border-[#32aa15]/30 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 fill-[#32aa15]" />
                <span>EVOLTEK MOBILE APP</span>
              </div>

              {/* Heading & Paragraph */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                  Everything. <br className="hidden sm:block" />
                  <span className="text-[#32aa15]">In One App.</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                  Investors and EV Network Users can check station status, usage and earnings through the Evoltek mobile app, all in one place.
                </p>
              </div>

              {/* Quick Live Stats Pills on Left */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-[#32aa15]/20 text-[#32aa15] flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Station Uptime</span>
                    <p className="text-xl font-black text-white">99.8% Online</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-[#32aa15]/20 text-[#32aa15] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Live Earnings</span>
                    <p className="text-xl font-black text-[#32aa15]">Real-time Tracking</p>
                  </div>
                </div>
              </div>

            </div>

            {/* CENTER / RIGHT COLUMN: PHONE MOCKUP & APP STORE DOWNLOAD CARD */}
            <div className="lg:col-span-6 relative flex flex-col md:flex-row items-center justify-center gap-6">

              {/* 1. APP STORE DOWNLOAD BADGE CARD (TOP RIGHT - MATCHING SCREENSHOT) */}
              <div className="w-full md:w-auto self-start md:self-auto bg-[#32aa15] p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col gap-3.5 border border-white/20 z-20 shrink-0">
                <div className="flex items-center justify-between gap-3 border-b border-white/20 pb-3">
                  <span className="text-white text-xs font-black uppercase tracking-wider">Mobile App</span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>

                {/* App Store Button */}
                <div className="w-full sm:w-48 bg-slate-950/80 hover:bg-slate-950 text-white px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3 opacity-90 transition-all cursor-not-allowed">
                  <Apple className="w-6 h-6 fill-current text-white shrink-0" />
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium leading-none">Download on the</span>
                    <span className="text-sm font-black text-white block">App Store</span>
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="w-full sm:w-48 bg-slate-950/80 hover:bg-slate-950 text-white px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3 opacity-90 transition-all cursor-not-allowed">
                  <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.55.45-1 1-1h.24l10.22 8.76L4.24 20.02H4c-.55 0-1-.45-1-.98zm12.92-7.81L18.4 14.1l3.07-1.78c.7-.4.7-1.05 0-1.45L18.4 9.1l-2.48 1.44 2.48 1.43v.72zm-1.46.85L4.72 21.84c.34.16.74.12 1.05-.06l10.15-5.91-1.46-.84zm0-3.08l1.46-.84-10.15-5.9c-.31-.18-.71-.22-1.05-.06l9.74 8.35.7.45z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium leading-none">Get it on</span>
                    <span className="text-sm font-black text-white block">Google Play</span>
                  </div>
                </div>
              </div>

              {/* 2. SMARTPHONE MOCKUP FRAME WITH LIVE EVOLTEK APP DISPLAY */}
              <div className="relative w-full max-w-[310px] sm:max-w-[330px] rounded-[44px] bg-[#0A0F1A] border-[6px] border-slate-700/80 shadow-2xl p-4 space-y-4 overflow-hidden z-10">
                
                {/* Dynamic Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700" />
                </div>

                {/* APP HEADER */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#32aa15] flex items-center justify-center text-white font-black text-xs">
                      E
                    </div>
                    <span className="text-xs font-extrabold text-white tracking-wider">EVOLTEK APP</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#32aa15] bg-[#32aa15]/15 px-2.5 py-1 rounded-full border border-[#32aa15]/30">
                    <span className="w-2 h-2 rounded-full bg-[#32aa15] animate-pulse" />
                    Online
                  </span>
                </div>

                {/* FAST CHARGING DIAL MOCKUP GRAPHIC */}
                <div className="bg-slate-900/90 border border-slate-800/80 p-4 rounded-2xl text-center space-y-3 relative overflow-hidden">
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                    {/* Circle Dial ring */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#32aa15]"
                        strokeDasharray="84, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-black text-white">84%</span>
                      <span className="text-[9px] font-bold text-[#32aa15] uppercase tracking-wider">Fast Charging</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-semibold pt-1 border-t border-slate-800/60">
                    <span className="text-slate-400">Charge Speed:</span>
                    <span className="text-[#32aa15] font-extrabold">150 kW</span>
                  </div>
                </div>

                {/* STATS LIST (USAGE, SESSIONS, EARNINGS) */}
                <div className="space-y-2.5">

                  {/* Today's Usage */}
                  <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Today's Usage</span>
                    <span className="text-white font-extrabold">1,284 kWh</span>
                  </div>

                  {/* Sessions */}
                  <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Total Sessions</span>
                    <span className="text-white font-extrabold">86</span>
                  </div>

                  {/* Earnings */}
                  <div className="bg-[#32aa15]/15 border border-[#32aa15]/30 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Est. Earnings</span>
                    <span className="text-[#32aa15] font-black text-sm">₹ 48,500</span>
                  </div>
                </div>

                {/* STATION PERFORMANCE PROGRESS BAR */}
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-slate-400">Station Performance</span>
                    <span className="text-[#32aa15]">High Uptime</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#32aa15] to-[#38c838] rounded-full w-[92%]" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
