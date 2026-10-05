import { CreditCard, FileSignature, Rocket, Smartphone } from 'lucide-react';

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'BOOK',
    description: 'Pay a ₹25,000 booking advance and receive an official digital receipt.',
    icon: <CreditCard className="w-6 h-6 stroke-[2.2]" />
  },
  {
    step: 'STEP 02',
    title: 'AGREE',
    description: 'Sign the flexible 5 or 10-year official agreement with renewal options.',
    icon: <FileSignature className="w-6 h-6 stroke-[2.2]" />
  },
  {
    step: 'STEP 03',
    title: 'LAUNCH',
    description: 'Your complete high-speed charging station is fully set up in ~2 months.',
    icon: <Rocket className="w-6 h-6 stroke-[2.2]" />
  },
  {
    step: 'STEP 04',
    title: 'TRACK',
    description: 'Monitor live uptime, revenue, and station health via the Evoltek mobile app.',
    icon: <Smartphone className="w-6 h-6 stroke-[2.2]" />
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#0B1320] text-white py-12 relative overflow-hidden">
      {/* Background Image - Highly Visible with Dark Tint matching reference screenshot */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
        style={{ backgroundImage: `url('/charging_solutions_hub.jpg')` }}
      />
      <div className="absolute inset-0 bg-[#0B1320]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/80 via-transparent to-[#0B1320]/80 pointer-events-none" />

      {/* Dark Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#38c838]/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 border border-[#32aa15]/30 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>WORK PROCESS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
            Simple. fast. reliable.
          </h2>
        </div>

        {/* 4 Cards Grid - Evolta Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white text-slate-900 border border-slate-200/90 p-7 sm:p-8 shadow-md hover:shadow-2xl hover:border-[#38c838] flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)',
                borderTopLeftRadius: '24px',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '24px'
              }}
            >
              <div className="space-y-6">
                {/* Header Row: Step Icon & Number Tag */}
                <div className="flex items-center justify-between gap-3">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-[#38c838]/10 text-[#32aa15] flex items-center justify-center group-hover:bg-[#32aa15] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Step Number Tag */}
                  <div className="bg-slate-100/90 rounded-full px-3 py-1 flex items-center gap-1.5 border border-slate-200/70 group-hover:bg-[#38c838]/10 group-hover:border-[#38c838]/30 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38c838]" />
                    <span className="text-xs font-bold text-slate-600 group-hover:text-[#32aa15] tracking-tight transition-colors duration-300">{item.step}</span>
                  </div>
                </div>

                {/* Title Row with Green Line Accent */}
                <div className="flex items-start gap-3">
                  <div className="w-1 bg-[#38c838] rounded-full shrink-0 self-stretch min-h-[32px] group-hover:scale-y-110 transition-transform duration-300" />
                  <h3 className="text-xl font-extrabold text-[#1C2029] leading-snug tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Thin Divider Line */}
                <div className="w-full h-[1px] bg-slate-100" />

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
