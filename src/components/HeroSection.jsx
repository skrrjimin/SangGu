import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0080FF] via-[#389FFF] to-[#A3D7FF] text-white pt-10 sm:pt-16 pb-20 sm:pb-32 px-6 sm:px-12 md:px-16 select-none">
      
      {/* Decorative Yellow (#FACC15) Curved Scribble Line matching the reference image */}
      <div className="absolute top-[40px] sm:top-[50px] left-[32%] sm:left-[36%] md:left-[38%] right-0 h-[220px] sm:h-[320px] md:h-[400px] pointer-events-none z-0">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 800 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Main yellow curved loop & rolling line */}
          <path
            d="M 10 240 C 40 180, 80 100, 150 70 C 230 35, 290 80, 270 180 C 250 260, 180 270, 160 210 C 140 140, 220 80, 310 70 C 420 58, 520 130, 600 130 C 670 130, 740 105, 820 90"
            stroke="#FACC15"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Title Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="font-black uppercase tracking-tight text-white leading-[0.82] text-left drop-shadow-sm font-display">
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight">
            SANGGU
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight mt-1">
            PORTFOLIO
          </span>
        </h1>
      </div>

    </section>
  );
}
