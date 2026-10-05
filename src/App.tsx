import { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/sections/HeroSection';
import { VisionMissionSection } from './components/sections/VisionMissionSection';
import { AboutSection } from './components/sections/AboutSection';
import { InvestmentModel } from './components/sections/InvestmentModel';
import { WhyChooseEvoltek } from './components/sections/WhyChooseEvoltek';
import { ChargingSolutions } from './components/sections/ChargingSolutions';
import { HighwayHubSection } from './components/sections/HighwayHubSection';
import { MobileAppSection } from './components/sections/MobileAppSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { RoiCalculatorSection } from './components/sections/RoiCalculatorSection';
import { CtaSection } from './components/sections/CtaSection';
import { Footer } from './components/common/Footer';
import { PartnerModal } from './components/common/PartnerModal';
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
    <div className="min-h-screen bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] p-0 relative">

      {/* TOP STICKY NAVIGATION BAR */}
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openModalWithOption={openModalWithOption}
      />

      {/* 1. TOP FOLD (HERO SECTION) */}
      <HeroSection
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
        openModalWithOption={openModalWithOption}
      />

      {/* 2. ABOUT EVOLTEK SECTION */}
      <AboutSection />

      {/* 3. VISION & MISSION CARDS SECTION */}
      <VisionMissionSection />

      {/* 4. CHARGING SOLUTIONS (STATION CATEGORIES) SECTION */}
      <ChargingSolutions openModalWithOption={openModalWithOption} />

      {/* 5. WHY CHOOSE EVOLTEK SECTION */}
      <WhyChooseEvoltek />

      {/* 6. INVESTMENT & COLLABORATION MODEL SECTION */}
      <InvestmentModel />

      {/* 7. WORK PROCESS (HOW IT WORKS - Simple. Fast. Reliable.) SECTION */}
      <HowItWorksSection />

      {/* HIGHWAY HUBS & RECHARGE EXPERIENCE SECTION */}
      <HighwayHubSection />

      {/* MOBILE APP SHOWCASE SECTION */}
      <MobileAppSection />

      {/* 5. INTERACTIVE ROI CALCULATOR SECTION */}
      <RoiCalculatorSection
        roiState={roiState}
        setRoiState={setRoiState}
        openModalWithOption={openModalWithOption}
      />

      {/* 6. CALL TO ACTION BANNER SECTION */}
      <CtaSection openModalWithOption={openModalWithOption} />

      {/* 7. FOOTER */}
      <Footer openModalWithOption={openModalWithOption} />

      {/* 8. PARTNER / ENQUIRY MODAL */}
      <PartnerModal
        partnerModalOpen={partnerModalOpen}
        setPartnerModalOpen={setPartnerModalOpen}
        modalOption={modalOption}
        setModalOption={setModalOption}
      />

    </div>
  );
}
