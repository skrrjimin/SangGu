import React from 'react';

export default function FooterSection({ onScrollToTop }) {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#85C8FF] to-[#0080FF] pt-24 pb-28 sm:pt-32 sm:pb-36 px-6 sm:px-12 select-none text-center">
      
      {/* Center Content: Bold CONTACT ME! Title + 2 Vertical White Capsule Buttons */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center">
        
        {/* CONTACT ME! - Bold Vivid Blue Typography matching the reference image */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight uppercase leading-none text-[#0080FF] mb-8 sm:mb-10 drop-shadow-sm">
          CONTACT ME!
        </h2>

        {/* 2 Minimal White Capsule (Rounded-full) Buttons - Vertically Centered */}
        <div className="flex flex-col items-center gap-3 sm:gap-3.5 w-full max-w-[200px] sm:max-w-[220px]">
          
          {/* 'x' Capsule Button */}
          <a
            href="https://x.com/oriori_kkk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 sm:py-3 px-6 rounded-full bg-white text-[#0080FF] hover:bg-[#FACC15] hover:text-black transition-all duration-200 font-extrabold text-sm sm:text-base tracking-wider lowercase flex items-center justify-center shadow-md active:scale-95"
          >
            x
          </a>

          {/* 'insta' Capsule Button */}
          <a
            href="https://www.instagram.com/oriori_kk/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 sm:py-3 px-6 rounded-full bg-white text-[#0080FF] hover:bg-[#FACC15] hover:text-black transition-all duration-200 font-extrabold text-sm sm:text-base tracking-wider lowercase flex items-center justify-center shadow-md active:scale-95"
          >
            insta
          </a>

          {/* Email subtle link */}
          <a
            href="mailto:myamu6608@naver.com"
            className="text-[11px] sm:text-xs font-semibold text-white/90 hover:text-white transition-colors mt-1 underline underline-offset-4"
          >
            myamu6608@naver.com
          </a>

        </div>

      </div>

      {/* Bottom Left: Bold '2026' text in Vivid Blue matching the reference image */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-12 z-10">
        <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#0080FF] select-none">
          2026
        </span>
      </div>

    </footer>
  );
}
