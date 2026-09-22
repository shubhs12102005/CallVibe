import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Integrations from './components/Integrations';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SubPages from './components/SubPages';

// Full dedicated sub-pages
import FeaturesPage from './pages/FeaturesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const path = window.location.pathname.replace('/', '').toLowerCase();
    const target = hash || path;
    const valid = ['features', 'integrations', 'blog', 'about', 'contact', 'reviews', 'terms', 'privacy'];
    return valid.includes(target) ? target : 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialRoute);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      setIsScrolled(scrollY > 50);
    };

    const handlePopState = () => {
      setActiveTab(getInitialRoute());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `#${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenBooking={handleOpenBooking}
        isScrolled={isScrolled}
      />

      {/* Main Page Content Router */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <>
            <Hero onOpenBooking={handleOpenBooking} />
            <Overview />
            <Features />
            <InteractiveDemo />
            <Integrations />
            <CtaBanner
              onOpenBooking={handleOpenBooking}
              onLearnMore={() => handleNavigate('features')}
            />
          </>
        )}

        {activeTab === 'features' && (
          <FeaturesPage onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'integrations' && (
          <IntegrationsPage onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'blog' && (
          <BlogPage onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'about' && (
          <AboutPage onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'contact' && (
          <ContactPage onOpenBooking={handleOpenBooking} />
        )}

        {(activeTab === 'reviews' || activeTab === 'terms' || activeTab === 'privacy') && (
          <SubPages
            currentTab={activeTab}
            onBack={() => handleNavigate('home')}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />

      {/* Floating Bottom Left: Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating Bottom Right: Consultation / Phone Launcher */}
      <button
        onClick={handleOpenBooking}
        className="call-launcher-btn"
        aria-label="Book a call or demo"
        title="Book a call with CallVibe"
      >
        <Phone size={22} />
      </button>

      {/* Cal.com Demo Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
