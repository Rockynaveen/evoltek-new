import React from 'react';
import { Store, MapPin, CheckCircle2, ChevronRight, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FranchisePageProps {
  openModalWithOption: (option: string) => void;
}

export const FranchisePage: React.FC<FranchisePageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. HERO WITH AI FRANCHISE LOUNGE VISUAL */}
      <section className="relative bg-[#0d131f] text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#32aa15] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#32aa15]">Franchise &amp; Landowner Model</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs font-extrabold tracking-widest uppercase">
                <Store className="w-4 h-4 text-[#32aa15]" />
                <span>Turnkey Highway EV Franchise</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                Own an Evoltek <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#32aa15]">Highway Charging Hub</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Turn your highway property, fuel retail land, or commercial plaza into a thriving lifestyle charging hub. Benefit from India’s EV explosion with zero technical friction and our end-to-end turnkey delivery.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openModalWithOption('Franchise Application')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#32aa15] to-[#288c10] hover:from-[#39bd18] hover:to-[#2e9f13] text-white font-bold text-sm shadow-[0_10px_25px_rgba(50,170,21,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for Franchise</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openModalWithOption('Landowner Site Feasibility')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                >
                  Check Land Feasibility
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">60 Days</p>
                  <p className="text-xs text-slate-400 mt-1">Setup to Launch</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#4ade80] font-['Wix_Madefor_Display',sans-serif]">100%</p>
                  <p className="text-xs text-slate-400 mt-1">Evoltek Tech Support</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">Multiple</p>
                  <p className="text-xs text-slate-400 mt-1">Revenue Streams</p>
                </div>
              </div>
            </div>

            {/* AI Image Banner */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/ai_franchise_hub.jpg"
                  alt="Modern Highway EV Franchise Hub with Traveler Lounge and Cafe"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Highway EV Oasis Franchise</p>
                    <p className="text-xs text-slate-300">Charging Dispensers + Cafe + Traveler Lounge</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#32aa15]/20 text-[#4ade80] text-xs font-bold border border-[#32aa15]/40 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Turnkey Ready
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE FRANCHISE & COLLABORATION MODELS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">PARTNERSHIP FORMATS</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              Tailored for Landowners &amp; Entrepreneurs
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Choose the partnership model that best fits your assets—whether you have vacant land or wish to actively operate a business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model A */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#32aa15]/10 text-[#32aa15] flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">Landowner Lease</h3>
                <p className="text-xs text-[#32aa15] font-extrabold uppercase tracking-wider mb-4">Zero Investment Needed</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Provide your roadside land or parking spaces. Evoltek handles 100% of capital expenditure, transformer installation, and operations. You receive long-term guaranteed monthly rent + revenue share.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Fixed monthly lease rental</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>10-year registered agreement</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Zero financial risk for landowner</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('Landowner Lease Model')}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Monetize Your Land
              </button>
            </div>

            {/* Model B */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#32aa15] shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#32aa15] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                RECOMMENDED
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#32aa15]/10 text-[#32aa15] flex items-center justify-center mb-6">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">50/50 Co-Owner Franchise</h3>
                <p className="text-xs text-[#32aa15] font-extrabold uppercase tracking-wider mb-4">Maximum Return on Capital</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Co-invest 50% with Evoltek. We provide end-to-end station branding, high-power DC chargers, mobile app listing, customer support, and shared profit payouts every month.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>50% shared project cost</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Up to 28% annual return</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Full branding &amp; marketing support</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('50/50 Co-Owner Franchise')}
                className="w-full py-3 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Apply as 50/50 Partner
              </button>
            </div>

            {/* Model C */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">Master Regional Franchise</h3>
                <p className="text-xs text-purple-600 font-extrabold uppercase tracking-wider mb-4">Multi-Station Network</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Secure exclusive development rights across a district or 200km highway corridor. Deploy 5 to 20 stations with preferential tariff pricing and regional exclusivity.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Territorial exclusivity</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Economies of scale equipment discounts</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#32aa15]" /><span>Priority grid clearance support</span></div>
                </div>
              </div>

              <button
                onClick={() => openModalWithOption('Master Regional Franchise')}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Inquire Regional Rights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP SETUP PROCESS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">SEAMLESS ONBOARDING</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              From Land Assessment to Live in 60 Days
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Our specialized engineering and liaison team handles the entire technical lifecycle so you don’t have to deal with complex grid paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Feasibility Audit', desc: 'Detailed GPS traffic analysis, power grid proximity check, and site layout architecture.' },
              { step: '02', title: 'DISCOM Approvals', desc: 'Fast-tracked EV tariff power sanctions and HT line connectivity with local electricity boards.' },
              { step: '03', title: 'Civil & Hardware Setup', desc: 'Civil foundation, transformer installation, canopy construction, and DC fast charger commissioning.' },
              { step: '04', title: 'Grand Launch & App Go-Live', desc: 'Network live telemetry integration, Evoltek App driver navigation, and grand marketing launch.' }
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
                <span className="text-3xl font-black text-[#32aa15]/30 font-['Wix_Madefor_Display',sans-serif] block mb-2">{st.step}</span>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">{st.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-16 bg-[#121722] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Wix_Madefor_Display',sans-serif]">
              Have a location in mind along highways or expressways?
            </h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl">
              Submit your property details and our site audit team will share a free feasibility report within 48 hours.
            </p>
          </div>
          <button
            onClick={() => openModalWithOption('Free Land Feasibility Report')}
            className="px-8 py-4 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all shrink-0 cursor-pointer"
          >
            Get Free Site Audit
          </button>
        </div>
      </section>

    </div>
  );
};
