import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import type { RoiCalculatorState } from '../../types';

interface RoiCalculatorSectionProps {
  roiState: RoiCalculatorState;
  setRoiState: React.Dispatch<React.SetStateAction<RoiCalculatorState>>;
  openModalWithOption: (option: string) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  roiState,
  setRoiState,
  openModalWithOption
}) => {
  const { location, investment, agreement } = roiState;

  // Calculations
  const investorContribution = investment * 0.5;
  const evoltekContribution = investment * 0.5;

  // Return estimation
  // If 5 years: Fixed Return 5% monthly on investor contribution
  // If 10 years: Percentage Return 28% annual return on investor contribution
  const monthlyReturn = agreement === 5 ? investorContribution * 0.05 : (investorContribution * 0.28) / 12;
  const totalReturn = agreement === 5 ? monthlyReturn * 12 * 5 : investorContribution * 0.28 * 10;
  const roiPercentage = ((totalReturn / investorContribution) * 100).toFixed(0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="w-full bg-white py-12 relative overflow-hidden">
      {/* Light Ambient Glow Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#32aa15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Controls */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2.5 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>INTERACTIVE ESTIMATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                Calculate Your ROI Potential
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-snug">
                Estimate your monthly and overall returns based on project scale and agreement duration.
              </p>
            </div>

            {/* Controls Box */}
            <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">

              {/* 1. Location Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Select Hub Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRoiState((prev) => ({ ...prev, location: 'highway' }))}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border cursor-pointer ${
                      location === 'highway'
                        ? 'bg-[#32aa15] text-white border-[#32aa15] shadow-md shadow-[#32aa15]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Highway Station
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoiState((prev) => ({ ...prev, location: 'city' }))}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border cursor-pointer ${
                      location === 'city'
                        ? 'bg-[#32aa15] text-white border-[#32aa15] shadow-md shadow-[#32aa15]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    City Hub
                  </button>
                </div>
              </div>

              {/* 2. Total Project Cost Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-700">Total Project Investment</span>
                  <span className="text-[#32aa15] text-lg font-black">{formatCurrency(investment)}</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={500000}
                  value={investment}
                  onChange={(e) => setRoiState((prev) => ({ ...prev, investment: Number(e.target.value) }))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#32aa15]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>₹10 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                </div>
              </div>

              {/* 3. Tenure Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Agreement Tenure
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRoiState((prev) => ({ ...prev, agreement: 5 }))}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border cursor-pointer ${
                      agreement === 5
                        ? 'bg-[#32aa15] text-white border-[#32aa15] shadow-md shadow-[#32aa15]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    5-Year Plan (Fixed 5% Monthly)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRoiState((prev) => ({ ...prev, agreement: 10 }))}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border cursor-pointer ${
                      agreement === 10
                        ? 'bg-[#32aa15] text-white border-[#32aa15] shadow-md shadow-[#32aa15]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    10-Year Plan (28% Annual Return)
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Live Result Display */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#32aa15]">Estimated Results</span>
                <h3 className="text-2xl font-black text-[#1C2029]">Investment Summary</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#32aa15]/15 text-[#32aa15] flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
                <span className="text-xs text-slate-500 font-medium">Your 50% Share</span>
                <p className="text-lg sm:text-xl font-extrabold text-[#1C2029]">{formatCurrency(investorContribution)}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
                <span className="text-xs text-slate-500 font-medium">Evoltek 50% Share</span>
                <p className="text-lg sm:text-xl font-extrabold text-[#32aa15]">{formatCurrency(evoltekContribution)}</p>
              </div>
            </div>

            <div className="bg-[#32aa15]/10 p-6 rounded-2xl border border-[#32aa15]/25 space-y-4 text-center">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#32aa15]">Est. Monthly Income</span>
                <p className="text-3xl sm:text-4xl font-black text-[#1C2029]">{formatCurrency(monthlyReturn)}</p>
              </div>

              <div className="pt-3 border-t border-[#32aa15]/20 flex justify-around text-xs sm:text-sm font-semibold text-slate-600">
                <div>
                  <span className="text-slate-500 block">Total Est. Return:</span>
                  <span className="text-slate-900 font-bold">{formatCurrency(totalReturn)}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Estimated ROI:</span>
                  <span className="text-[#32aa15] font-bold">~{roiPercentage}%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openModalWithOption(`Investment ROI Plan (${agreement} Year)`)}
              className="w-full py-4 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer"
            >
              <span>Get Detailed ROI Breakdown</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
