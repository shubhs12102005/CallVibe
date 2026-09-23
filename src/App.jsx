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

// Full dedicated pages
import FeaturesPage from './pages/FeaturesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

/**
 * CallVibe Application Router
 * 
 * Provides clean path-based URL routing (e.g. /features, /integration, /login, /signup)
 * completely eliminating hash anchors (#) and external redirects.
 */
export default function App() {
  /**
   * Resolves the active route from the current URL pathname:
   * - Strips leading/trailing slashes
   * - Strips any old hash format (e.g. /#integration -> /integration)
   * - Maps both /integration and /integrations to the integrations view
   * - Recognizes /login and /signup for native authentication views
   */
  const getInitialRoute = () => {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();

    // If an incoming URL has a hash (e.g. /#integration), clean it automatically
    if (hash) {
      path = hash;
      const cleanPath = hash === 'home' ? '/' : `/${hash}`;
      window.history.replaceState(null, '', cleanPath);
    }

    if (!path || path === 'home') return 'home';
    if (path === 'integration' || path === 'integrations') return 'integrations';
    if (path === 'login') return 'login';
    if (path === 'signup') return 'signup';

    const validRoutes = [
      'features', 
      'integrations', 
      'blog', 
      'about', 
      'contact', 
      'reviews', 
      'terms', 
      'privacy',
      'login',
      'signup'
    ];
    return validRoutes.includes(path) ? path : 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialRoute);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for header glassmorphism and back-to-top floating button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      setIsScrolled(scrollY > 50);
    };

    // Listen to browser Back/Forward navigation
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

  /**
   * Clean URL Navigation Handler
   * 
   * Updates state, pushes a clean path to browser history without '#' symbols,
   * and smoothly scrolls to top.
   */
  const handleNavigate = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated full-screen authentication views
  if (activeTab === 'login') {
    return (
      <LoginPage
        onNavigate={handleNavigate}
      />
    );
  }

  if (activeTab === 'signup') {
    return (
      <SignupPage
        onNavigate={handleNavigate}
      />
    );
  }

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

      {/* Native Interactive Enterprise Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
