import React, { useState } from 'react';
import { Calculator, CheckCircle2, ChevronRight, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoiCalculatorPageProps {
  openModalWithOption: (option: string) => void;
}

export const RoiCalculatorPage: React.FC<RoiCalculatorPageProps> = ({ openModalWithOption }) => {
  const [investment, setInvestment] = useState<number>(2500000); // 25 Lakhs
  const [locationType, setLocationType] = useState<'highway' | 'city' | 'mall'>('highway');
  const [sessionsPerDay, setSessionsPerDay] = useState<number>(35);
  const [agreementYears, setAgreementYears] = useState<number>(5);

  // Calculations
  const averageKwhPerSession = locationType === 'highway' ? 38 : locationType === 'city' ? 24 : 18;
  const tariffPerKwh = 21; // INR per kWh charged to consumer
  const costOfPower = 8.5; // Commercial EV tariff cost
  const grossMarginPerKwh = tariffPerKwh - costOfPower; // ~12.5 INR/kWh

  const monthlyKwh = sessionsPerDay * averageKwhPerSession * 30;
  const grossMonthlyRevenue = monthlyKwh * tariffPerKwh;
  const netMonthlyStationProfit = monthlyKwh * grossMarginPerKwh - 25000; // minus maintenance/telematics

  // 50% Share to Investor
  const investorMonthlyPayout = Math.max(0, Math.round(netMonthlyStationProfit * 0.5));
  const annualPayout = investorMonthlyPayout * 12;
  const annualRoiPercentage = Math.min(38, Math.max(14, Math.round((annualPayout / investment) * 100)));
  const paybackMonths = Math.max(18, Math.round((investment / investorMonthlyPayout)));
  const paybackYears = (paybackMonths / 12).toFixed(1);
  const cumulativeFiveYearReturn = annualPayout * agreementYears;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. HERO HEADER */}
      <section className="relative bg-[#0d131f] text-white pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#32aa15] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#32aa15]">Interactive ROI Calculator</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs font-extrabold tracking-widest uppercase">
              <Calculator className="w-4 h-4 text-[#32aa15]" />
              <span>Real-Time Financial Simulator</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-['Wix_Madefor_Display',sans-serif]">
              Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#32aa15]">50/50 EV Charging Returns</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Simulate cash flow projections based on location dynamics, vehicle footfall, and charger ratings. Discover why Evoltek’s co-investment model delivers unmatched risk-adjusted yields.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CALCULATOR ENGINE */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: SLIDERS & CONTROLS */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                  Adjust Your Investment Variables
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Slide to match your desired capital allocation and anticipated station utilization.
                </p>
              </div>

              {/* Control 1: Investment Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Your 50% Capital Contribution (INR)
                  </label>
                  <span className="text-lg font-black text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
                    ₹{(investment / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="6000000"
                  step="250000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#32aa15]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>₹10 Lakhs (Min)</span>
                  <span>₹25 Lakhs (Standard)</span>
                  <span>₹60 Lakhs (Mega Hub)</span>
                </div>
              </div>

              {/* Control 2: Location Type */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold text-slate-700">
                  Deployment Location Format
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'highway', title: 'Highway Hub', desc: 'Highest kWh usage' },
                    { id: 'city', title: 'Metro Express', desc: 'Continuous turnover' },
                    { id: 'mall', title: 'Mall / Resort', desc: 'Leisure destination' }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocationType(loc.id as any)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        locationType === loc.id
                          ? 'border-[#32aa15] bg-[#32aa15]/10 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                      }`}
                    >
                      <p className={`text-xs sm:text-sm font-bold ${locationType === loc.id ? 'text-[#32aa15]' : 'text-slate-800'}`}>
                        {loc.title}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{loc.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 3: Daily Charging Sessions */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Estimated Daily Charging Sessions (Cars / Day)
                  </label>
                  <span className="text-lg font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    {sessionsPerDay} Sessions
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={sessionsPerDay}
                  onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#32aa15]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>10 (Low traffic)</span>
                  <span>35 (Average Express)</span>
                  <span>80 (Peak Highway Corridor)</span>
                </div>
              </div>

              {/* Control 4: Agreement Duration */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold text-slate-700">
                  Agreement Tenure
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[5, 10].map((years) => (
                    <button
                      key={years}
                      onClick={() => setAgreementYears(years)}
                      className={`p-3 rounded-2xl border font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                        agreementYears === years
                          ? 'border-[#32aa15] bg-[#32aa15] text-white shadow-md'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {years} Years Agreement {years === 10 && '(Renewable)'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: LIVE PROJECTION SUMMARY CARD */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#121722] to-[#0a0f18] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#32aa15]/20 rounded-full blur-[90px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#4ade80] uppercase tracking-wider block mb-1">
                    PROJECTED INVESTOR RETURNS
                  </span>
                  <h3 className="text-2xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                    Your Financial Summary
                  </h3>
                </div>

                {/* Primary Metric: Net Monthly Income */}
                <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <p className="text-xs text-slate-300 font-medium">Estimated Monthly Net Payout to You</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#4ade80] mt-1 font-['Wix_Madefor_Display',sans-serif]">
                    ₹{investorMonthlyPayout.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">Paid directly every month via direct bank transfer</p>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Station Gross Revenue</p>
                    <p className="text-xl font-bold text-white mt-1">₹{Math.round(grossMonthlyRevenue).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Projected Annual IRR</p>
                    <p className="text-xl font-bold text-[#4ade80] mt-1">{annualRoiPercentage}%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">Estimated Payback</p>
                    <p className="text-xl font-bold text-white mt-1">~{paybackYears} Years</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-slate-400 font-medium">{agreementYears}-Yr Cumulative Net</p>
                    <p className="text-xl font-bold text-[#4ade80] mt-1">₹{cumulativeFiveYearReturn.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                    <span>Includes 50% Evoltek capital contribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                    <span>Zero deductions for hardware maintenance or repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                    <span>Live audited power telematics in Evoltek app</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => openModalWithOption(`ROI Consultation (₹${(investment/100000).toFixed(1)}L)`)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#32aa15] to-[#288c10] hover:from-[#39bd18] hover:to-[#2e9f13] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Lock In Your Projected Returns</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openModalWithOption('Download Projected Model PDF')}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Detailed Financial Projection (PDF)</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
