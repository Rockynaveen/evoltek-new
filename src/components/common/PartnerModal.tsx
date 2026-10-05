import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

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
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  if (!partnerModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setModalSubmitted(false);
      setPartnerModalOpen(false);
      setModalForm({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200">

        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#32aa15]">Partner With Evoltek</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">{modalOption}</h3>
          </div>
          <button
            onClick={() => setPartnerModalOpen(false)}
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {modalSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#32aa15] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Our team will review your details for <strong>{modalOption}</strong> and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={modalForm.name}
                    onChange={(e) => setModalForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={modalForm.phone}
                    onChange={(e) => setModalForm((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={modalForm.email}
                    onChange={(e) => setModalForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Location / City</label>
                  <input
                    type="text"
                    value={modalForm.location}
                    onChange={(e) => setModalForm((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="City / Highway Location"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Selected Interest</label>
                <input
                  type="text"
                  readOnly
                  value={modalOption}
                  onChange={(e) => setModalOption(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-700 text-sm font-bold cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Additional Details</label>
                <textarea
                  rows={3}
                  value={modalForm.message}
                  onChange={(e) => setModalForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Share details about your site or investment preferences..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer"
              >
                <span>Submit Partnership Form</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
