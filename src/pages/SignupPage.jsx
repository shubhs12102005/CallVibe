import React, { useState } from 'react';
import {
  User,
  Mail,
  Building,
  Globe,
  Phone,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  Check,
  Sparkles,
  HelpCircle
} from 'lucide-react';

/**
 * SignupPage Component
 * 
 * Faithfully reproduces the CallVibe multi-step workspace registration flow:
 * - Dual-panel layout with branded sidebar and 4-step progress stepper
 * - Step 1: Workspace admin profile (Full Name, Work Email, Company, Website, Phone, Password)
 * - Step 2: Business configuration (Sales team size, Telephony stack, Monthly call hours)
 * - Step 3: Qualification confirmation and workspace initialization
 * - Completely independent with internal navigation to '/login' and '/'
 */
export default function SignupPage({ onNavigate }) {
  // Current active step (1: Account details, 2: Business profile, 3: Completed)
  const [currentStep, setCurrentStep] = useState(1);

  // Form field state for Step 1
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    countryCode: '+1',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // Business profile state for Step 2
  const [businessData, setBusinessData] = useState({
    teamSize: '10-25',
    callVolume: '1,000 - 5,000 calls',
    telephonyStack: 'Zoom Phone',
    crm: 'HubSpot',
  });

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input change handler
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormError('');
  };

  // Step 1 Submission: validate and transition to Step 2
  const handleStep1Submit = (e) => {
    e.preventDefault();
    setFormError('');

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match. Please verify your password entry.');
      return;
    }

    if (formData.password.length < 6) {
      setFormError('Password should be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  // Step 2 Submission: finalize workspace setup
  const handleStep2Submit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
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
            src="/images/silgate-logo.jpeg"
            alt="Silgate Logo"
            style={{ height: '28px', width: 'auto' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', color: '#64748B' }}>Already registered?</span>
          <button
            onClick={() => onNavigate('login')}
            className="btn btn-outline"
            style={{
              fontSize: '13px',
              padding: '7px 18px',
              borderRadius: '10px',
              fontWeight: '700',
              color: '#2264F6',
              borderColor: '#BFDBFE',
            }}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Main Split Container */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="signup-split-card">
          {/* Left Branded Sidebar Panel with 4-Step Stepper */}
          <div className="signup-left-panel">
            <div>
              {/* Brand Logo */}
              <div
                onClick={() => onNavigate('home')}
                style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '32px', cursor: 'pointer' }}
              >
                <img
                  src="/images/silgate-logo.jpeg"
                  alt="Silgate Logo"
                  style={{ height: '30px', width: 'auto' }}
                />
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: '#0F172A',
                  marginBottom: '10px',
                }}
              >
                Start analysing your{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  sales calls with AI.
                </span>
              </h1>

              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '36px' }}>
                Complete the form to set up your enterprise workspace.
              </p>

              {/* 4-Step Vertical Stepper List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Step 1 */}
                <div className={`stepper-item ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : 'pending'}`}>
                  <div className="stepper-icon-circle">
                    {currentStep > 1 ? <Check size={16} /> : <span>1</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: currentStep === 1 ? '#4338CA' : '#1E293B' }}>
                      Sign Up
                    </div>
                    <div style={{ fontSize: '12px', color: currentStep === 1 ? '#6366F1' : '#64748B' }}>
                      Create your workspace
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`stepper-item ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : 'pending'}`}>
                  <div className="stepper-icon-circle">
                    {currentStep > 2 ? <Check size={16} /> : <span>2</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: currentStep === 2 ? '#4338CA' : '#1E293B' }}>
                      Tell Us About Your Business
                    </div>
                    <div style={{ fontSize: '12px', color: currentStep === 2 ? '#6366F1' : '#64748B' }}>
                      Help us personalize your experience
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`stepper-item ${currentStep === 3 ? 'active' : 'pending'}`}>
                  <div className="stepper-icon-circle">
                    {currentStep === 3 ? <Check size={16} /> : <span>3</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: currentStep === 3 ? '#4338CA' : '#1E293B' }}>
                      Account Qualification Check
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>
                      We'll verify your business details
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="stepper-item pending">
                  <div className="stepper-icon-circle">
                    <span>4</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E293B' }}>
                      Verify Email & Account Created
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>
                      Confirm your email to activate account
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Security Footer */}
            <div
              style={{
                marginTop: '40px',
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#64748B',
                fontWeight: '600',
              }}
            >
              <ShieldCheck size={16} color="#2264F6" />
              <span>Secure • Private • AI-Powered</span>
            </div>
          </div>

          {/* Right Panel: Active Step Form */}
          <div className="signup-right-panel">
            {/* Step Progress Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#4F46E5', marginBottom: '6px' }}>
                  {currentStep === 1 && 'Step 1 of 2'}
                  {currentStep === 2 && 'Step 2 of 2'}
                  {currentStep === 3 && 'Workspace Created'}
                </div>
                {/* Horizontal Progress Bar */}
                <div style={{ width: '120px', height: '5px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: currentStep === 1 ? '50%' : '100%',
                      backgroundColor: '#4F46E5',
                      borderRadius: '4px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              {/* Profile Avatar Badge */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#EDE9FE',
                  color: '#4F46E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <User size={20} />
              </div>
            </div>

            {/* Error Message */}
            {formError && (
              <div
                style={{
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FEE2E2',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  fontSize: '13px',
                  color: '#DC2626',
                  marginBottom: '20px',
                }}
              >
                {formError}
              </div>
            )}

            {/* STEP 1: Account & Workspace Credentials */}
            {currentStep === 1 && (
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>
                    Create Your Workspace
                  </h2>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>
                    Enter your details to get started.
                  </p>
                </div>

                <form onSubmit={handleStep1Submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Full Name */}
                  <div>
                    <label className="auth-label">Full Name</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><User size={18} /></span>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="John Doe"
                        className="auth-input has-left-icon"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="auth-label">Work Email</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><Mail size={18} /></span>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => handleChange('workEmail', e.target.value)}
                        placeholder="john@acme.com"
                        className="auth-input has-left-icon"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="auth-label">Company Name</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><Building size={18} /></span>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Acme Inc."
                        className="auth-input has-left-icon"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="auth-label">Website</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><Globe size={18} /></span>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => handleChange('website', e.target.value)}
                        placeholder="https://acme.com"
                        className="auth-input has-left-icon"
                      />
                    </div>
                  </div>

                  {/* Phone Number with Country Code */}
                  <div>
                    <label className="auth-label">Phone Number</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '95px 1fr', gap: '8px' }}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleChange('countryCode', e.target.value)}
                        style={{
                          padding: '13px 8px',
                          borderRadius: '12px',
                          border: '1.5px solid #E2E8F0',
                          backgroundColor: '#F8FAFC',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#334155',
                          outline: 'none',
                        }}
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="1 (702) 123-4567"
                        className="auth-input"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="auth-label">Password</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><Lock size={18} /></span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="••••••••"
                        className="auth-input has-left-icon has-right-icon"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="auth-password-toggle"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="auth-label">Confirm Password</label>
                    <div className="auth-input-wrapper">
                      <span className="auth-input-icon"><ShieldCheck size={18} /></span>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        placeholder="••••••••"
                        className="auth-input has-left-icon has-right-icon"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="auth-password-toggle"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Step 1 Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="auth-submit-btn"
                    style={{ marginTop: '8px', background: 'linear-gradient(135deg, #4338CA 0%, #3B82F6 100%)' }}
                  >
                    <span>{isSubmitting ? 'Validating...' : 'Continue →'}</span>
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: Business & Telephony Profile */}
            {currentStep === 2 && (
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>
                    Tell Us About Your Business
                  </h2>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>
                    Help us configure your voice analytics and call scoring models.
                  </p>
                </div>

                <form onSubmit={handleStep2Submit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Sales Team Size */}
                  <div>
                    <label className="auth-label">Sales Team Size</label>
                    <select
                      value={businessData.teamSize}
                      onChange={(e) => setBusinessData({ ...businessData, teamSize: e.target.value })}
                      className="auth-input"
                    >
                      <option value="1-5">1 - 5 Sales Reps</option>
                      <option value="6-20">6 - 20 Sales Reps</option>
                      <option value="21-50">21 - 50 Sales Reps</option>
                      <option value="50+">50+ Enterprise Reps</option>
                    </select>
                  </div>

                  {/* Monthly Call Volume */}
                  <div>
                    <label className="auth-label">Estimated Monthly Call Volume</label>
                    <select
                      value={businessData.callVolume}
                      onChange={(e) => setBusinessData({ ...businessData, callVolume: e.target.value })}
                      className="auth-input"
                    >
                      <option value="< 1,000 calls">&lt; 1,000 calls / month</option>
                      <option value="1,000 - 5,000 calls">1,000 - 5,000 calls / month</option>
                      <option value="5,000 - 20,000 calls">5,000 - 20,000 calls / month</option>
                      <option value="20,000+ calls">20,000+ Enterprise calls / month</option>
                    </select>
                  </div>

                  {/* Telephony / Cloud PBX System */}
                  <div>
                    <label className="auth-label">Current Cloud Telephony System</label>
                    <select
                      value={businessData.telephonyStack}
                      onChange={(e) => setBusinessData({ ...businessData, telephonyStack: e.target.value })}
                      className="auth-input"
                    >
                      <option value="Zoom Phone">Zoom Phone</option>
                      <option value="RingCentral">RingCentral</option>
                      <option value="8x8">8x8</option>
                      <option value="Exotel">Exotel</option>
                      <option value="Zadarma">Zadarma</option>
                      <option value="Smartflo">Tata Tele Smartflo</option>
                      <option value="Other">Other / Custom SIP Trunk</option>
                    </select>
                  </div>

                  {/* Primary CRM */}
                  <div>
                    <label className="auth-label">Primary CRM</label>
                    <select
                      value={businessData.crm}
                      onChange={(e) => setBusinessData({ ...businessData, crm: e.target.value })}
                      className="auth-input"
                    >
                      <option value="HubSpot">HubSpot CRM</option>
                      <option value="Salesforce">Salesforce Sales Cloud</option>
                      <option value="LeadSquared">LeadSquared</option>
                      <option value="GoHighLevel">GoHighLevel</option>
                      <option value="Zoho CRM">Zoho CRM</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="btn btn-outline"
                      style={{ flex: 1, padding: '14px' }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="auth-submit-btn"
                      style={{ flex: 2, background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                    >
                      <span>{isSubmitting ? 'Creating Workspace...' : 'Complete Workspace Setup →'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 3: Workspace Ready Celebration */}
            {currentStep === 3 && (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    border: '2px solid #A7F3D0',
                  }}
                >
                  <CheckCircle2 size={44} color="#059669" />
                </div>

                <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                  Workspace Ready!
                </h2>
                <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '420px', margin: '0 auto 24px' }}>
                  Congratulations <strong>{formData.fullName || 'User'}</strong>! Your AI conversation intelligence workspace for <strong>{formData.companyName || 'your company'}</strong> has been provisioned.
                </p>

                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '20px',
                    marginBottom: '28px',
                    textAlign: 'left',
                    fontSize: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#64748B' }}>Workspace URL:</span>
                    <strong style={{ color: '#2264F6' }}>app.callvibe.ai/{formData.companyName ? formData.companyName.toLowerCase().replace(/\s+/g, '-') : 'team'}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#64748B' }}>Plan Status:</span>
                    <span className="badge-pill badge-green-subtle">14-Day Free Enterprise Trial</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B' }}>Telephony Connector:</span>
                    <strong style={{ color: '#0F172A' }}>{businessData.telephonyStack}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('home')}
                  className="auth-submit-btn"
                  style={{ background: 'linear-gradient(135deg, #2264F6 0%, #1D4ED8 100%)' }}
                >
                  <span>Explore Platform & Dashboard</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* Bottom Safe Note & Sign In Link */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '10px' }}>
                🔒 Your data is safe and secure
              </div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>
                Already have an account?{' '}
                <button
                  onClick={() => onNavigate('login')}
                  style={{ fontWeight: '700', color: '#4338CA' }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
