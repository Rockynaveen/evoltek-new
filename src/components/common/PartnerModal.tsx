import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Building2, MapPin, Zap, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface PartnerModalProps {
  partnerModalOpen: boolean;
  setPartnerModalOpen: (open: boolean) => void;
  modalOption: string;
  setModalOption: (option: string) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  partnerModalOpen,
  setPartnerModalOpen,
  modalOption,
  setModalOption
}) => {
  // Tab state: 'franchise' (Franchise Partner Form) or 'landowner' (Landowner Host Form)
  const [activeTab, setActiveTab] = useState<'franchise' | 'landowner'>('franchise');

  // Form 1: Franchise Partner State
  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentRange: '₹25 Lakhs – ₹50 Lakhs',
    landStatus: 'Own Land Available',
    notes: ''
  });

  // Form 2: Landowner Partner State
  const [landownerForm, setLandownerForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyLocation: '',
    propertyType: 'Highway Dhaba / Restaurant',
    spaceAvailable: '2 – 4 Parking Bays (~1,000 sq ft)',
    powerStatus: '3-Phase Power Available',
    revenuePreference: 'Fixed Monthly Rental',
    notes: ''
  });

  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    type: string;
  }>({ name: '', phone: '', type: '' });

  // Sync tab with initial modal option when opened
  useEffect(() => {
    if (modalOption.toLowerCase().includes('land')) {
      setActiveTab('landowner');
    } else {
      setActiveTab('franchise');
    }
  }, [modalOption]);

  if (!partnerModalOpen) return null;

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({
      name: franchiseForm.name,
      phone: franchiseForm.phone,
      type: 'Franchise Partner'
    });
    setModalSubmitted(true);
  };

  const handleLandownerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({
      name: landownerForm.name,
      phone: landownerForm.phone,
      type: 'Landowner Partnership'
    });
    setModalSubmitted(true);
  };

  const handleResetAndClose = () => {
    setModalSubmitted(false);
    setPartnerModalOpen(false);
    setFranchiseForm({
      name: '',
      phone: '',
      email: '',
      city: '',
      investmentRange: '₹25 Lakhs – ₹50 Lakhs',
      landStatus: 'Own Land Available',
      notes: ''
    });
    setLandownerForm({
      name: '',
      phone: '',
      email: '',
      propertyLocation: '',
      propertyType: 'Highway Dhaba / Restaurant',
      spaceAvailable: '2 – 4 Parking Bays (~1,000 sq ft)',
      powerStatus: '3-Phase Power Available',
      revenuePreference: 'Fixed Monthly Rental',
      notes: ''
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setPartnerModalOpen(false)}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Header */}
        <div className="bg-[#171E23] text-white p-5 sm:p-7 shrink-0 relative border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#32aa15] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
                <Sparkles className="w-3.5 h-3.5 text-[#32aa15]" />
                <span>FRANCHISE OPPORTUNITY PORTAL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                Partner With Evoltek Network
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
                Choose the partnership form that fits you best — invest as a franchise co-owner or monetize your vacant land.
              </p>
            </div>
            <button
              onClick={() => setPartnerModalOpen(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10 shrink-0 cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* 2 Best Forms Tab Switcher */}
          {!modalSubmitted && (
            <div className="mt-5 grid grid-cols-2 gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/10">
              {/* Tab 1: Franchise Partner */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('franchise');
                  setModalOption('Franchise Opportunity');
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === 'franchise'
                    ? 'bg-[#32aa15] text-white shadow-md shadow-[#32aa15]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="truncate">1. Franchise Partner Form</span>
              </button>

              {/* Tab 2: Landowner Partner */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('landowner');
                  setModalOption('Landowner Partnership');
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === 'landowner'
                    ? 'bg-[#32aa15] text-white shadow-md shadow-[#32aa15]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">2. Landowner Partner Form</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 text-slate-800">
          {modalSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-[#32aa15] rounded-full flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-[#32aa15]/10 text-[#32aa15] rounded-full text-xs font-bold uppercase tracking-wider">
                  Application Confirmed
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Thank You, {submittedData.name}!
                </h4>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your <strong>{submittedData.type}</strong> application has been successfully submitted.
                </p>
              </div>

              {/* Follow-up Note Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <PhoneCall className="w-4 h-4 text-[#32aa15]" />
                  <span>Next Steps (Within 24 Hours):</span>
                </div>
                <p>
                  1. Our EV Infrastructure Feasibility specialist will call you at <strong className="text-slate-900">{submittedData.phone}</strong>.
                </p>
                <p>
                  2. We will share location footfall metrics, projected ROI models, and equipment sanction details.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm rounded-full shadow-lg shadow-[#32aa15]/20 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* FORM 1: FRANCHISE PARTNER FORM */}
              {activeTab === 'franchise' && (
                <form onSubmit={handleFranchiseSubmit} className="space-y-4">
                  <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-700">
                    <Zap className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                    <span>
                      <strong>Franchise Co-Investment Model:</strong> Evoltek funds 50% of the hardware and project cost with turnkey setup & management.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.name}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={franchiseForm.phone}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={franchiseForm.email}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Target City / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.city}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, city: e.target.value }))}
                        placeholder="e.g. Bangalore, Hyderabad, Pune Highway"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Planned Investment Range
                      </label>
                      <select
                        value={franchiseForm.investmentRange}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, investmentRange: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs (Dual DC Fast Charger)</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore (Multi-Gun Highway Station)</option>
                        <option value="₹1 Crore+">₹1 Crore+ (Mega EV Hub with Cafeteria)</option>
                        <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Site / Land Readiness
                      </label>
                      <select
                        value={franchiseForm.landStatus}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, landStatus: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Own Land Available">I own suitable land / commercial property</option>
                        <option value="Leased Site Ready">I have leased land ready for EV setup</option>
                        <option value="Need Evoltek Site Selection">Need Evoltek assistance for location & setup</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Additional Message / Experience (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={franchiseForm.notes}
                      onChange={(e) => setFranchiseForm((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Tell us about your business background or target highway/city location..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer active:scale-98"
                  >
                    <span>Submit Franchise Application</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}

              {/* FORM 2: LANDOWNER PARTNER FORM */}
              {activeTab === 'landowner' && (
                <form onSubmit={handleLandownerSubmit} className="space-y-4">
                  <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                    <span>
                      <strong>Host an EV Station:</strong> Transform idle land or parking bays into steady monthly revenue with zero equipment investment.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Owner / Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={landownerForm.name}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Suresh Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={landownerForm.phone}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={landownerForm.email}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="suresh@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Location / Highway *
                      </label>
                      <input
                        type="text"
                        required
                        value={landownerForm.propertyLocation}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, propertyLocation: e.target.value }))}
                        placeholder="e.g. NH-44 near toll plaza, or City Prime Road"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Type
                      </label>
                      <select
                        value={landownerForm.propertyType}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, propertyType: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Highway Dhaba / Restaurant">Highway Dhaba / Food Court / Restaurant</option>
                        <option value="Petrol Pump / Fuel Outlet">Petrol Pump / Fuel Station</option>
                        <option value="Commercial Complex / Mall / Hotel">Commercial Complex / Mall / Hotel</option>
                        <option value="Open Highway Land Parcel">Open Highway Roadside Land Parcel</option>
                        <option value="City Parking Lot / Commercial Plot">City Parking Lot / Commercial Plot</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Available Area
                      </label>
                      <select
                        value={landownerForm.spaceAvailable}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, spaceAvailable: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="2 – 4 Parking Bays (~1,000 sq ft)">2 – 4 Parking Bays (~1,000 sq ft)</option>
                        <option value="5 – 10 Parking Bays (~2,500 sq ft)">5 – 10 Parking Bays (~2,500 sq ft)</option>
                        <option value="Large Land Parcel (0.25 - 1+ Acre)">Large Land Parcel (0.25 – 1+ Acre)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Power / Grid Connection
                      </label>
                      <select
                        value={landownerForm.powerStatus}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, powerStatus: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="3-Phase Power Available">Commercial 3-Phase Power Available</option>
                        <option value="Dedicated Transformer on Site">Dedicated HT / LT Transformer on Site</option>
                        <option value="Need Evoltek Power Sanction Support">Need Evoltek Support for Power Connection</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Preferred Earning Model
                      </label>
                      <select
                        value={landownerForm.revenuePreference}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, revenuePreference: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Fixed Monthly Rental">Fixed Monthly Land Rental</option>
                        <option value="Revenue Share per Unit">Revenue Share per EV Charging Session</option>
                        <option value="Hybrid (Base Rent + Revenue Share)">Hybrid (Base Rent + Revenue Share)</option>
                        <option value="Open to Discussion">Open to Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Property Details & Landmarks (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={landownerForm.notes}
                      onChange={(e) => setLandownerForm((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Share road frontage, nearby amenities, or specific property features..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer active:scale-98"
                  >
                    <span>Submit Landowner Proposal</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}

              {/* Trust Badges Strip */}
              <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#32aa15]" />
                  <span>50/50 Co-Investment</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <Zap className="w-4 h-4 text-[#32aa15]" />
                  <span>Turnkey Setup & Mgmt</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <PhoneCall className="w-4 h-4 text-[#32aa15]" />
                  <span>24hr Quick Callback</span>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
