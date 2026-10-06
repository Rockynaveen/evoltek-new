import React from 'react';
import { Mail, PhoneCall, Building2, Send, CheckCircle2 } from 'lucide-react';
import type { ContactFormData } from '../../types';

interface ContactSectionProps {
  contactForm?: ContactFormData;
  setContactForm?: React.Dispatch<React.SetStateAction<ContactFormData>>;
  contactSubmitted?: boolean;
  handleContactSubmit?: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactForm: propForm,
  setContactForm: propSetForm,
  contactSubmitted: propSubmitted,
  handleContactSubmit: propHandleSubmit
}) => {
  const [internalForm, setInternalForm] = React.useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    interest: 'Investment',
    message: ''
  });
  const [internalSubmitted, setInternalSubmitted] = React.useState(false);

  const contactForm = propForm || internalForm;
  const setContactForm = propSetForm || setInternalForm;
  const contactSubmitted = propSubmitted !== undefined ? propSubmitted : internalSubmitted;
  const handleContactSubmit = propHandleSubmit || ((e: React.FormEvent) => {
    e.preventDefault();
    setInternalSubmitted(true);
  });

  const interestOptions = [
    { id: 'Investment', label: 'Investment' },
    { id: 'Franchise', label: 'Franchise' },
    { id: 'Charging Station', label: 'Charging Station' },
    { id: 'Land Partnership', label: 'Land Partnership' }
  ];

  return (
    <section id="contact" className="w-full bg-white py-12 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-[#1C2029] tracking-tight leading-[1.1] font-['Wix_Madefor_Display',sans-serif]">
                Let's Power the Future Together
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-snug font-normal">
                Connect with the Evoltek team to explore 50/50 joint investment models, franchise setups, EV charging station deployment, or land partnership opportunities across India.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#32aa15]/15 text-[#32aa15] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Email Us</span>
                  <a
                    href="mailto:evoltekchargeindia@gmail.com"
                    className="text-base sm:text-lg font-bold text-[#1C2029] hover:text-[#32aa15] transition-colors break-all"
                  >
                    evoltekchargeindia@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 font-medium">Connect directly with our prospective investment team</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#32aa15]/15 text-[#32aa15] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Call Us</span>
                  <a
                    href="tel:18003865835"
                    className="text-base sm:text-lg font-bold text-[#1C2029] hover:text-[#32aa15] transition-colors"
                  >
                    1800-386-5835
                  </a>
                  <p className="text-xs text-slate-500 font-medium">Toll-free partner hotline (Mon - Sat: 9 AM - 7 PM)</p>
                </div>
              </div>

              {/* HQ Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#32aa15]/15 text-[#32aa15] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Headquarters</span>
                  <p className="text-base font-bold text-[#1C2029]">
                    Evoltek Mobility Infrastructure Ltd.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">Pan-India EV Charging Network Centers</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[32px] border border-slate-200/90 shadow-xl">
            {contactSubmitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 bg-[#32aa15]/15 text-[#32aa15] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1C2029]">Thank You!</h3>
                <p className="text-slate-600 text-base max-w-md mx-auto">
                  Your enquiry has been submitted. An Evoltek partner specialist will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1C2029] tracking-tight font-['Wix_Madefor_Display',sans-serif]">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Fill out the form below and our team will connect with you.
                  </p>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 font-medium text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 font-medium text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address & City/Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 font-medium text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">City / Location</label>
                    <input
                      type="text"
                      value={contactForm.location}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="Your City or State"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 font-medium text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* I am interested in: Radio buttons */}
                <div className="space-y-3 pt-1">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                    I am interested in:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {interestOptions.map((opt) => {
                      const isSelected = contactForm.interest === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#32aa15]/10 border-[#32aa15] text-[#32aa15] shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="interest"
                            value={opt.id}
                            checked={isSelected}
                            onChange={() => setContactForm((prev) => ({ ...prev, interest: opt.id }))}
                            className="w-4 h-4 accent-[#32aa15] cursor-pointer"
                          />
                          <span className="truncate">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Provide additional details regarding your interest, location or investment plan..."
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 font-medium text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit Enquiry Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#32aa15] hover:bg-[#288a11] text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#32aa15]/30 transition-all cursor-pointer active:scale-95"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-5 h-5 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

