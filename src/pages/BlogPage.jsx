import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  Search, 
  X, 
  BookOpen, 
  Share2 
} from 'lucide-react';
import SlidingHeadline from '../components/SlidingHeadline';
import CtaBanner from '../components/CtaBanner';

const blogPosts = [
  {
    id: 1,
    title: 'Why Insurance Agencies Lose Renewals And What AI Found',
    excerpt: 'How automated sentiment detection and objection clustering exposed the subtle micro-frustrations that cause policyholders to shop elsewhere 60 days before renewal.',
    content: `Policy churn in the commercial and personal lines insurance sector often seems unpredictable. However, natural language analysis of over 42,000 inbound service and claims calls revealed that 78% of churned accounts exhibited distinct friction markers weeks in advance.
    
    Key Findings:
    1. Unacknowledged Billing Friction: Subtle confusion regarding deductible adjustments represented the single largest pre-churn indicator.
    2. Response Latency: Agencies that followed up on policy review calls within 2 hours retained 31% more accounts than those following up after 24 hours.
    3. Sentiment Drift: Automated emotion monitoring accurately predicted renewal risk with 92% confidence before cancellation notices were filed.`,
    category: 'Conversation Intelligence',
    date: 'August 28, 2026',
    readTime: '6 min read',
    image: '/images/ChatGPT-Image-Aug-28-2026-09_47_18-PM.png',
  },
  {
    id: 2,
    title: 'How AI Call Intelligence Helped a Real Estate Team Close 22% More Deals',
    excerpt: 'A deep-dive case study into how high-velocity real estate brokerage teams eliminate lead leakage and capture unsaid buyer preferences through conversational intelligence.',
    content: `High-value commercial and luxury residential transactions depend heavily on nuanced buyer cues. When agents conduct 15 to 25 calls a day, critical details like spouse requirements, contingent sales, and pre-approval nuances slip through manual notepad tracking.
    
    By implementing CallVibe:
    - 100% of property touring objections were logged and categorized automatically.
    - AI-generated follow-up summaries drafted tailored property matching lists within 90 seconds of ending discovery calls.
    - Team win rate increased by 22% within 60 days of deployment.`,
    category: 'Sales Enablement',
    date: 'August 28, 2026',
    readTime: '5 min read',
    image: '/images/ChatGPT-Image-Aug-28-2026-09_13_08-PM.png',
  },
  {
    id: 3,
    title: 'Why CRM Notes Are Not Enough for Sales Visibility Anymore',
    excerpt: 'Manual SDR notes capture less than 3% of verbal deal data. Discover why modern revenue leadership is switching to automated transcription and AI scoring.',
    content: `The average B2B sales rep spends nearly 2.5 hours every single day typing summaries into Salesforce or HubSpot. Worse yet, rep notes are subjective, incomplete, and often omit the exact objections competitors used to derail deals.
    
    Conversation intelligence platforms capture the ground truth of every call. Instead of reading "Prospect liked demo, checking with boss," managers see exact transcripts of pricing pushbacks, competitor mentions, and timeline constraints.`,
    category: 'CRM Automation',
    date: 'June 8, 2026',
    readTime: '8 min read',
    image: '/images/ChatGPT-Image-Jun-8-2026-11_37_02-AM.png',
  },
  {
    id: 4,
    title: 'How High-Performing Sales Teams Use Call Insights to Close More Deals',
    excerpt: 'The playbook top 1% SDR and AE teams use to transform call recordings into individualized coaching plans, objection response libraries, and predictable pipeline.',
    content: `Top-performing revenue organizations treat sales calls like game film. Instead of vague feedback, managers use call scoring matrices to identify exactly when reps talk too much, miss buying signals, or fail to secure definitive next actions.
    
    Learn how to construct a scalable conversation intelligence framework that shortens onboarding from 90 days to under 30 days.`,
    category: 'Sales Coaching',
    date: 'June 3, 2026',
    readTime: '7 min read',
    image: '/images/ChatGPT-Image-Jun-3-2026-11_41_26-AM.png',
  },
];

export default function BlogPage({ onOpenBooking }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Conversation Intelligence', 'Sales Enablement', 'CRM Automation', 'Sales Coaching'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(110% 120% at 75% 25%, #1848B5 0%, #0E2D77 35%, #081A46 70%, #050E24 100%)',
          color: '#FFFFFF',
          paddingTop: '170px',
          paddingBottom: '90px',
          position: 'relative',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
              CallVibe Insights
            </span>
            <SlidingHeadline
              text="Latest Insights in Voice AI & Revenue Operations"
              staggerMs={70}
              style={{
                fontSize: 'clamp(36px, 5vw, 58px)',
                fontWeight: '800',
                lineHeight: 1.16,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            />
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, maxWidth: '680px' }}>
              Data-backed tactical guides, industry case studies, and research to help revenue teams improve conversions and coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content Area */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Filter and search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: '600',
                    backgroundColor: activeCategory === c ? '#2264F6' : '#F1F5F9',
                    color: activeCategory === c ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', minWidth: '260px' }}>
              <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: '9999px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '36px',
            }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedPost(post)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                </div>

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                      <span style={{ color: '#2264F6', fontWeight: '700' }}>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F172A', lineHeight: 1.35, marginBottom: '14px' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.6, marginBottom: '24px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                    <span style={{ fontSize: '13px', color: '#94A3B8' }}>{post.date}</span>
                    <span
                      className="pix-hover-right"
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#2264F6',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="modal-backdrop" onClick={() => setSelectedPost(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '800px', padding: '0', maxHeight: '88vh', overflowY: 'auto' }}
          >
            <div style={{ position: 'relative', height: '280px' }}>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedPost(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>
                <span style={{ color: '#2264F6', fontWeight: '700' }}>{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h1 style={{ fontSize: '30px', fontWeight: '800', color: '#0F172A', lineHeight: 1.25, marginBottom: '24px' }}>
                {selectedPost.title}
              </h1>

              <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155', whiteSpace: 'pre-line' }}>
                {selectedPost.content}
              </div>

              <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => setSelectedPost(null)} className="btn btn-outline">
                  Close Article
                </button>
                <button onClick={onOpenBooking} className="btn btn-primary">
                  Book Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CtaBanner onOpenBooking={onOpenBooking} onLearnMore={onOpenBooking} />
    </div>
  );
}
