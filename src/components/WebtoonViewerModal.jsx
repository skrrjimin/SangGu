import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Star, Heart, ArrowUp } from './Icons';

export default function WebtoonViewerModal({ project, episode, onClose, onSelectEpisode }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Lock background scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Reset scroll position when switching episode
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setScrollPercent(0);
    }
  }, [episode?.id]);

  if (!episode) return null;

  const currentIdx = project.episodes.findIndex(ep => ep.id === episode.id);
  const prevEp = currentIdx > 0 ? project.episodes[currentIdx - 1] : null;
  const nextEp = currentIdx < project.episodes.length - 1 ? project.episodes[currentIdx + 1] : null;

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll > 0) {
      setScrollPercent(Math.min(100, Math.max(0, (el.scrollTop / maxScroll) * 100)));
    } else {
      setScrollPercent(0);
    }
  };

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setScrollPercent(val);
    const el = scrollContainerRef.current;
    if (el) {
      const maxScroll = el.scrollHeight - el.clientHeight;
      el.scrollTop = (val / 100) * maxScroll;
    }
  };

  const scrollToViewerTop = () => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center">
      {/* Container (Mobile Aspect Centered on Desktop) */}
      <div className="w-full max-w-2xl h-full bg-white flex flex-col shadow-2xl relative">
        {/* Viewer Top Nav Bar */}
        <div className="h-14 px-4 bg-white/95 backdrop-blur border-b border-[#E5E7EB] flex items-center justify-between z-20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              title="닫기"
            >
              <X size={20} />
            </button>
            <div className="leading-tight">
              <span className="text-[11px] font-bold text-[#0080FF] uppercase tracking-wider block">
                {project.title}
              </span>
              <h3 className="text-sm font-bold text-gray-900 truncate max-w-[200px] sm:max-w-[280px]">
                {episode.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {episode.rating && (
              <span className="text-xs font-bold text-yellow-500 flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-200">
                <Star size={12} className="fill-yellow-500" />
                {episode.rating}
              </span>
            )}
            <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              {Math.round(scrollPercent)}%
            </span>
          </div>
        </div>

        {/* Vertical Scroll Webtoon Cuts Area */}
        <div 
          id="viewer-scroll-container"
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-scroll bg-[#F8F9FA]"
        >
          {/* Webtoon Content Stream */}
          <div className="w-full mx-auto flex flex-col min-h-screen bg-white">
            {/* Episode Title Card */}
            <div className="text-center py-8 px-4 border-b border-gray-200">
              <span className="text-xs font-mono font-bold text-[#0080FF] tracking-widest block mb-1">
                EPISODE {episode.epNumber || episode.id}
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                {episode.title}
              </h2>
              <div className="text-xs text-gray-500">
                {project.author}
              </div>
            </div>

            {/* Cuts Stream - Seamless vertical webtoon scroll (gap-0) */}
            <div className="w-full flex flex-col gap-0">
              {episode.cuts?.map((cut, idx) => {
                if (cut.type === 'narration') {
                  return (
                    <div key={idx} className="my-8 mx-4 px-6 py-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
                      <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed italic">
                        “{cut.text}”
                      </p>
                    </div>
                  );
                }

                if (cut.type === 'panel') {
                  return (
                    <div key={idx} className="w-full m-0 p-0 leading-none">
                      <img 
                        src={cut.imageUrl} 
                        alt={cut.caption || `웹툰 컷 ${idx + 1}`} 
                        className="block w-full h-auto m-0 p-0 select-none"
                      />
                      {cut.caption && (
                        <span className="block text-[11px] font-mono text-gray-400 text-center py-1">
                          {cut.caption}
                        </span>
                      )}
                    </div>
                  );
                }

                if (cut.type === 'dialogue') {
                  return (
                    <div key={idx} className="my-3 mx-4 flex flex-col items-center">
                      <div className="max-w-xs px-5 py-3 rounded-2xl bg-[#0080FF] text-white shadow-md text-center text-sm font-semibold leading-relaxed">
                        {cut.text}
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 mt-1 uppercase">
                        {cut.speaker}
                      </span>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* End of Episode Card */}
            <div className="mt-12 mx-4 p-8 bg-white rounded-2xl border border-gray-200 text-center shadow-sm">
              <span className="text-xs font-bold text-[#0080FF] uppercase tracking-wider block mb-1">
                END OF EPISODE {episode.epNumber || episode.id}
              </span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                재미있게 보셨나요?
              </h4>
              <p className="text-xs text-gray-500 mb-6">
                졸업전시 웹툰 포트폴리오를 감상해 주셔서 감사합니다.
              </p>

              {/* Star Rating & Like */}
              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-200">
                  <Heart size={14} className="fill-red-500" />
                  <span>좋아요</span>
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <div className="text-center py-6">
              <button 
                onClick={scrollToViewerTop}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0080FF] font-medium"
              >
                <ArrowUp size={14} /> 맨 위로 이동
              </button>
            </div>
          </div>
        </div>

        {/* Viewer Bottom Scrollbar Slider & Pagination */}
        <div className="px-4 py-2.5 bg-white border-t border-[#E5E7EB] flex flex-col gap-2 flex-shrink-0">
          {/* Interactive Scroll Progress Bar */}
          <div className="flex items-center gap-3 px-1">
            <span className="text-[11px] font-mono font-bold text-[#0080FF] w-9 text-right">
              {Math.round(scrollPercent)}%
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={scrollPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0080FF]"
              title="드래그하여 스크롤 이동"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              disabled={!prevEp}
              onClick={() => prevEp && onSelectEpisode(prevEp)}
              className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                prevEp ? 'hover:bg-gray-100 text-gray-700' : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={16} />
              <span>이전화</span>
            </button>

            <span className="text-xs font-mono text-gray-500 font-bold">
              {episode.epNumber || episode.id} / {project.episodes.length}
            </span>

            <button
              disabled={!nextEp}
              onClick={() => nextEp && onSelectEpisode(nextEp)}
              className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                nextEp ? 'hover:bg-gray-100 text-gray-700' : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <span>다음화</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

