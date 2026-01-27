import { useState } from 'react'
import '../styles/ServicePages.css'

export function SocialMediaManagement({ onBack }: { onBack: () => void }) {
    const [activeTab, setActiveTab] = useState<'overview' | 'scope' | 'packages'>('overview')

    const packages = [
        {
            name: 'Starter Plan',
            price: 3000,
            focus: 'Presence & consistency',
            features: [
                'Monthly content calendar',
                '15 static posts creation & publishing',
                'Basic engagement monitoring',
                'Brand consistency maintenance',
            ],
            ideal: 'Early-stage businesses establishing digital presence',
        },
        {
            name: '🚀 Growth Lite Plan',
            price: 5000,
            focus: 'Reach + engagement',
            features: [
                'Content planning & calendar',
                '6 reels + 8 static posts + 4 engagement posts',
                'Caption & hashtag strategy',
                'Comment & basic DM monitoring',
            ],
            ideal: 'Businesses seeking visibility and interaction growth',
        },
        {
            name: 'Growth Path Package',
            price: 17500,
            focus: 'Growth + lead momentum',
            features: [
                'Strategic monthly planning',
                '6 reels + 8 static posts + 4 engagement posts',
                'Engagement & DM handling',
                'Content performance review',
                'Lead-oriented content support',
            ],
            ideal: 'Businesses ready to convert engagement into inquiries',
        },
        {
            name: '🔥 Business Booster Package',
            price: 30000,
            focus: 'Scale & performance discipline',
            features: [
                'End-to-end monthly management',
                '8 reels + 16 static posts + 4 engagement posts',
                'DM message support',
                'Weekly lead list & insights',
                'Polls, Q&A, quizzes execution',
                'Continuous optimization',
            ],
            ideal: 'Businesses using social media as primary growth channel',
        },
    ]

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
                    <h1>Social Media Account Management & Monthly Growth Operations</h1>
                    <p className="service-subtitle">Ongoing Management, Content Execution & Engagement</p>
                    <p className="service-description">
                        Digi Nova provides end-to-end social media account management designed to operate as a managed growth function.
                    </p>
                </div>
            </section>

            <section className="service-tabs">
                <div className="tab-container">
                    <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        What We Do
                    </button>
                    <button className={`tab-button ${activeTab === 'scope' ? 'active' : ''}`} onClick={() => setActiveTab('scope')}>
                        Scope
                    </button>
                    <button className={`tab-button ${activeTab === 'packages' ? 'active' : ''}`} onClick={() => setActiveTab('packages')}>
                        Packages
                    </button>
                </div>
            </section>

            {activeTab === 'overview' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>What We Do</h2>
                        <p>
                            Digi Nova takes ownership of content execution, platform operations, engagement handling, and performance discipline across Instagram, Facebook, and YouTube—allowing leadership teams to remain focused on the core business while ensuring a consistent, professional, and growth-oriented digital presence.
                        </p>

                        <div className="how-we-work">
                            <h3>How We Work</h3>
                            <div className="process-steps">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <h4>Onboard & Align</h4>
                                    <ul>
                                        <li>Business objectives and expectations</li>
                                        <li>Brand tone and communication guardrails</li>
                                        <li>Platform access and workflows</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <div className="step-number">2</div>
                                    <h4>Plan</h4>
                                    <ul>
                                        <li>Monthly content and engagement strategy</li>
                                        <li>Calendar and format mix</li>
                                        <li>KPI definition</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <div className="step-number">3</div>
                                    <h4>Execute</h4>
                                    <ul>
                                        <li>Content publishing and daily management</li>
                                        <li>Engagement handling and monitoring</li>
                                        <li>Ongoing coordination</li>
                                    </ul>
                                </div>
                                <div className="step">
                                    <div className="step-number">4</div>
                                    <h4>Review & Optimize</h4>
                                    <ul>
                                        <li>Monthly performance review</li>
                                        <li>Content and cadence refinement</li>
                                        <li>Scaling of high-performing formats</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="why-section">
                            <h3>Why Digi Nova</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Ownership mindset</h4>
                                    <p>We manage accounts as if they were internal assets, not external deliverables.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Consistency over bursts</h4>
                                    <p>We focus on sustained presence, not short-term spikes.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Systems-driven execution</h4>
                                    <p>Clear processes, calendars, and governance—no chaos.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Consulting-grade discipline</h4>
                                    <p>Strategy, execution, and review are tightly integrated.</p>
                                </div>
                            </div>
                        </div>

                        <div className="philosophy-box">
                            <p><strong>Our Philosophy:</strong> Social media growth is not accidental. It is the result of disciplined, consistent operations executed month after month.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'scope' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Scope of Monthly Management</h2>

                        <div className="scope-card">
                            <h3>📝 Content Production & Publishing</h3>
                            <p>We plan, create, and publish content that supports reach, engagement, and brand consistency.</p>
                            <div className="scope-details">
                                <strong>Content formats:</strong>
                                <ul>
                                    <li>Reels and short-form videos (discovery and reach)</li>
                                    <li>Static posts (brand clarity and messaging)</li>
                                    <li>Carousel posts (education, storytelling, value articulation)</li>
                                    <li>Engagement posts (polls, Q&A, prompts, interactive formats)</li>
                                </ul>
                                <p><strong>Outcome:</strong> A steady, high-quality content flow that compounds visibility and engagement.</p>
                            </div>
                        </div>

                        <div className="scope-card">
                            <h3>⚙️ Account Operations & Daily Management</h3>
                            <p>We manage the operational layer to ensure responsiveness, credibility, and consistency.</p>
                            <div className="scope-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Comment monitoring and responses</li>
                                    <li>Direct message (DM) handling and routing</li>
                                    <li>Basic customer query acknowledgment</li>
                                    <li>Profile hygiene and optimization</li>
                                    <li>Coordination with the client team for escalations</li>
                                </ul>
                                <p><strong>Outcome:</strong> Improved response times, stronger audience trust, reduced operational burden.</p>
                            </div>
                        </div>

                        <div className="scope-card">
                            <h3>👥 Engagement & Community Management</h3>
                            <p>We actively support two-way interaction, not passive broadcasting.</p>
                            <div className="scope-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Engagement prompts and interaction formats</li>
                                    <li>Replying to audience comments and messages</li>
                                    <li>Community-friendly tone management</li>
                                    <li>Maintaining brand voice across interactions</li>
                                </ul>
                                <p><strong>Outcome:</strong> Higher-quality engagement and a more loyal, responsive audience.</p>
                            </div>
                        </div>

                        <div className="scope-card">
                            <h3>📊 Content Calendar & Monthly Planning</h3>
                            <p>Each month is managed through a structured content and activity plan.</p>
                            <div className="scope-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Monthly content calendar</li>
                                    <li>Theme and content pillar alignment</li>
                                    <li>Campaign and promotion integration</li>
                                    <li>Approval workflows and timelines</li>
                                </ul>
                                <p><strong>Outcome:</strong> Predictable execution with reduced last-minute dependency.</p>
                            </div>
                        </div>

                        <div className="scope-card">
                            <h3>📈 Performance Tracking & Review</h3>
                            <p>We ensure that monthly activity is measured, reviewed, and refined.</p>
                            <div className="scope-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Platform-level performance tracking</li>
                                    <li>Engagement and reach trends</li>
                                    <li>Content format effectiveness</li>
                                    <li>Actionable insights for improvement</li>
                                </ul>
                                <p><strong>Outcome:</strong> Continuous improvement driven by data.</p>
                            </div>
                        </div>

                        <div className="also-cover">
                            <h3>What We Also Cover</h3>
                            <ul className="benefits-list">
                                <li>✓ Platform hygiene and consistency</li>
                                <li>✓ Caption structure and hashtag logic</li>
                                <li>✓ Cross-posting optimization</li>
                                <li>✓ Content repurposing across platforms</li>
                                <li>✓ Alignment with ongoing campaigns and offers</li>
                                <li>✓ Coordination with paid promotion (if applicable)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'packages' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Monthly Management Packages</h2>
                        <div className="packages-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className="package-card">
                                    <div className="package-header">
                                        <h3>{pkg.name}</h3>
                                        <div className="package-price">₹{pkg.price.toLocaleString()}/month</div>
                                        <p className="package-focus">{pkg.focus}</p>
                                    </div>

                                    <div className="package-content">
                                        <strong>Features:</strong>
                                        <ul className="features-list">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx}>✓ {feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="package-ideal">
                                        <strong>Best for:</strong>
                                        <p>{pkg.ideal}</p>
                                    </div>

                                    <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                                        Choose This Plan
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="ideal-for">
                            <h3>Ideal For</h3>
                            <ul className="benefits-list">
                                <li>✓ Founder-led and owner-managed businesses</li>
                                <li>✓ Hotels, restaurants, and local brands</li>
                                <li>✓ Service businesses and SMEs</li>
                                <li>✓ Brands seeking reliable monthly digital operations</li>
                            </ul>
                        </div>

                        <div className="cta-section">
                            <h3>Ready to Scale Your Social Media?</h3>
                            <p>Choose a package and let us manage your growth.</p>
                            <button className="btn btn-primary btn-large">Get Started Today</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
