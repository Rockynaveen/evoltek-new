import React from 'react';
import { Zap, Download, Star, Apple } from 'lucide-react';

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
          <div className="lg:col-span-4 space-y-5 sm:space-y-6 pb-8 sm:pb-12">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-[#32aa15] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em]">
              <Zap className="w-4 h-4 fill-[#32aa15] text-[#32aa15]" />
              <span>DOWNLOAD</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12] font-['Wix_Madefor_Display',sans-serif]">
              Get the app made for smart EV drivers
            </h2>

            {/* 2 Floating Stat Cards Matching Screenshot */}
            <div className="space-y-3.5 max-w-xs sm:max-w-sm">
              
              {/* Stat Card 1: 30M+ Downloaded & Installation */}
              <div className="bg-[#242A38]/90 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:border-[#32aa15]/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#32aa15]/20 text-[#32aa15] flex items-center justify-center shrink-0 shadow-inner">
                  <Download className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-tight font-['Wix_Madefor_Display',sans-serif]">
                    30M+
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Downloaded &amp; Installation
                  </p>
                </div>
              </div>

              {/* Stat Card 2: 4.7/5 Based on 2,302 reviews */}
              <div className="bg-[#242A38]/90 backdrop-blur-md border border-slate-700/60 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:border-[#32aa15]/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#32aa15]/20 text-[#32aa15] flex items-center justify-center shrink-0 shadow-inner">
                  <Star className="w-5 h-5 fill-[#32aa15] text-[#32aa15]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-tight font-['Wix_Madefor_Display',sans-serif]">
                    4.7/5
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Based on 2,302 reviews
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CENTER COLUMN: DUAL PHONES TOUCHING THE BOTTOM */}
          <div className="lg:col-span-5 flex items-end justify-center self-end p-0 m-0 leading-none">
            <div className="w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[490px] flex items-end justify-center p-0 m-0 leading-none">
              <img
                src="/mobile_app_phones.png"
                alt="Evoltek Mobile App Charging Interface"
                className="w-full h-auto block object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none pointer-events-none mb-0 pb-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: STORE DOWNLOAD CARD (TOP) & MAN TOUCHING THE BOTTOM */}
          <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-end self-stretch pt-2">
            
            {/* Vibrant Green Store Download Card (Top Right) */}
            <div className="w-full max-w-[210px] bg-[#38c838] p-4 sm:p-5 rounded-3xl shadow-2xl flex flex-col gap-2.5 z-20 border border-white/20 mb-4 lg:mb-0">
              
              {/* App Store Pill Button */}
              <a
                href="#download-ios"
                className="w-full bg-[#0F172A] hover:bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 group shadow-md"
              >
                <Apple className="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-105 transition-transform" />
                <span className="text-xs font-bold text-white tracking-wide">App Store</span>
              </a>

              {/* Google Play Pill Button */}
              <a
                href="#download-android"
                className="w-full bg-[#0F172A] hover:bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 group shadow-md"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.55.45-1 1-1h.24l10.22 8.76L4.24 20.02H4c-.55 0-1-.45-1-.98zm12.92-7.81L18.4 14.1l3.07-1.78c.7-.4.7-1.05 0-1.45L18.4 9.1l-2.48 1.44 2.48 1.43v.72zm-1.46.85L4.72 21.84c.34.16.74.12 1.05-.06l10.15-5.91-1.46-.84zm0-3.08l1.46-.84-10.15-5.9c-.31-.18-.71-.22-1.05-.06l9.74 8.35.7.45z" />
                </svg>
                <span className="text-xs font-bold text-white tracking-wide">Google Play</span>
              </a>

            </div>

            {/* Smiling Happy User Looking at Smartphone (Touching Bottom) */}
            <div className="w-full flex items-end justify-center lg:justify-end mt-auto p-0 m-0 leading-none">
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
    </section>
  );
};
