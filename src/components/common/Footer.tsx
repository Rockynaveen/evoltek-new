import React from 'react';
import {
  Mail,
  PhoneCall,
  ArrowUp,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  openModalWithOption?: (option: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ openModalWithOption }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#32aa15] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Subtle Border Line */}
      <div className="h-1 w-full bg-white/20" />

      {/* Subtle Background Radial Glow Effects */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-14 sm:pt-16 pb-10">

        {/* 4-COLUMN FOOTER GRID - ITEMS ALIGNED AT TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-white/20">

          {/* COL 1: BRAND & TAGLINE (LG: 4 COLS) */}
          <div className="lg:col-span-4 space-y-3">
            <a href="#home" className="inline-block focus:outline-none">
              <img
                src="/logo.png"
                alt="Evoltek Logo"
                className="h-14 sm:h-18 lg:h-20 w-auto object-contain brightness-0 invert"
              />
            </a>
            <h3 className="text-xl font-bold text-white tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Powering Every Journey.
            </h3>
            <p className="text-sm text-white/90 leading-relaxed max-w-sm font-normal">
              Building India's premier high-speed EV charging network across highways, urban centers, and destination hubs.
            </p>
          </div>

          {/* COL 2: QUICK LINKS (LG: 2 COLS) */}
          <div className="lg:col-span-2 space-y-3 lg:pt-2">
            <h4 className="text-white font-extrabold text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Quick Links
              <span className="block h-0.5 w-8 bg-white mt-1 rounded-full opacity-80" />
            </h4>
            <ul className="space-y-2.5 text-sm font-medium pt-1">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Charging Stations', href: '#charging-stations' },
                { label: 'Investment', href: '#investment' },
                { label: 'Franchise', href: '#investment' },
                { label: 'ROI Calculator', href: '#roi-calculator' },
                { label: 'Contact', href: '#contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/80 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: BUSINESS (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-3 lg:pt-2">
            <h4 className="text-white font-extrabold text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Business
              <span className="block h-0.5 w-8 bg-white mt-1 rounded-full opacity-80" />
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/90 pt-1">
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Become an Investor') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/80 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Become an Investor</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Franchise Opportunity') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/80 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Franchise Opportunity</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Landowner Partnership') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/80 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Landowner Partnership</span>
                </button>
              </li>
              <li>
                <a
                  href="#charging-stations"
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/80 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span className="group-hover:translate-x-0.5 transition-transform">EV Hub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & SOCIAL MEDIA (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-3 lg:pt-2">
            <h4 className="text-white font-extrabold text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Contact
              <span className="block h-0.5 w-8 bg-white mt-1 rounded-full opacity-80" />
            </h4>

            <div className="space-y-3 text-sm font-medium pt-1">
              <a
                href="mailto:info@evoltek.in"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#32aa15] transition-colors shadow-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@evoltek.in</span>
              </a>

              <a
                href="tel:18003865835"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#32aa15] transition-colors shadow-sm shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>1800-386-5835</span>
              </a>

              {/* Social Media */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">Social Media</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="#home"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#32aa15] transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    aria-label="Twitter"
                    className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#32aa15] transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#32aa15] transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#32aa15] transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.63 13.73 5.63c1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.23 0-1.62.77-1.62 1.56V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/90 font-semibold">
          <p>© 2026 Evoltek. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 bg-white text-[#32aa15] hover:bg-slate-900 hover:text-white rounded-xl border border-white/30 transition-all cursor-pointer group shadow-sm"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};




