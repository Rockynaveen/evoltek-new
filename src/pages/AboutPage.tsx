import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Leaf,
  Users,
  Lightbulb,
  Handshake,
  UserCheck,
  MapPin,
  BatteryCharging,
  Headphones,
  Flag,
  Factory,
  Zap,
  Globe,
  Award,
  Box,
  HeartHandshake,
  ChevronRight,
  Target,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  openModalWithOption: (option: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. CINEMATIC BREADCRUMB HERO BANNER WITH OFFICIAL EVOLTEK DC FAST CHARGER */}
      <section className="relative w-full text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36 bg-slate-900">
        {/* Background EV Charging Station with Official EVOLTEK DC Fast Charger */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_center] bg-no-repeat pointer-events-none brightness-105"
          style={{ backgroundImage: `url('/highway charger.png')` }}
        />
        {/* Directional gradient restricted to the left for text contrast, keeping the charger and car bright and vibrant */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[52%] bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest uppercase text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#32aa15]" />
              <span>WHO WE ARE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
              About <span className="text-[#32aa15]">EVOLTEK</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              Building reliable, connected EV charging infrastructure for a cleaner, smarter journey.
            </p>

            {/* Breadcrumb Glass Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 text-sm shadow-xl">
                <Link
                  to="/"
                  className="text-white hover:text-[#32aa15] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Home className="w-4 h-4 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#32aa15] font-semibold">About Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Smooth Curved Wave Mask */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-[50px] sm:h-[75px] lg:h-[105px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C320,115 760,125 1120,50 C1280,18 1380,35 1440,50 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Photo: Man Charging EV */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
                <img
                  src="/about_who_we_are_man.jpg"
                  alt="Young professional charging electric vehicle at Evoltek charging hub"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text & 4 Pillar Features */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
                <span className="text-[#32aa15]">Who</span> We Are
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Evoltek is developing a connected EV charging ecosystem designed for drivers, businesses and investors. From high-quality manufacturing to intelligent technology, we ensure a seamless charging experience while creating sustainable value for the communities we serve.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We combine innovation, reliability and partnerships to accelerate the global transition to electric mobility.
              </p>

              {/* 4 Feature Points in 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {/* Point 1 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-[#edf6eb] text-[#32aa15] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Reliable Infrastructure
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-performance charging stations built for uptime and safety.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-[#edf6eb] text-[#32aa15] flex items-center justify-center mb-2">
                    <Cpu className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Smart Technology
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Intelligent systems for easy access, monitoring and seamless payments.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-[#edf6eb] text-[#32aa15] flex items-center justify-center mb-2">
                    <Leaf className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Sustainable Growth
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Creating long-term value for society, businesses and the planet.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-[#edf6eb] text-[#32aa15] flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Strong Partnerships
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Working together with investors, businesses and communities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PURPOSE SECTION */}
      <section className="py-12 sm:py-16 bg-[#edf6eb]/70">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
              Our Purpose
            </h2>
            <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
          </div>

          {/* 2 Big White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/60 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#e3f4e0] text-[#32aa15] flex items-center justify-center shrink-0">
                {/* Binoculars SVG Icon */}
                <svg className="w-8 h-8 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <path d="M10 10h4" />
                  <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
                  <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
                  <circle cx="7" cy="14" r="5" />
                  <circle cx="17" cy="14" r="5" />
                </svg>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#32aa15] uppercase block">
                  OUR VISION
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  A future where every journey is cleaner, smarter and easier.
                </p>
                <div className="w-8 h-0.5 bg-[#32aa15] pt-0.5 rounded-full" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/60 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#e3f4e0] text-[#32aa15] flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-[#32aa15]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black tracking-widest text-[#32aa15] uppercase block">
                  OUR MISSION
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  To expand accessible, dependable charging infrastructure and help communities transition to electric mobility.
                </p>
                <div className="w-8 h-0.5 bg-[#32aa15] pt-0.5 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VALUES THAT DRIVE US */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
              Values That Drive Us
            </h2>
            <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: <Leaf className="w-6 h-6 text-[#32aa15]" />,
                title: 'Sustainability',
                desc: 'We build solutions that protect the planet and promote a greener future.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#32aa15]" />,
                title: 'Reliability',
                desc: 'Dependable infrastructure and service you can count on, always.'
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-[#32aa15]" />,
                title: 'Innovation',
                desc: 'We embrace new ideas and technologies to deliver smarter solutions.'
              },
              {
                icon: <Handshake className="w-6 h-6 text-[#32aa15]" />,
                title: 'Partnership',
                desc: 'We grow together with our partners, communities and customers.'
              },
              {
                icon: <UserCheck className="w-6 h-6 text-[#32aa15]" />,
                title: 'Customer Focus',
                desc: 'Our customers are at the heart of everything we do.'
              }
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#32aa15]/40 transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#edf6eb] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DRIVING THE FUTURE OF MOBILITY (DARK GREEN BANNER) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="bg-[#0b1f13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#32aa15]/20">

          {/* Subtle background overlay of night canopy */}
          <div
            className="absolute inset-0 bg-cover bg-right opacity-15 mix-blend-screen pointer-events-none"
            style={{ backgroundImage: `url('/about_cta_green_canopy.jpg')` }}
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Wix_Madefor_Display',sans-serif]">
                Driving the Future of Mobility
              </h2>
              <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="pt-4 lg:pt-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-[#4ade80]">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                  50+
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-[160px]">
                  Charging Locations (Deployed &amp; Growing)
                </p>
              </div>

              {/* Stat 2 */}
              <div className="pt-4 lg:pt-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-[#4ade80]">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                  200+
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-[160px]">
                  DC &amp; AC Chargers Installed
                </p>
              </div>

              {/* Stat 3 */}
              <div className="pt-4 lg:pt-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-[#4ade80]">
                  <Handshake className="w-5 h-5" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                  25+
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-[160px]">
                  Partner Collaborations Across India
                </p>
              </div>

              {/* Stat 4 */}
              <div className="pt-4 lg:pt-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-[#4ade80]">
                  <Headphones className="w-5 h-5" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                  24/7
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-[160px]">
                  Monitoring &amp; Support Always On
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR JOURNEY (TIMELINE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
              Our Journey
            </h2>
            <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
          </div>

          <div className="relative">
            {/* Horizontal Connecting Dashed Line on Large Screens */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-300 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  icon: <Flag className="w-6 h-6 text-[#32aa15]" />,
                  title: 'The Beginning',
                  desc: 'Evoltek was founded with a mission to make EV charging simple, reliable and accessible for everyone.'
                },
                {
                  step: '02',
                  icon: <Factory className="w-6 h-6 text-[#32aa15]" />,
                  title: 'Built to Deliver',
                  desc: 'We started manufacturing advanced charging equipment and building in-house technology platforms.'
                },
                {
                  step: '03',
                  icon: <Zap className="w-6 h-6 text-[#32aa15]" />,
                  title: 'Expanding Impact',
                  desc: 'We expanded our solutions across cities, businesses, highways and communities across India.'
                },
                {
                  step: '04',
                  icon: <Users className="w-6 h-6 text-[#32aa15]" />,
                  title: 'Stronger Together',
                  desc: 'We partner with landowners, investors and businesses to create a stronger charging ecosystem.'
                },
                {
                  step: '05',
                  icon: <Globe className="w-6 h-6 text-[#32aa15]" />,
                  title: 'Future Ready',
                  desc: 'We continue to innovate, expand and drive the future of electric mobility together.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                  {/* Circular Icon with Badge */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#edf6eb] border-2 border-white shadow-md flex items-center justify-center text-[#32aa15]">
                      {item.icon}
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#32aa15] text-white text-[10px] font-black shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-base font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-[220px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. "LET'S BUILD A GREENER TOMORROW" CTA BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="bg-[#0b1f13] rounded-3xl overflow-hidden shadow-2xl border border-[#32aa15]/20 grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left Text */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
              Let’s Build a <span className="text-[#4ade80]">Greener</span> Tomorrow.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Join us in building the EV charging network India can rely on.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openModalWithOption('Partner With Us')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4 text-slate-800" />
              </button>
            </div>
          </div>

          {/* Right EV Canopy Image */}
          <div className="lg:col-span-6 h-[260px] sm:h-[320px] lg:h-full relative overflow-hidden">
            <img
              src="/about_cta_green_canopy.jpg"
              alt="Electric car charging at twilight under illuminated green canopy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f13] via-transparent to-transparent lg:block hidden" />
          </div>

        </div>
      </section>

      {/* 8. BOTTOM TRUST STRIP */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8 pb-10">
        <div className="bg-[#edf6eb] rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#32aa15] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">End-to-End Solutions</p>
              <p className="text-xs text-slate-600 mt-0.5">From equipment to power-on.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#32aa15] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Quality Assured</p>
              <p className="text-xs text-slate-600 mt-0.5">Tested. Trusted. Reliable.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#32aa15] shrink-0">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Future Ready</p>
              <p className="text-xs text-slate-600 mt-0.5">Scalable for tomorrow.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#32aa15] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Support You Can Count On</p>
              <p className="text-xs text-slate-600 mt-0.5">Always here, always caring.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
