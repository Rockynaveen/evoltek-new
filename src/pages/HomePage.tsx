import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { AboutSection } from '../components/sections/AboutSection';
import { InvestmentModel } from '../components/sections/InvestmentModel';
import { ReturnsSection } from '../components/sections/ReturnsSection';
import { WhyChooseEvoltek } from '../components/sections/WhyChooseEvoltek';
import { ChargingSolutions } from '../components/sections/ChargingSolutions';
import { HighwayHubSection } from '../components/sections/HighwayHubSection';
import { MobileAppSection } from '../components/sections/MobileAppSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { FranchiseSection } from '../components/sections/FranchiseSection';
import { RoiCalculatorSection } from '../components/sections/RoiCalculatorSection';
import { CtaSection } from '../components/sections/CtaSection';
import type { RoiCalculatorState } from '../types';

interface HomePageProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentHeroSlide: number;
  setCurrentHeroSlide: React.Dispatch<React.SetStateAction<number>>;
  roiState: RoiCalculatorState;
  setRoiState: React.Dispatch<React.SetStateAction<RoiCalculatorState>>;
  openModalWithOption: (option: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  currentHeroSlide,
  setCurrentHeroSlide,
  roiState,
  setRoiState,
  openModalWithOption,
}) => {
  return (
    <>
      {/* 01. HERO */}
      <HeroSection
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
        openModalWithOption={openModalWithOption}
      />

      {/* 02. ABOUT & VISION PREVIEW */}
      <AboutSection />
      <VisionMissionSection />

      {/* 03. 50/50 JOINT INVESTMENT */}
      <InvestmentModel />

      {/* 04. WHY EVOLTEK */}
      <WhyChooseEvoltek />

      {/* 05. HIGHWAY EV HUB */}
      <HighwayHubSection />

      {/* 06. CHARGING SOLUTIONS */}
      <ChargingSolutions openModalWithOption={openModalWithOption} />

      {/* 07. INVESTMENT RETURNS */}
      <ReturnsSection openModalWithOption={openModalWithOption} />

      {/* 08. HOW IT WORKS + ROI CALCULATOR */}
      <HowItWorksSection />
      <RoiCalculatorSection
        roiState={roiState}
        setRoiState={setRoiState}
        openModalWithOption={openModalWithOption}
      />

      {/* 09. FRANCHISE MODEL */}
      <FranchiseSection openModalWithOption={openModalWithOption} />

      {/* 10. MOBILE APP */}
      <MobileAppSection />

      {/* 11. CALL TO ACTION BANNER */}
      <CtaSection openModalWithOption={openModalWithOption} />
    </>
  );
};
