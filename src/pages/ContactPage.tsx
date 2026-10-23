import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronRight, CheckCircle2, Send, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactPageProps {
  openModalWithOption: (option: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Franchise Partnership',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const FAQS = [
    {
      q: 'How much land is required to set up an Evoltek Highway Hub?',
      a: 'We require a minimum of 1,500 to 4,000 sq ft of roadside frontage along National/State Highways or high-traffic expressways with safe vehicle entry and exit access.'
    },
    {
      q: 'How does the 50/50 joint venture partnership work?',
      a: 'You invest 50% of the project capital expenditure, and Evoltek contributes the other 50%. Evoltek handles 100% of grid permits, installation, tech, and maintenance, and splits net profits monthly.'
    },
    {
      q: 'How long does it take from agreement to live station charging?',
      a: 'Typically between 45 to 60 days, depending on the local electricity board (DISCOM) high-tension power sanction and transformer commissioning schedule.'
    },
    {
      q: 'Are Evoltek chargers compatible with all electric vehicles in India?',
      a: 'Yes. Our stations support all EV brands including Tata, Mahindra, MG, Hyundai, Kia, BYD, BMW, Mercedes, and Audi, equipped with standard CCS2, Type 2, and Bharat DC protocol guns.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. HERO HEADER WITH AI NOC IMAGE */}
      <section className="relative bg-[#0d131f] text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#32aa15]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#32aa15] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#32aa15]">Contact &amp; 24/7 Operations</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs font-extrabold tracking-widest uppercase">
                <Clock className="w-4 h-4 text-[#32aa15]" />
                <span>24/7 National Operations Command</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                Get in Touch With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#32aa15]">Our Team</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Whether you’re seeking a franchise partnership, offering highway land, or need driver assistance, our nationwide network operations team is available around the clock.
              </p>

              {/* Quick Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#32aa15]/20 text-[#4ade80] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Toll-Free Helpline</p>
                    <p className="text-sm font-bold text-white">1800-386-5835</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Investor &amp; Partner Desk</p>
                    <p className="text-sm font-bold text-white">contact@evoltek.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Image Banner */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img
                  src="/ai_noc_center.jpg"
                  alt="High-Tech 24/7 EV Network Operations Center"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">24/7 NOC Central Command</p>
                    <p className="text-xs text-slate-300">Live Station Telemetry &amp; Rapid Grid Response</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#32aa15]/20 text-[#4ade80] text-xs font-bold border border-[#32aa15]/40 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Live 99.8%
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & REGIONAL HUBS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                Send Us an Enquiry
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the details below and an Evoltek partnership manager will contact you within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#32aa15]/10 border border-[#32aa15]/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#32aa15] text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You! Your Request Has Been Received</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Our partnership director has been notified and will reach out to you at <span className="font-semibold text-slate-900">{formData.phone || formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white text-xs font-bold transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Reddy"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm bg-white"
                      >
                        <option value="Franchise Partnership">Franchise Partnership</option>
                        <option value="Landowner Lease Model">Landowner Lease / Highway Site</option>
                        <option value="50/50 Joint Investment">50/50 Joint Co-Investment</option>
                        <option value="Fleet Charging Solutions">Fleet Charging Solutions</option>
                        <option value="Driver / Customer Support">Driver / Customer Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Location / Proposed City or Highway
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. NH-44 Hyderabad - Bangalore Expressway"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Message or Property Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your property size, investment capacity, or any specific questions..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#32aa15] to-[#288c10] hover:from-[#39bd18] hover:to-[#2e9f13] text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Partnership Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Offices & Locations */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
                <h4 className="text-xl font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                  Corporate Headquarters
                </h4>
                
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#32aa15] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Evoltek Charging Network Pvt Ltd</p>
                      <p>Level 7, Sustainable Mobility Tech Tower</p>
                      <p>Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#32aa15] shrink-0" />
                    <p className="font-semibold text-slate-900">+91 (80) 4920-8000</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#32aa15] shrink-0" />
                    <p className="font-semibold text-slate-900">corporate@evoltek.in</p>
                  </div>
                </div>
              </div>

              {/* Regional Offices Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
                <h4 className="text-lg font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                  Regional Liaison Hubs
                </h4>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900">South Hub - Hyderabad</p>
                    <p className="text-slate-500">HITEC City, Madhapur, Hyderabad, Telangana</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900">North Hub - Delhi NCR</p>
                    <p className="text-slate-500">Cyber City, DLF Phase 2, Gurugram, Haryana</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-slate-900">West Hub - Mumbai</p>
                    <p className="text-slate-500">Bandra Kurla Complex (BKC), Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h4 className="text-xs font-extrabold text-[#32aa15] uppercase tracking-[0.2em] mb-2">COMMON QUESTIONS</h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-100/60"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#32aa15] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
