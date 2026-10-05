import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  openModalWithOption: (option: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  openModalWithOption
}) => {
  return (
    <>
      {/* TOP WHITE NAVIGATION HEADER */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full shrink-0 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 transition-all duration-300 py-1.5 sm:py-2 text-slate-900 rounded-none ${isScrolled ? 'shadow-lg bg-white/98 py-1' : 'py-1.5 sm:py-2'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap w-full">
          {/* Logo (Left) */}
          <a href="#home" className="flex items-center group py-0 shrink-0">
            <img
              src="/logo.png"
              alt="Evoltek Logo"
              className={`w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain group-hover:scale-105 transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12 md:h-13 lg:h-14' : 'h-12 sm:h-14 md:h-16 lg:h-18'
                }`}
            />
          </a>

          {/* Navigation Links (Center/Right) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-6">
            <a
              href="#home"
              className="font-bold text-sm xl:text-base text-[#32aa15] relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#32aa15] after:rounded-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a
              href="#charging-stations"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              Charging Stations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a
              href="#investment"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              Investment
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a
              href="#franchise"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              Franchise
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a
              href="#roi-calculator"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              ROI Calculator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a
              href="#contact"
              className="font-semibold text-sm xl:text-base text-slate-700 hover:text-[#32aa15] transition-colors relative py-1 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32aa15] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          </nav>

          {/* Become a Partner Green Pill Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => openModalWithOption('Become a Partner')}
              className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-sm sm:text-base py-1.5 sm:py-2 px-5 sm:px-6 rounded-full flex items-center gap-3 shadow-lg shadow-[#32aa15]/25 transition-all duration-300 group active:scale-95 cursor-pointer shrink-0"
            >
              <span className="whitespace-nowrap">Become a Partner</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#32aa15] text-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#32aa15] transition-colors ml-auto"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-slate-900 absolute top-[68px] left-0 right-0 z-40 shadow-xl rounded-b-2xl">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#32aa15]">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">About</a>
          <a href="#charging-stations" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">Charging Stations</a>
          <a href="#investment" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">Investment</a>
          <a href="#franchise" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">Franchise</a>
          <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">ROI Calculator</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-[#32aa15]">Contact</a>
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => { setMobileMenuOpen(false); openModalWithOption('Become a Partner'); }}
              className="w-full py-3.5 bg-[#32aa15] text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#288a11] transition-all"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
