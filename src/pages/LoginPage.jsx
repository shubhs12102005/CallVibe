import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react';

/**
 * LoginPage Component
 * 
 * Recreates the authentic CallVibe application sign-in experience:
 * - Floating top header pill with brand logo and "Start Free Trial" CTA
 * - Central CallVibe gradient soundwave badge & title
 * - Secure credentials form with show/hide password toggle
 * - Interactive "Forgot password" modal drawer
 * - Complete independence with zero external redirection
 */
export default function LoginPage({ onNavigate }) {
  // Form input state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);

  // Forgot password modal state
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Handle Sign In submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    if (!email || !password) {
      setAuthError('Please fill in both your email address and password.');
      return;
    }

    setIsLoading(true);
    // Simulate authentication verification
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
    }, 900);
  };

  // Handle password reset submission
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail) return;
    setResetSent(true);
  };

  return (
    <div className="auth-page-container">
      {/* Top Floating Navigation Header */}
      <header className="auth-header-pill">
        <div 
          onClick={() => onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          title="Return to CallVibe Homepage"
        >
          <img
            src="/images/CallVibe-Logo@2x.webp"
            alt="CallVibe"
            style={{ height: '28px', width: 'auto' }}
          />
        </div>

        <button
          onClick={() => onNavigate('signup')}
          className="btn btn-primary"
          style={{
            fontSize: '14px',
            padding: '8px 20px',
            borderRadius: '10px',
          }}
        >
          Start Free Trial
        </button>
      </header>

      {/* Main Centered Authentication Section */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 20px' }}>
        {/* CallVibe App Soundwave Badge & Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="callvibe-soundwave-badge">
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="11" width="3" height="10" rx="1.5" fill="#38BDF8" />
              <rect x="9" y="7" width="3" height="18" rx="1.5" fill="#2563EB" />
              <rect x="15" y="4" width="3" height="24" rx="1.5" fill="#9333EA" />
              <rect x="21" y="8" width="3" height="16" rx="1.5" fill="#EC4899" />
              <rect x="27" y="12" width="3" height="8" rx="1.5" fill="#F43F5E" />
            </svg>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            CallVibe
          </h1>
          <p style={{ fontSize: '15px', color: '#64748B' }}>
            Sign in to your dashboard
          </p>
        </div>

        {/* Login Form Card */}
        <div className="auth-card-clean">
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', marginBottom: '6px' }}>
              Welcome back
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              Enter your credentials to continue.
            </p>
          </div>

          {/* Error Banner */}
          {authError && (
            <div
              style={{
                backgroundColor: '#FEF2F2',
                border: '1px solid #FEE2E2',
                borderRadius: '10px',
                padding: '12px 14px',
                fontSize: '13px',
                color: '#DC2626',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              }}
            >
              <AlertCircle size={16} flexShrink={0} />
              <span>{authError}</span>
            </div>
          )}

          {/* Success Banner */}
          {authSuccess ? (
            <div
              style={{
                backgroundColor: '#ECFDF5',
                border: '1px solid #D1FAE5',
                borderRadius: '12px',
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <CheckCircle2 size={36} color="#059669" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#065F46', marginBottom: '6px' }}>
                Authentication Successful
              </h3>
              <p style={{ fontSize: '14px', color: '#047857', marginBottom: '18px' }}>
                Welcome to your CallVibe workspace.
              </p>
              <button
                onClick={() => onNavigate('home')}
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '14px' }}
              >
                Go to Dashboard Overview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email Address Field */}
              <div>
                <label className="auth-label">Email</label>
                <div className="auth-input-wrapper">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="auth-input"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password Field with Eye Toggle */}
              <div>
                <label className="auth-label">Password</label>
                <div className="auth-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="auth-input has-right-icon"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="auth-password-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="auth-submit-btn"
                style={{ marginTop: '8px' }}
              >
                {isLoading ? (
                  <span>Signing in...</span>
                ) : (
                  <span>Sign In</span>
                )}
              </button>

              {/* Forgot Password Trigger */}
              <div style={{ textAlign: 'center', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotModalOpen(true);
                    setResetSent(false);
                    setResetEmail(email);
                  }}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#2264F6',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#174BBA')}
                  onMouseLeave={(e) => (e.target.style.color = '#2264F6')}
                >
                  Forgot your password?
                </button>
              </div>
            </form>
          )}

          {/* Quick Sign Up Switch */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid #F1F5F9',
              textAlign: 'center',
              fontSize: '14px',
              color: '#64748B',
            }}
          >
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('signup')}
              style={{ fontWeight: '700', color: '#2264F6' }}
            >
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Footer Support Info */}
        <div style={{ textAlign: 'center', marginTop: '36px', fontSize: '13px', color: '#64748B' }}>
          <div>
            Having trouble signing in?{' '}
            <span style={{ color: '#2264F6', fontWeight: '600' }}>info@callvibe.ai</span>
          </div>
          <div style={{ marginTop: '6px', color: '#94A3B8' }}>
            © 2024 Call Vibe. All rights reserved.
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {isForgotModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsForgotModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '440px', padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
                Reset Your Password
              </h3>
              <button
                onClick={() => setIsForgotModalOpen(false)}
                style={{ color: '#94A3B8', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            {resetSent ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <CheckCircle2 size={44} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
                  Reset Link Dispatched
                </h4>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                  Instructions have been sent to <strong>{resetEmail}</strong>.
                </p>
                <button
                  onClick={() => setIsForgotModalOpen(false)}
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  Return to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit}>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                  Enter your registered work email and we will send you a secure verification link to reset your credentials.
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <label className="auth-label">Work Email</label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="auth-input"
                  />
                </div>
                <button type="submit" className="auth-submit-btn">
                  Send Recovery Link
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
