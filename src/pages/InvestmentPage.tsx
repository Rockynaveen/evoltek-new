import React from 'react';
import { TrendingUp, Coins, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestmentPageProps {
  openModalWithOption: (option: string) => void;
}

export const InvestmentPage: React.FC<InvestmentPageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. HERO WITH AI INVESTMENT BOARDROOM VISUAL */}
      <section className="relative bg-[#0d131f] text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#32aa15] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#32aa15]">50/50 Joint Investment Model</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs font-extrabold tracking-widest uppercase">
                <Coins className="w-4 h-4 text-[#32aa15]" />
                <span>High-Yield EV Asset Class</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                Invest 50%. We Invest 50%. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#32aa15]">Share 100% of the Upside.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Unlock double-digit annualized passive returns in India’s fastest growing clean mobility sector. Evoltek co-invests equal capital and manages 100% of the operational and technological heavy lifting.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openModalWithOption('Investment Proposal Request')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#32aa15] to-[#288c10] hover:from-[#39bd18] hover:to-[#2e9f13] text-white font-bold text-sm shadow-[0_10px_25px_rgba(50,170,21,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Investor Deck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/roi-calculator"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                >
                  Interactive ROI Calculator
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">22-30%</p>
                  <p className="text-xs text-slate-400 mt-1">Projected Annual IRR</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#4ade80] font-['Wix_Madefor_Display',sans-serif]">50 / 50</p>
                  <p className="text-xs text-slate-400 mt-1">Equal Risk Sharing</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">Monthly</p>
                  <p className="text-xs text-slate-400 mt-1">Direct Profit Payouts</p>
                </div>
              </div>
            </div>

            {/* AI Image Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/ai_investment_growth.jpg"
                  alt="Corporate Executives and Investors Reviewing Digital EV Network Growth"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Institutional Co-Investment</p>
                    <p className="text-xs text-slate-300">Audited Telematics &amp; Live App Revenue Payouts</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#32aa15]/20 text-[#4ade80] text-xs font-bold border border-[#32aa15]/40 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Audited Model
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW THE 50/50 JOINT VENTURE WORKS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">HOW IT WORKS</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              Zero Friction. Maximum Alignment.
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Unlike traditional franchise models where you carry 100% of the hardware risk, Evoltek puts its own capital on the line side-by-side with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#32aa15]/10 text-[#32aa15] flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Wix_Madefor_Display',sans-serif]">50% Shared Capital</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                You fund 50% of the total station expenditure (chargers, civil setup, electrical infrastructure). Evoltek contributes the other 50% upfront.
              </p>
              <div className="text-xs font-semibold text-[#32aa15]">Equal Skin in the Game</div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Wix_Madefor_Display',sans-serif]">100% Managed Execution</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Evoltek handles DISCOM grid approvals, high-voltage transformer commissioning, regular maintenance, customer billing, and 24/7 tech support.
              </p>
              <div className="text-xs font-semibold text-blue-600">Completely Hands-Off for You</div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Wix_Madefor_Display',sans-serif]">Monthly Profit Payouts</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Receive automated monthly payouts credited directly to your bank account, fully backed by real-time telematics dashboards accessible via mobile app.
              </p>
              <div className="text-xs font-semibold text-purple-600">Digital Transparency Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INVESTMENT TIERS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">OPPORTUNITY PACKAGES</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              Curated Investment Tiers
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Choose the deployment tier that matches your investment appetite and strategic location preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="rounded-3xl p-8 border border-slate-200 bg-slate-50 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tier 1 • Destination Hub</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-1 font-['Wix_Madefor_Display',sans-serif]">Commercial Urban Plaza</h3>
                <p className="text-xs text-slate-600 mb-6">For shopping malls, hotel chains, and corporate parks.</p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6">
                  <p className="text-xs text-slate-400 font-semibold">Your 50% Capital Contribution</p>
                  <p className="text-3xl font-black text-slate-900 mt-1 font-['Wix_Madefor_Display',sans-serif]">₹15 Lakhs</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Total project cost ₹30 Lakhs</p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>1x 60kW Dual DC Fast Charger</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>2x 22kW Smart AC Destination Guns</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Estimated Monthly Payout: ₹45,000 - ₹65,000</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Payback Period: ~2.5 - 3.2 Years</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('Invest: Commercial Urban Plaza (₹15L)')}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Inquire Tier 1
              </button>
            </div>

            {/* Tier 2 - Highlighted */}
            <div className="rounded-3xl p-8 border-2 border-[#32aa15] bg-gradient-to-b from-[#32aa15]/5 to-transparent relative shadow-2xl flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#32aa15] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                MOST POPULAR
              </div>

              <div>
                <span className="text-xs font-bold text-[#32aa15] uppercase tracking-wider">Tier 2 • City Fast Hub</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-1 font-['Wix_Madefor_Display',sans-serif]">Metro Express Station</h3>
                <p className="text-xs text-slate-600 mb-6">High-density commuter and fleet charging hub.</p>

                <div className="p-4 rounded-2xl bg-white border border-[#32aa15]/30 mb-6 shadow-sm">
                  <p className="text-xs text-slate-400 font-semibold">Your 50% Capital Contribution</p>
                  <p className="text-3xl font-black text-slate-900 mt-1 font-['Wix_Madefor_Display',sans-serif]">₹25 Lakhs</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Total project cost ₹50 Lakhs</p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>1x 120kW Superfast Dual DC Charger</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>1x 60kW Fast DC Dispenser</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Estimated Monthly Payout: ₹80,000 - ₹1,20,000</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Payback Period: ~2.2 - 2.8 Years</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('Invest: Metro Express Station (₹25L)')}
                className="w-full py-3.5 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                Inquire Tier 2 (Recommended)
              </button>
            </div>

            {/* Tier 3 */}
            <div className="rounded-3xl p-8 border border-slate-200 bg-slate-50 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tier 3 • Flagship Expressway</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-1 font-['Wix_Madefor_Display',sans-serif]">Highway Mega Hub</h3>
                <p className="text-xs text-slate-600 mb-6">Multi-bay ultra-fast destination on National Expressways.</p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6">
                  <p className="text-xs text-slate-400 font-semibold">Your 50% Capital Contribution</p>
                  <p className="text-3xl font-black text-slate-900 mt-1 font-['Wix_Madefor_Display',sans-serif]">₹50 Lakhs</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Total project cost ₹1 Crore</p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>1x 240kW / 480kW Liquid-Cooled Station</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Multi-gun concurrent EV charging bays</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Estimated Monthly Payout: ₹1,60,000 - ₹2,40,000</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Payback Period: ~2.0 - 2.5 Years</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('Invest: Highway Mega Hub (₹50L)')}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Inquire Tier 3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-16 bg-[#121722] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Wix_Madefor_Display',sans-serif]">
              Ready to secure your location in India’s EV charging grid?
            </h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl">
              Limited slots available per highway corridor to guarantee high charger utilization and superior investor returns.
            </p>
          </div>
          <button
            onClick={() => openModalWithOption('Investor Discussion')}
            className="px-8 py-4 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all shrink-0 cursor-pointer"
          >
            Schedule Partner Meeting
          </button>
        </div>
      </section>

    </div>
  );
};
