import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { PartnerModal } from './components/common/PartnerModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ChargingStationsPage } from './pages/ChargingStationsPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { FranchisePage } from './pages/FranchisePage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { ContactPage } from './pages/ContactPage';
import type { RoiCalculatorState } from './types';
import { HERO_SLIDES } from './data/siteData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState<string>('General Enquiry');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play hero background carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Interactive ROI Calculator State
  const [roiState, setRoiState] = useState<RoiCalculatorState>({
    location: 'highway',
    investment: 5000000, // Default ₹50 Lakhs total
    agreement: 5
  });

  const openModalWithOption = (optionTitle: string) => {
    setModalOption(optionTitle);
    setPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] p-0 relative flex flex-col justify-between">
      {/* Auto-scroll to top on route change */}
      <ScrollToTop />

      {/* PERSISTENT HEADER NAVIGATION */}
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openModalWithOption={openModalWithOption}
      />

      {/* MAIN ROUTED PAGES */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isScrolled={isScrolled}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                currentHeroSlide={currentHeroSlide}
                setCurrentHeroSlide={setCurrentHeroSlide}
                roiState={roiState}
                setRoiState={setRoiState}
                openModalWithOption={openModalWithOption}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage openModalWithOption={openModalWithOption} />}
          />
          <Route
            path="/charging-stations"
            element={<ChargingStationsPage openModalWithOption={openModalWithOption} />}
          />
          <Route
            path="/investment"
            element={<InvestmentPage openModalWithOption={openModalWithOption} />}
          />
          <Route
            path="/franchise"
            element={<FranchisePage openModalWithOption={openModalWithOption} />}
          />
          <Route
            path="/roi-calculator"
            element={<RoiCalculatorPage openModalWithOption={openModalWithOption} />}
          />
          <Route
            path="/contact"
            element={<ContactPage openModalWithOption={openModalWithOption} />}
          />
        </Routes>
      </main>

      {/* PERSISTENT FOOTER */}
      <Footer openModalWithOption={openModalWithOption} />

      {/* PERSISTENT PARTNER / ENQUIRY MODAL */}
      <PartnerModal
        partnerModalOpen={partnerModalOpen}
        setPartnerModalOpen={setPartnerModalOpen}
        modalOption={modalOption}
        setModalOption={setModalOption}
      />
    </div>
  );
}
