import { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/sections/HeroSection';
import { VisionMissionSection } from './components/sections/VisionMissionSection';
import { AboutSection } from './components/sections/AboutSection';
import { InvestmentModel } from './components/sections/InvestmentModel';
import { ReturnsSection } from './components/sections/ReturnsSection';
import { WhyChooseEvoltek } from './components/sections/WhyChooseEvoltek';
import { ChargingSolutions } from './components/sections/ChargingSolutions';
import { HighwayHubSection } from './components/sections/HighwayHubSection';
import { MobileAppSection } from './components/sections/MobileAppSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { FranchiseSection } from './components/sections/FranchiseSection';
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

      {/* 01. HEADER */}
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        openModalWithOption={openModalWithOption}
      />

      {/* 02. HERO */}
      <HeroSection
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
        openModalWithOption={openModalWithOption}
      />

      {/* 03. ABOUT + VISION */}
      <AboutSection />
      <VisionMissionSection />

      {/* 04. 50/50 INVESTMENT */}
      <InvestmentModel />

      {/* 05. WHY EVOLTEK / SMARTER DIFFERENCE */}
      <WhyChooseEvoltek />

      {/* 06. HIGHWAY EV HUB */}
      <HighwayHubSection />

      {/* 07. CHARGING SOLUTIONS */}
      <ChargingSolutions openModalWithOption={openModalWithOption} />

      {/* 08. INVESTMENT RETURNS */}
      <ReturnsSection openModalWithOption={openModalWithOption} />

      {/* 09. HOW IT WORKS + ROI CALCULATOR */}
      <HowItWorksSection />
      <RoiCalculatorSection
        roiState={roiState}
        setRoiState={setRoiState}
        openModalWithOption={openModalWithOption}
      />
      <FranchiseSection openModalWithOption={openModalWithOption} />

      {/* 10. APP + FRANCHISE */}
      <MobileAppSection />

      {/* 11. CTA BANNER */}
      <CtaSection openModalWithOption={openModalWithOption} />

      {/* 12. FOOTER */}
      <Footer openModalWithOption={openModalWithOption} />

      {/* PARTNER / ENQUIRY MODAL */}
      <PartnerModal
        partnerModalOpen={partnerModalOpen}
        setPartnerModalOpen={setPartnerModalOpen}
        modalOption={modalOption}
        setModalOption={setModalOption}
      />

    </div>
  );
}
