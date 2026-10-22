import React from 'react';

export default function MetaNavBar({ activeTab, onTabSelect }) {
  return (
    <nav className="w-full bg-[#FFFFFF] border-y border-[#E5E7EB] sticky top-0 z-40 backdrop-blur-md bg-white/95 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <div className="flex items-center justify-between py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider font-sans overflow-x-auto no-scrollbar gap-4 sm:gap-8">
          
          <button
            onClick={() => onTabSelect && onTabSelect('webtoon')}
            className={`uppercase tracking-widest transition-colors ${
              activeTab === 'webtoon' ? 'text-black font-black' : 'text-gray-800 hover:text-[#0080FF]'
            }`}
          >
            WEBTOON
          </button>

          <button
            onClick={() => onTabSelect && onTabSelect('works')}
            className={`uppercase tracking-widest transition-colors ${
              activeTab === 'works' ? 'text-black font-black' : 'text-gray-800 hover:text-[#0080FF]'
            }`}
          >
            WORKS
          </button>

          <button
            onClick={() => onTabSelect && onTabSelect('collection')}
            className={`uppercase tracking-widest transition-colors ${
              activeTab === 'collection' ? 'text-black font-black' : 'text-gray-800 hover:text-[#0080FF]'
            }`}
          >
            COLLECTION
          </button>

          <span className="uppercase tracking-widest text-gray-700 font-semibold flex-shrink-0">
            2021-2025
          </span>

          {/* Instagram Handle Pill / Badge at the right */}
          <a
            href="https://www.instagram.com/oriori_kk/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 rounded bg-[#EBF5FF] text-[#0080FF] hover:bg-[#0080FF] hover:text-white transition-colors font-bold text-xs flex-shrink-0 border border-[#BEE3FF]"
          >
            @oriori_kk
          </a>

        </div>
      </div>
    </nav>
  );
}
