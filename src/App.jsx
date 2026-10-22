import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MetaNavBar from './components/MetaNavBar';
import WebtoonGrid from './components/WebtoonGrid';
import SeriesDetailSection from './components/SeriesDetailSection';
import FooterSection from './components/FooterSection';
import WebtoonViewerModal from './components/WebtoonViewerModal';
import { WEBTOON_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(WEBTOON_PROJECTS[1]);
  const [activeEpisode, setActiveEpisode] = useState(null);
  const [activeTab, setActiveTab] = useState('webtoon');

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    // Smooth scroll down to SeriesDetailSection
    const detailEl = document.getElementById('series-detail');
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'webtoon') {
      const el = document.getElementById('webtoon');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'works') {
      const el = document.getElementById('series-detail');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F2937] flex flex-col font-sans">
      {/* 1. HeroSection : Vivid Blue Gradient + SANGGU PORTFOLIO + Yellow Hand-drawn Line Vector */}
      <HeroSection />

      {/* 2. MetaNavBar : 1-Row Border-line Meta Info Bar */}
      <MetaNavBar 
        activeTab={activeTab} 
        onTabSelect={handleTabSelect} 
      />

      {/* Main Content Area (#F8F9FA) */}
      <main className="flex-1 w-full">
        {/* 3. WebtoonGrid : "WEBTOON" Header + 3x4 Vertical Aspect Ratio 3 Cards */}
        <WebtoonGrid 
          projects={WEBTOON_PROJECTS}
          selectedProject={selectedProject}
          onSelectProject={handleSelectProject}
        />

        {/* 4. SeriesDetailSection : Naver Webtoon Style Detailed View + 16:9 Episodes List */}
        <SeriesDetailSection 
          project={selectedProject}
          onOpenEpisode={(ep) => setActiveEpisode(ep)}
        />
      </main>

      {/* 5. FooterSection : Vivid Blue Gradient + CONTACT ME! + Capsule Pill SNS Buttons + 2026 */}
      <FooterSection onScrollToTop={handleScrollToTop} />

      {/* Webtoon Viewer Modal */}
      {activeEpisode && (
        <WebtoonViewerModal 
          project={selectedProject}
          episode={activeEpisode}
          onClose={() => setActiveEpisode(null)}
          onSelectEpisode={(ep) => setActiveEpisode(ep)}
        />
      )}
    </div>
  );
}
