import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  openModalWithOption?: (option: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  openModalWithOption
}) => {
  const location = useLocation();

  const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Charging Stations', path: '/charging-stations' },
    { label: 'Investment', path: '/investment' },
    { label: 'Evoltek Franchise Model', path: '/franchise' },
    { label: 'ROI Calculator', path: '/roi-calculator' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <>
      {/* TOP WHITE NAVIGATION HEADER */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full shrink-0 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 transition-all duration-300 py-0 text-slate-900 rounded-none ${
          isScrolled ? 'shadow-lg bg-white/98' : ''
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap w-full">
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center group py-0 shrink-0">
            <img
              src="/logo.png"
              alt="Evoltek Logo"
              className={`w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain group-hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-12 md:h-13 lg:h-14' : 'h-12 sm:h-14 md:h-16 lg:h-18'
              }`}
            />
          </Link>

          {/* Navigation Links (Right) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] xl:text-[14px] uppercase font-bold transition-colors relative py-1 group tracking-wide ${
                    active ? 'text-[#32aa15]' : 'text-slate-700 hover:text-[#32aa15]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#32aa15] rounded-full transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#32aa15] transition-colors ml-auto cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-slate-900 absolute top-[68px] left-0 right-0 z-40 shadow-xl rounded-b-2xl">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base transition-colors ${
                  active ? 'font-bold text-[#32aa15]' : 'font-semibold text-slate-800 hover:text-[#32aa15]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {openModalWithOption && (
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModalWithOption('General Enquiry');
                }}
                className="w-full py-3 rounded-xl bg-[#32aa15] text-white font-bold text-sm shadow-md"
              >
                Partner Enquiry
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
