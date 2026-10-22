import React from 'react';

export default function WebtoonGrid({ projects, selectedProject, onSelectProject }) {
  const handleClick = (project) => {
    onSelectProject(project);
    const detailEl = document.getElementById('series-detail');
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="webtoon" className="w-full bg-[#F3F4F6] py-10 sm:py-14 px-6 sm:px-12 md:px-16 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        
        {/* Left-aligned Bold Vivid Blue 'WEBTOON' Section Header */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-[#0080FF] uppercase">
            WEBTOON
          </h2>
        </div>

        {/* 3x4 Aspect Ratio Cards - 3 Columns matching the image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl">
          {projects.map((project, idx) => {
            const isSelected = selectedProject?.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => handleClick(project)}
                className="group cursor-pointer flex flex-col text-left transition-all duration-200"
              >
                {/* 3:4 Aspect Ratio Gray Solid Card / Thumbnail with '3x4' text placeholder */}
                <div 
                  className={`relative w-full aspect-[3/4] bg-[#9CA3AF] flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'ring-4 ring-[#0080FF] shadow-lg' 
                      : 'hover:brightness-95'
                  }`}
                >
                  {/* '3x4' centered text matching the reference image */}
                  <span className="text-xl sm:text-2xl font-bold text-gray-800/80 font-sans select-none">
                    3x4
                  </span>

                  {/* Active selection tag */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#0080FF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      선택됨
                    </div>
                  )}
                </div>

                {/* Bottom Text: Title and '글/그림' */}
                <div className="mt-2.5 flex flex-col items-start leading-tight">
                  <h3 className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                    isSelected ? 'text-[#0080FF]' : 'text-gray-900 group-hover:text-[#0080FF]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-normal mt-0.5">
                    {project.author || "글/그림"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
