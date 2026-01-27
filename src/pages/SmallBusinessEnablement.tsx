import { useState } from 'react'
import '../styles/ServicePages.css'

export function SmallBusinessEnablement({ onBack }: { onBack: () => void }) {
    const [activeTab, setActiveTab] = useState<'overview' | 'phase1' | 'phase2' | 'process'>('overview')

    return (
        <div className="service-page">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="back-button"
                aria-label="Go back to home"
                style={{
                    position: 'fixed',
                    top: '80px',
                    left: '2rem',
                    zIndex: 100,
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00d4ff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.4)'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'
                    e.currentTarget.style.boxShadow = 'none'
                }}
            >
                ←
            </button>

            <section className="service-hero">
                <div className="service-hero-content">
                    <h1>Small Business & Home-Based Business Enablement</h1>
                    <p className="service-subtitle">From Local Operations to Scalable Brands</p>
                    <p className="service-description">
                        Digi Nova partners with small and home-based businesses to help them build, formalize, and scale their business using digital channels.
                    </p>
                </div>
            </section>

            <section className="service-tabs">
                <div className="tab-container">
                    <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        What We Do
                    </button>
                    <button className={`tab-button ${activeTab === 'phase1' ? 'active' : ''}`} onClick={() => setActiveTab('phase1')}>
                        Phase 1: Social Foundation
                    </button>
                    <button className={`tab-button ${activeTab === 'phase2' ? 'active' : ''}`} onClick={() => setActiveTab('phase2')}>
                        Phase 2: Scale Beyond
                    </button>
                    <button className={`tab-button ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>
                        Process
                    </button>
                </div>
            </section>

            {activeTab === 'overview' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>What We Do</h2>
                        <p>
                            Many small businesses have strong products or services but lack:
                        </p>
                        <ul className="issues-list">
                            <li>Structured branding</li>
                            <li>Consistent customer acquisition</li>
                            <li>Digital visibility</li>
                            <li>Scalable systems</li>
                        </ul>
                        <p>
                            We help convert individual effort into a structured business, starting with social media and extending to websites and scalable digital infrastructure.
                        </p>

                        <div className="why-section">
                            <h3>Why Digi Nova</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Small-business-first thinking</h4>
                                    <p>We understand the realities of home-based entrepreneurs.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Practical, affordable execution</h4>
                                    <p>We prioritize what actually drives results.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>End-to-end support</h4>
                                    <p>From social media to websites to scale.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Consulting discipline, not agency chaos</h4>
                                    <p>Clear steps, clear scope, clear outcomes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ideal-for">
                            <h3>Ideal For</h3>
                            <ul className="benefits-list">
                                <li>✓ Home-based entrepreneurs</li>
                                <li>✓ Small retail and service businesses</li>
                                <li>✓ Food, fashion, beauty, and craft businesses</li>
                                <li>✓ Individuals turning skills into income</li>
                            </ul>
                        </div>

                        <div className="philosophy-box">
                            <p><strong>Our Philosophy:</strong> Every large business starts small. What matters is building the right foundation early.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'phase1' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Phase 1: Building the Business Foundation (Social Media–Led)</h2>
                        <p>
                            We use Instagram, Facebook, and YouTube as the first growth engines—because they are cost-efficient, fast to deploy, and highly effective for early-stage businesses.
                        </p>

                        <div className="phase-card">
                            <h3>🏪 Platform Setup & Positioning</h3>
                            <p>We help businesses establish a credible and professional digital presence.</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Business profile setup and optimization</li>
                                    <li>Clear positioning (what you sell, for whom, and why)</li>
                                    <li>Bio, highlights, and page structure clarity</li>
                                    <li>Platform-specific alignment (Instagram, Facebook, YouTube)</li>
                                </ul>
                                <p><strong>Outcome:</strong> Your business looks trustworthy, clear, and ready to sell.</p>
                            </div>
                        </div>

                        <div className="phase-card">
                            <h3>📸 Content Creation & Monthly Execution</h3>
                            <p>We manage ongoing content that supports discovery, trust, and conversion.</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Reels and short-form videos (reach and discovery)</li>
                                    <li>Static posts (product, pricing, credibility)</li>
                                    <li>Carousel posts (education, usage, benefits)</li>
                                    <li>Customer stories and testimonials</li>
                                    <li>Engagement posts (polls, Q&A, feedback prompts)</li>
                                </ul>
                                <p><strong>Outcome:</strong> Steady visibility, growing engagement, and inbound customer interest.</p>
                            </div>
                        </div>

                        <div className="phase-card">
                            <h3>💬 Account Management & Customer Interaction</h3>
                            <p>Small businesses often lose customers due to delayed or inconsistent responses.</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Comment and DM handling</li>
                                    <li>Basic customer query responses</li>
                                    <li>Lead redirection and follow-up support</li>
                                    <li>Coordination with the business owner</li>
                                </ul>
                                <p><strong>Outcome:</strong> Improved response speed, higher trust, and better conversion rates.</p>
                            </div>
                        </div>

                        <div className="phase-card">
                            <h3>🌍 Local & Community Growth Support</h3>
                            <p>For home-based and local businesses, community relevance matters more than raw reach.</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Local hashtag and audience targeting</li>
                                    <li>Community-driven content formats</li>
                                    <li>Platform-native promotion strategies</li>
                                    <li>Collaboration and cross-posting guidance</li>
                                </ul>
                                <p><strong>Outcome:</strong> Stronger presence within the right local or niche audience.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'phase2' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Phase 2: Scaling Beyond Social Media (Website & Growth Enablement)</h2>
                        <p>Once the business reaches consistency and demand, we help formalize and scale operations.</p>

                        <div className="phase-card">
                            <h3>🌐 Website Design & Online Presence</h3>
                            <p>We design websites that function as sales and credibility platforms, not just digital brochures.</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Business website design and development</li>
                                    <li>Product/service presentation</li>
                                    <li>Inquiry and lead capture setup</li>
                                    <li>Mobile-first and SEO-ready structure</li>
                                </ul>
                                <p><strong>Outcome:</strong> A professional online presence that supports growth beyond social media.</p>
                            </div>
                        </div>

                        <div className="phase-card">
                            <h3>📈 Transition to Larger-Scale Operations</h3>
                            <p>For businesses ready to grow further, we support:</p>
                            <div className="phase-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Structured branding across platforms</li>
                                    <li>Content and communication consistency</li>
                                    <li>Integration of automation (WhatsApp, email, CRM where required)</li>
                                    <li>Expansion into paid promotion (optional and controlled)</li>
                                </ul>
                                <p><strong>Outcome:</strong> A scalable digital foundation that can support higher volumes and expansion.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'process' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>How We Work</h2>
                        <div className="process-steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <h4>Understand the Business</h4>
                                <ul>
                                    <li>Product or service clarity</li>
                                    <li>Customer type and demand</li>
                                    <li>Growth ambition and constraints</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <h4>Build the Digital Base</h4>
                                <ul>
                                    <li>Social media setup and content system</li>
                                    <li>Engagement and operational support</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <h4>Stabilize & Optimize</h4>
                                <ul>
                                    <li>Monthly execution and improvement</li>
                                    <li>Demand and engagement consistency</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <h4>Scale When Ready</h4>
                                <ul>
                                    <li>Website development</li>
                                    <li>System and process enablement</li>
                                </ul>
                            </div>
                        </div>

                        <div className="philosophy-box">
                            <p>We grow businesses in stages—without overwhelming the owner.</p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
