import { ArrowUpRight } from 'lucide-react';

interface FranchiseBenefit {
  id: string;
  number: string;
  title: string;
  description: string;
}

const FRANCHISE_BENEFITS: FranchiseBenefit[] = [
  {
    id: 'shared-investment',
    number: '01',
    title: '50% Shared Investment',
    description: 'Evoltek funds half the project.'
  },
  {
    id: 'return-options',
    number: '02',
    title: 'Multiple Return Options',
    description: 'Choose percentage or fixed return.'
  },
  {
    id: 'long-term-security',
    number: '03',
    title: 'Long-Term Security',
    description: '5 or 10-year agreements.'
  },
  {
    id: 'managed-operations',
    number: '04',
    title: 'Managed Operations',
    description: 'Evoltek handles technical operations and maintenance.'
  },
  {
    id: 'fast-dc-charging',
    number: '05',
    title: 'Fast DC Charging',
    description: 'Highway and city charging solutions.'
  },
  {
    id: 'additional-income',
    number: '06',
    title: 'Additional Income',
    description: 'Add cafeteria, restaurant or gaming facilities.'
  },
  {
    id: 'landowner-opportunity',
    number: '07',
    title: 'Landowner Opportunity',
    description: 'Provide land and earn rent.'
  },
  {
    id: 'quick-launch',
    number: '08',
    title: 'Quick Launch',
    description: 'Station setup in about 2 months.'
  }
];

interface FranchiseSectionProps {
  openModalWithOption: (option: string) => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({ openModalWithOption }) => {
  return (
    <section id="franchise" className="w-full bg-white text-slate-900 py-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#32aa15]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Exactly matches the remaining sections */}
        <div className="text-center max-w-5xl mx-auto space-y-1.5 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>FRANCHISE OPPORTUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.1] font-['Wix_Madefor_Display',sans-serif] uppercase">
            Build Your Own EV Charging Business With Evoltek
          </h2>
        </div>

        {/* Content Layout: Left Graphic & CTA | Right 2 Cards Per Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">

          {/* Left Column: Top Description & CTA Button | Bottom-Anchored EV Car Image */}
          <div className="lg:col-span-5 flex flex-col justify-between items-center text-center lg:text-left lg:items-start h-full">

            {/* Top Content Block: Description & CTA Button (Starts at same point as Cards) */}
            <div className="space-y-4 sm:space-y-5 w-full">
              {/* Description Text */}
              <p className="text-slate-900 text-base sm:text-lg font-medium leading-relaxed max-w-md">
                Partner with India&apos;s fastest-growing EV charging network. Co-invest with Evoltek and build a high-yielding, turnkey charging hub with zero operational friction.
              </p>

              {/* Pill CTA Button */}
              <div>
                <button
                  onClick={() => openModalWithOption('Franchise Opportunity')}
                  className="inline-flex items-center gap-3 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg shadow-[#32aa15]/25 hover:shadow-xl hover:shadow-[#32aa15]/30 transition-all duration-300 group cursor-pointer active:scale-95"
                >
                  <span>Apply for Franchise</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#32aa15] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </div>

            {/* EV Car & Charger Graphic Image (Ends at exact same point as Cards) */}
            <div className="w-full max-w-[500px] mx-auto lg:mx-0 flex items-end justify-center lg:justify-start mt-6 lg:mt-auto p-0">
              <img
                src="/franchise_car_station.png"
                alt="Evoltek EV Car Fast Charging Station"
                className="w-full h-auto block object-contain object-bottom drop-shadow-md select-none pointer-events-none"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Benefit Cards Grid (2 cards per row - 8 cards in 4 equal rows) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 h-full content-between">
            {FRANCHISE_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="bg-white hover:bg-[#d1e7a7] rounded-2xl border border-slate-200/85 p-4.5 sm:p-5 shadow-none transition-all duration-300 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden cursor-pointer"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-[#32aa15] text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-sm font-['Wix_Madefor_Display',sans-serif]">
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-['Wix_Madefor_Display',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
