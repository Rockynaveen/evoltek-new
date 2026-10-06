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
    <footer className="w-full bg-[#0b0f19] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-800">
      {/* Top Subtle Green Accent Line */}
      <div className="h-1 w-full bg-[#32aa15]" />

      {/* Subtle Background Radial Glow Effects */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-2">

        {/* 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-4 sm:pb-5 border-b border-slate-800">

          {/* COL 1: BRAND & TAGLINE (LG: 4 COLS) */}
          <div className="lg:col-span-4 space-y-2">
            <a href="#home" className="inline-block focus:outline-none -ml-1">
              <img
                src="/logo.png"
                alt="Evoltek Logo"
                className="h-10 sm:h-12 lg:h-14 max-w-[240px] sm:max-w-[280px] w-auto object-contain"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Powering Every Journey.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Building India&apos;s premier high-speed EV charging network across highways, urban centers, and destination hubs.
            </p>
          </div>

          {/* COL 2: QUICK LINKS (LG: 2 COLS) */}
          <div className="lg:col-span-2 space-y-2 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Quick Links
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-1.5 text-sm font-medium pt-1">
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
                    className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: BUSINESS (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-2 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Business
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-1.5 text-sm font-medium text-slate-300 pt-1">
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Become an Investor') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Become an Investor</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Franchise Opportunity') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Franchise Opportunity</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Landowner Partnership') : window.location.href = '#contact'}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Landowner Partnership</span>
                </button>
              </li>
              <li>
                <a
                  href="#charging-stations"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">EV Hub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & SOCIAL MEDIA (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-2 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Contact
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>

            <div className="space-y-2 text-sm font-medium pt-1">
              <a
                href="mailto:evoltekchargeindia@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#32aa15] group-hover:bg-[#32aa15] group-hover:text-white transition-colors shadow-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all sm:break-normal">evoltekchargeindia@gmail.com</span>
              </a>

              <a
                href="tel:18003865835"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#32aa15] group-hover:bg-[#32aa15] group-hover:text-white transition-colors shadow-sm shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>1800-386-5835</span>
              </a>

              {/* Social Media */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Social Media</span>
                <div className="flex items-center gap-2">
                  <a
                    href="#home"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#32aa15] hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#32aa15] hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#32aa15] hover:text-white transition-all shadow-sm"
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
                    className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#32aa15] hover:text-white transition-all shadow-sm"
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

        {/* BOTTOM COPYRIGHT & CREDITS */}
        <div className="pt-2.5 sm:pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-semibold">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Evoltek. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>
              Designed & Developed by{' '}
              <a
                href="https://sunseaz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#32aa15] hover:text-[#38c838] underline underline-offset-2 transition-colors font-bold"
              >
                Sunseaz Technologies Pvt Ltd.
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 sm:p-2.5 bg-[#32aa15] text-white hover:bg-[#288a11] rounded-xl transition-all cursor-pointer group shadow-sm"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
