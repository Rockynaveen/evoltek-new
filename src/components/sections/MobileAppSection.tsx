import React from 'react';
import { Zap, Download, Star, Smartphone } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section id="mobile-app" className="w-full bg-[#121722] text-white pt-8 sm:pt-10 lg:pt-12 pb-0 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-y border-slate-800/80">
      
      {/* Background Dark Cinematic EV Car Image - Full 100% Edge-to-Edge */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('/dark_ev_bg.jpg')` }}
      />
      {/* Ambient Lighting Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121722] via-[#121722]/85 to-[#121722]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121722]/30 to-[#121722] pointer-events-none" />

      {/* Green Glow Accents */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#38c838]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">

          {/* LEFT COLUMN: BADGE, HEADLINE & 2 FLOATING STAT CARDS */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 pb-8 sm:pb-12">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-[#32aa15] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em]">
              <Zap className="w-4 h-4 fill-[#32aa15] text-[#32aa15]" />
              <span>DOWNLOAD</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
              Get the app made for smart EV drivers
            </h2>

            {/* 2 Floating Stat Cards - Glassmorphism Style with Circular Icon Badges */}
            <div className="space-y-3.5 max-w-xs sm:max-w-sm">
              
              {/* Stat Card 1: 30M+ Downloaded & Installation */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-[#38c838]/60 hover:bg-white/15 rounded-2xl p-4 flex items-center gap-4 shadow-2xl transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-[#52b202] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Download className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-tight font-['Wix_Madefor_Display',sans-serif]">
                    30M+
                  </p>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Downloaded &amp; Installation
                  </p>
                </div>
              </div>

              {/* Stat Card 2: 4.7/5 Based on 2,302 reviews */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-[#38c838]/60 hover:bg-white/15 rounded-2xl p-4 flex items-center gap-4 shadow-2xl transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-[#52b202] text-white flex items-center justify-center shrink-0 shadow-lg">
                  <Star className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-tight font-['Wix_Madefor_Display',sans-serif]">
                    4.7/5
                  </p>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Based on 2,302 reviews
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CENTER & RIGHT VISUAL CLUSTER: PHONES + RIGHT TOP DOWNLOAD BADGES & HAPPY USER */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-end justify-start lg:justify-start relative">
            
            {/* 1. Dual Phones (kept in place on the left of this visual area) */}
            <div className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] shrink-0 flex items-end justify-center p-0 m-0 leading-none z-10">
              <img
                src="/mobile_app_phones.png"
                alt="Evoltek Mobile App Charging Interface"
                className="w-full h-auto block object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none mb-0 pb-0"
                loading="lazy"
              />
            </div>

            {/* 2. Right Side Top: Glassmorphism App Store & Google Play Badges + Bottom-Anchored Happy User */}
            <div className="flex flex-col justify-between items-start self-stretch -ml-6 sm:-ml-10 lg:-ml-14 z-20 shrink-0">
              
              {/* Right Side Top Glassmorphism Download Badges */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-3 mb-4 sm:mb-6 pt-2 ml-4 sm:ml-10 lg:ml-14 xl:ml-20">
                {/* App Store Badge (Glassmorphism + Green Circular Icon Badge) */}
                <a
                  href="#download-ios"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-[#38c838]/60 hover:bg-white/15 px-4.5 py-3 rounded-2xl flex items-center gap-3.5 transition-all duration-300 group shadow-2xl cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#52b202] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-lg">
                    <Smartphone className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-slate-300 font-medium block leading-none mb-1">Download On The</span>
                    <span className="text-sm sm:text-base font-bold text-white block leading-none">App Store</span>
                  </div>
                </a>

                {/* Google Play Badge (Glassmorphism + Green Circular Icon Badge) */}
                <a
                  href="#download-android"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-[#38c838]/60 hover:bg-white/15 px-4.5 py-3 rounded-2xl flex items-center gap-3.5 transition-all duration-300 group shadow-2xl cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#52b202] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-lg">
                    <svg className="w-4.5 h-4.5 fill-white text-white" viewBox="0 0 24 24">
                      <path d="M3 20.5v-17c0-.55.45-1 1-1h.24l10.22 8.76L4.24 20.02H4c-.55 0-1-.45-1-.98zm12.92-7.81L18.4 14.1l3.07-1.78c.7-.4.7-1.05 0-1.45L18.4 9.1l-2.48 1.44 2.48 1.43v.72zm-1.46.85L4.72 21.84c.34.16.74.12 1.05-.06l10.15-5.91-1.46-.84zm0-3.08l1.46-.84-10.15-5.9c-.31-.18-.71-.22-1.05-.06l9.74 8.35.7.45z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-slate-300 font-medium block leading-none mb-1">Get It On</span>
                    <span className="text-sm sm:text-base font-bold text-white block leading-none">Google Play</span>
                  </div>
                </a>
              </div>

              {/* Smiling Happy User Looking at Smartphone */}
              <div className="flex items-end justify-start mt-auto p-0 m-0 leading-none">
                <img
                  src="/happy_ev_user.png"
                  alt="Excited EV User Celebrating with Mobile App"
                  className="w-auto h-[260px] sm:h-[300px] lg:h-[340px] block object-contain object-bottom drop-shadow-2xl select-none mb-0 pb-0"
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
