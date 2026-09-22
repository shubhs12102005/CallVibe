import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Menu, X } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenBooking, isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Integrations', id: 'integrations' },
    { name: 'Blog', id: 'blog' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="glass-header">
      <div className="container">
        <div className="glass-nav-card">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img 
              src="/images/CallVibe-Logo@2x.webp" 
              alt="CallVibe" 
              style={{ height: '32px', width: 'auto', display: 'block' }} 
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  fontSize: '15px',
                  fontWeight: activeTab === item.id ? '700' : '600',
                  color: activeTab === item.id ? '#0A0F1D' : '#4B5563',
                  transition: 'color 0.2s',
                  position: 'relative',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#1E60F4')}
                onMouseLeave={(e) => (e.target.style.color = activeTab === item.id ? '#0A0F1D' : '#4B5563')}
              >
                {item.name}
                {activeTab === item.id && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#1E60F4',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="desktop-ctas">
            <a
              href="https://app.callvibe.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-dark"
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Login</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://app.callvibe.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Start Free Trial
            </a>

            <button
              onClick={onOpenBooking}
              className="btn btn-dark"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Get in Touch</span>
              <MessageSquare size={16} fill="white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              padding: '8px',
              color: '#0F172A',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '10px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: activeTab === item.id ? '700' : '500',
                  color: activeTab === item.id ? '#1E60F4' : '#1E293B',
                  padding: '8px 0',
                  borderBottom: '1px solid #F1F5F9',
                }}
              >
                {item.name}
              </button>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <a
                href="https://app.callvibe.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Login <ArrowUpRight size={16} />
              </a>
              <a
                href="https://app.callvibe.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Start Free Trial
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn btn-dark"
                style={{ width: '100%' }}
              >
                Get in Touch <MessageSquare size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav, .desktop-ctas {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
