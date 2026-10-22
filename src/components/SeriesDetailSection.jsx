import React, { useState } from 'react';
import { Star } from './Icons';

export default function SeriesDetailSection({ project, onOpenEpisode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Use selected project directly, fallback to empty object
  const displayProject = project || {};

  return (
    <section id="series-detail" className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Info Box matching the exact Mount Hua reference image */}
        <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 pb-6">
          
          {/* Left: 1:1 or 3:4 Cover Art with Zoom Icon at bottom-right */}
          <div className="w-36 sm:w-44 md:w-48 flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative aspect-square sm:aspect-[3/4] w-full rounded-lg overflow-hidden border border-[#E5E7EB] shadow-sm bg-gray-100">
              <img
                src={displayProject.coverImage}
                alt={displayProject.title}
                className="w-full h-full object-cover filter grayscale"
              />
              {/* Magnifier zoom icon badge at bottom right */}
              <div className="absolute bottom-1.5 right-1.5 bg-black/60 text-white p-1 rounded-sm text-[10px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Title, Authors, Synopsis, Tags */}
          <div className="flex-1 flex flex-col justify-start text-left w-full">
            
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight mb-1">
              {displayProject.title}
            </h2>

            {/* Author & Rating Meta Line with toggle arrow */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-3">
              <span className="truncate pr-2">
                {displayProject.metaLine || "ARCHE · 글/그림 / LICO · 글/그림 / 비가 · 원작 | 수요웹툰 · 15세 이용가"}
              </span>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-gray-700 flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Synopsis Lines */}
            <div className="text-xs text-gray-700 leading-relaxed mb-4 font-normal whitespace-pre-line">
              {displayProject.synopsis || "작품 소개글이 등록되지 않았습니다."}
            </div>

            {/* Hashtag Chips */}
            <div className="flex flex-wrap gap-1.5">
              {displayProject.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] text-gray-600 bg-[#F3F4F6] hover:bg-[#E5E7EB] px-2 py-1 rounded transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Episode List: Divider line & 4 rows with 16:9 thumbnails */}
        <div className="border-t border-[#E5E7EB] pt-4">
          <div className="divide-y divide-[#E5E7EB]">
            {displayProject.episodes?.map((ep) => (
              <div
                key={ep.id}
                onClick={() => onOpenEpisode(ep)}
                className="group flex items-center py-3 sm:py-3.5 px-1 hover:bg-[#F9FAFB] transition-colors cursor-pointer gap-4"
              >
                {/* Left: 16:9 Horizontal Thumbnail */}
                <div className="relative w-24 sm:w-28 aspect-[16/9] flex-shrink-0 rounded overflow-hidden border border-[#E5E7EB] bg-gray-200">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Right: Episode title (179화), Star Rating (★ 9.95), Date (26.10.13) */}
                <div className="flex flex-col text-left justify-center min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#0080FF] transition-colors">
                    {ep.title}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-0.5 text-[#F59E0B] font-bold">
                      <Star size={10} className="fill-[#F59E0B]" />
                      <span className="text-gray-700">{ep.rating}</span>
                    </span>
                    <span>{ep.uploadDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
