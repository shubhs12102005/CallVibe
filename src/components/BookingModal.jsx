import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Clock, 
  Video, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  Send,
  User,
  Mail,
  Building
} from 'lucide-react';

/**
 * BookingModal Component
 * 
 * Fully responsive, scrollable, independent interactive demo booking modal:
 * - Fixes scrollability and responsive layout on all screen sizes
 * - Smooth vertical scrolling with max-height constraint
 * - Interactive calendar slot selection (dates & times)
 * - Quick request form fallback
 */
export default function BookingModal({ isOpen, onClose }) {
  const [activeMode, setActiveMode] = useState('calendar'); // 'calendar' or 'form'
  const [selectedDate, setSelectedDate] = useState(25);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [bookingStep, setBookingStep] = useState(1); // 1: Select slot, 2: Enter info, 3: Confirmed

  // Attendee info for calendar booking
  const [attendee, setAttendee] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  // Direct Quick Request Form state
  const [submittedQuick, setSubmittedQuick] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    notes: '',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '03:30 PM',
    '04:45 PM',
  ];

  const handleCalendarSubmit = (e) => {
    e.preventDefault();
    if (!attendee.name || !attendee.email) return;
    setBookingStep(3);
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuick(true);
  };

  const resetAll = () => {
    setBookingStep(1);
    setSubmittedQuick(false);
    onClose();
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={resetAll}
      style={{
        overflowY: 'auto',
        padding: '20px 14px',
        alignItems: 'center',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '0',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '20px',
        }}
      >
        {/* Sticky Modal Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            backgroundColor: '#0A1124',
            color: '#FFFFFF',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CalendarIcon size={20} color="#38BDF8" />
            <h3 style={{ fontSize: '17px', fontWeight: '700', margin: 0 }}>
              Schedule CallVibe Enterprise Demo
            </h3>
          </div>

          <button
            onClick={resetAll}
            style={{
              color: '#94A3B8',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* View Switcher Bar */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F1F5F9',
            padding: '8px 20px',
            gap: '10px',
            borderBottom: '1px solid #E2E8F0',
            flexShrink: 0,
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveMode('calendar')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: activeMode === 'calendar' ? '700' : '600',
              backgroundColor: activeMode === 'calendar' ? '#FFFFFF' : 'transparent',
              color: activeMode === 'calendar' ? '#1E40AF' : '#64748B',
              boxShadow: activeMode === 'calendar' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Interactive Calendar
          </button>
          <button
            onClick={() => setActiveMode('form')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: activeMode === 'form' ? '700' : '600',
              backgroundColor: activeMode === 'form' ? '#FFFFFF' : 'transparent',
              color: activeMode === 'form' ? '#1E40AF' : '#64748B',
              boxShadow: activeMode === 'form' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Quick Request Form
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div 
          style={{ 
            padding: '24px', 
            overflowY: 'auto', 
            flex: 1,
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {activeMode === 'calendar' ? (
            <div>
              {bookingStep === 1 && (
                <div className="calendar-responsive-grid">
                  {/* Left Column: Meeting Info */}
                  <div className="calendar-info-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <img src="/images/CallVibe-Logo@2x.webp" alt="CallVibe" style={{ height: '22px' }} />
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                      30 Min Product Walkthrough
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                      See how CallVibe analyzes 100% of sales calls and integrates with your CRM in under 15 minutes.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#475569' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={16} color="#2264F6" />
                        <span>30 Minutes</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Video size={16} color="#059669" />
                        <span>Google Meet / Zoom</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Globe size={16} color="#7C3AED" />
                        <span>Timezone: Auto-detected</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Date Selector */}
                  <div className="calendar-date-col">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <strong style={{ fontSize: '15px', color: '#0F172A' }}>September 2026</strong>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ padding: '4px', borderRadius: '6px', border: '1px solid #E2E8F0' }}><ChevronLeft size={16} /></button>
                        <button style={{ padding: '4px', borderRadius: '6px', border: '1px solid #E2E8F0' }}><ChevronRight size={16} /></button>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#94A3B8', marginBottom: '6px' }}>
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                      {[...Array(30)].map((_, i) => {
                        const day = i + 1;
                        const isAvailable = day >= 23 && day <= 30 && day % 7 !== 5 && day % 7 !== 6;
                        const isSelected = selectedDate === day;
                        return (
                          <button
                            key={day}
                            disabled={!isAvailable}
                            onClick={() => setSelectedDate(day)}
                            style={{
                              height: '36px',
                              borderRadius: '8px',
                              fontSize: '12px',
                              fontWeight: isSelected ? '700' : '500',
                              backgroundColor: isSelected ? '#2264F6' : isAvailable ? '#EFF6FF' : 'transparent',
                              color: isSelected ? '#FFFFFF' : isAvailable ? '#1E40AF' : '#CBD5E1',
                              cursor: isAvailable ? 'pointer' : 'default',
                              transition: 'all 0.15s',
                              border: isSelected ? 'none' : isAvailable ? '1px solid #DBEAFE' : 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Time Slots */}
                  <div className="calendar-time-col">
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '10px' }}>
                      Sept {selectedDate} Available:
                    </div>
                    <div className="time-slots-wrapper">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          style={{
                            padding: '9px 8px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: selectedTime === time ? '700' : '600',
                            backgroundColor: selectedTime === time ? '#2264F6' : '#FFFFFF',
                            color: selectedTime === time ? '#FFFFFF' : '#2264F6',
                            border: '1.5px solid #2264F6',
                            transition: 'all 0.15s',
                            cursor: 'pointer',
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setBookingStep(2)}
                      className="btn btn-primary"
                      style={{ marginTop: '14px', width: '100%', fontSize: '13px', padding: '10px 14px' }}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Attendee Details */}
              {bookingStep === 2 && (
                <form onSubmit={handleCalendarSubmit} style={{ maxWidth: '480px', margin: '0 auto', padding: '10px 0' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', marginBottom: '6px' }}>
                    Enter Details for Sept {selectedDate}, {selectedTime}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                    A calendar invitation with Google Meet / Zoom will be dispatched immediately.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label className="auth-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={attendee.name}
                        onChange={(e) => setAttendee({ ...attendee, name: e.target.value })}
                        placeholder="John Doe"
                        className="auth-input"
                      />
                    </div>

                    <div>
                      <label className="auth-label">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={attendee.email}
                        onChange={(e) => setAttendee({ ...attendee, email: e.target.value })}
                        placeholder="john@company.com"
                        className="auth-input"
                      />
                    </div>

                    <div>
                      <label className="auth-label">Company Name</label>
                      <input
                        type="text"
                        value={attendee.company}
                        onChange={(e) => setAttendee({ ...attendee, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="auth-input"
                      />
                    </div>

                    <div>
                      <label className="auth-label">Notes for our AI Specialist (Optional)</label>
                      <textarea
                        rows="2"
                        value={attendee.notes}
                        onChange={(e) => setAttendee({ ...attendee, notes: e.target.value })}
                        placeholder="e.g. Sales team size, telephony system..."
                        className="auth-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="btn btn-outline"
                        style={{ flex: 1, padding: '12px' }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ flex: 2, padding: '12px' }}
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* Step 3: Booking Confirmed */}
              {bookingStep === 3 && (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: '#ECFDF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <CheckCircle2 size={40} color="#059669" />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                    Demo Successfully Scheduled!
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '420px', margin: '0 auto 20px' }}>
                    We've sent a calendar invitation and conference link to <strong>{attendee.email}</strong> for <strong>Sept {selectedDate}, 2026 at {selectedTime}</strong>.
                  </p>
                  <button onClick={resetAll} className="btn btn-primary">
                    Done
                  </button>
                </div>
              )}
            </div>
          ) : submittedQuick ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 16px' }} />
              <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>
                Consultation Request Received!
              </h4>
              <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '420px', margin: '0 auto 24px' }}>
                Our conversation intelligence specialist will contact you within 2 business hours.
              </p>
              <button onClick={resetAll} className="btn btn-primary">
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '580px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="auth-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="auth-input"
                  />
                </div>
                <div>
                  <label className="auth-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="auth-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label className="auth-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="auth-input"
                  />
                </div>
                <div>
                  <label className="auth-label">Sales Team Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="auth-input"
                  >
                    <option value="1-10">1 - 10 Reps</option>
                    <option value="10-50">10 - 50 Reps</option>
                    <option value="50-200">50 - 200 Reps</option>
                    <option value="200+">200+ Reps</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="auth-label">Telephony or CRM system currently in use</label>
                <textarea
                  rows="3"
                  placeholder="e.g. Zoom Phone, RingCentral, HubSpot, Salesforce..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="auth-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                Submit Demo Request
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .calendar-responsive-grid {
          display: grid;
          grid-template-columns: 240px 1fr 160px;
          gap: 20px;
          align-items: start;
        }

        .calendar-info-col {
          border-right: 1px solid #F1F5F9;
          padding-right: 16px;
        }

        .time-slots-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (max-width: 820px) {
          .calendar-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .calendar-info-col {
            border-right: none !important;
            border-bottom: 1px solid #F1F5F9;
            padding-right: 0 !important;
            padding-bottom: 20px;
          }
          .time-slots-wrapper {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
