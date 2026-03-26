
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import SocialistProgramme from './components/SocialistProgramme';
import PressSection from './components/PressSection';
import ProductionUnits from './components/ProductionUnits';
import EventsCalendar from './components/EventsCalendar';
import OrgSlider from './components/OrgSlider';
import Publications from './components/Publications';
import Footer from './components/Footer';
import NewsPage from './components/NewsPage';
import SangharshaPage from './components/SangharshaPage';
import MembershipPage from './components/MembershipPage';
import AboutPage from './components/AboutPage';
import BicharPage from './components/BicharPage';
import SangathanatmakPage from './components/SangathanatmakPage';
import CalendarPage from './components/CalendarPage';
import ItihasPage from './components/ItihasPage';
import BaigyanikSamajwadPage from './components/BaigyanikSamajwadPage';
import DarsanPage from './components/DarsanPage';
import SangathanatmakBidhiPage from './components/SangathanatmakBidhiPage';
import DastabeezPage from './components/DastabeezPage';
import BigyanPrabidhiPage from './components/BigyanPrabidhiPage';
import GalleryPage from './components/GalleryPage';
import SamajwadiKaryakramPage from './components/SamajwadiKaryakramPage';
import NaraPage from './components/NaraPage';

const HomePage: React.FC = () => (
  <div className="home-page">
    <section id="home">
      <HeroSlider />
    </section>
    <SocialistProgramme />
    <span id="activities" className="scroll-mt-24 block" />
    <PressSection />
    <ProductionUnits />
    <EventsCalendar />
    <OrgSlider />
    <Publications />
    <div id="membership" className="scroll-mt-24" />
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-red-200 flex flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="ambient-flare pointer-events-none" aria-hidden="true">
        <span className="ambient-blob ambient-blob-1" />
        <span className="ambient-blob ambient-blob-2" />
        <span className="ambient-blob ambient-blob-3" />
        <span className="ambient-dot ambient-dot-1" />
        <span className="ambient-dot ambient-dot-2" />
        <span className="ambient-dot ambient-dot-3" />
      </div>
      
      <main className="site-main flex-grow w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/sangharsha" element={<SangharshaPage />} />
          <Route path="/sangathanatmak" element={<SangathanatmakPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/samajwadi-karyakram" element={<SamajwadiKaryakramPage />} />
          <Route path="/bichar" element={<BicharPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/history" element={<ItihasPage />} />
          <Route path="/scientific-socialism" element={<BaigyanikSamajwadPage />} />
          <Route path="/darsan" element={<DarsanPage />} />
          <Route path="/org-method" element={<SangathanatmakBidhiPage />} />
          <Route path="/dastabeez" element={<DastabeezPage />} />
          <Route path="/bigyan-prabidhi" element={<BigyanPrabidhiPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/nara" element={<NaraPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      <div id="contact" className="mt-auto">
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
