import { useState } from 'react'
import '../styles/ServicePages.css'

export function InfluencerGrowth({ onBack }: { onBack: () => void }) {
    const [activeTab, setActiveTab] = useState<'overview' | 'approach' | 'expectations' | 'pricing'>('overview')

    const packages = [
        {
            name: 'Creator Starter',
            followers: '0–2K followers',
            price: 'Custom',
            whatWeDo: 'Content planning, profile optimization, static posts, basic reels, posting support',
            focus: 'Consistency, discovery, and early audience growth',
        },
        {
            name: 'Creator Growth',
            followers: '2K–10K followers',
            price: 'Custom',
            whatWeDo: 'Reels with hooks, carousels, content optimization, engagement support, performance review',
            focus: 'Reach acceleration and engagement quality',
        },
        {
            name: 'Influencer Accelerator',
            followers: '10K+ or niche experts',
            price: 'Custom',
            whatWeDo: 'Advanced reels, EFX & voiceovers, content repurposing, DM engagement, analytics-driven optimization',
            focus: 'Authority building and scalable growth',
        },
        {
            name: 'Influencer Pro (Custom)',
            followers: 'Full-time influencers & brand-ready creators',
            price: 'Custom',
            whatWeDo: 'End-to-end account management, advanced video edits, brand alignment, lead & collab support',
            focus: 'Monetization readiness and brand partnerships',
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
                    <h1>Influencer Growth & Personal Brand Acceleration</h1>
                    <p className="service-subtitle">Creator Enablement & Audience Scaling</p>
                    <p className="service-description">
                        Digi Nova helps individuals transition from content creators to credible social media influencers by building the systems, content, and distribution discipline required for sustained audience growth.
                    </p>
                </div>
            </section>

            <section className="service-tabs">
                <div className="tab-container">
                    <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        What We Do
                    </button>
                    <button className={`tab-button ${activeTab === 'approach' ? 'active' : ''}`} onClick={() => setActiveTab('approach')}>
                        Our Approach
                    </button>
                    <button className={`tab-button ${activeTab === 'expectations' ? 'active' : ''}`} onClick={() => setActiveTab('expectations')}>
                        Growth Expectations
                    </button>
                    <button className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>
                        Packages
                    </button>
                </div>
            </section>

            {activeTab === 'overview' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>What We Do</h2>
                        <p>
                            Digi Nova helps individuals transition from content creators to credible social media influencers by building the systems, content, and distribution discipline required for sustained audience growth.
                        </p>
                        <p>
                            <strong>We do not rely on one-off viral moments.</strong> We engineer repeatable visibility, engagement, and follower acquisition through structured content creation, platform intelligence, and execution rigor.
                        </p>
                        <p>
                            If you want to become an influencer, we help you build the capability—not just the content.
                        </p>

                        <div className="ideal-for">
                            <h3>Who This Is For</h3>
                            <ul className="benefits-list">
                                <li>✓ Aspiring influencers and creators</li>
                                <li>✓ Subject-matter experts building personal brands</li>
                                <li>✓ Professionals, founders, and niche creators</li>
                                <li>✓ Individuals serious about long-term influence, not short-term fame</li>
                            </ul>
                        </div>

                        <div className="why-section">
                            <h3>Why Digi Nova</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Creator-first, system-driven approach</h4>
                                    <p>We understand creator challenges and build scalable systems.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>No false promises, only engineered outcomes</h4>
                                    <p>Realistic expectations with defensible growth strategies.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Deep understanding of Instagram mechanics</h4>
                                    <p>Platform-native strategies for maximum reach and engagement.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Execution discipline, not motivational talk</h4>
                                    <p>Systems, processes, and consistent action over rhetoric.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Long-term brand mindset for creators</h4>
                                    <p>Building sustainable influence, not chasing trends.</p>
                                </div>
                            </div>
                        </div>

                        <div className="philosophy-box">
                            <p><strong>Our Philosophy:</strong> Influencers are not born. They are built—through clarity, consistency, and compounding execution.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'approach' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>How We Help You Become an Influencer</h2>

                        <div className="approach-card">
                            <h3>1. Positioning & Creator Identity</h3>
                            <p>We start by defining who you are online and why people should follow you.</p>
                            <div className="approach-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Niche and audience clarity</li>
                                    <li>Content theme and persona definition</li>
                                    <li>Differentiation from similar creators</li>
                                    <li>Platform-specific positioning (Instagram-first, if applicable)</li>
                                </ul>
                                <p><strong>Outcome:</strong> A clear creator identity that algorithms and audiences can understand and reward.</p>
                            </div>
                        </div>

                        <div className="approach-card">
                            <h3>2. Content Creation & Execution Support</h3>
                            <p>We actively support and execute high-performance content formats.</p>
                            <div className="approach-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Reel creation (discovery and reach focused)</li>
                                    <li>Static posts (credibility and consistency)</li>
                                    <li>Carousel posts (education, storytelling, value delivery)</li>
                                    <li>Support with user-generated content (UGC) and creator-led posts</li>
                                    <li>Caption structure, hooks, and CTA optimization</li>
                                </ul>
                                <p><strong>Outcome:</strong> Consistent, platform-native content designed for reach and retention.</p>
                            </div>
                        </div>

                        <div className="approach-card">
                            <h3>3. Viral Mechanics & Algorithm Alignment</h3>
                            <p>We apply proven content mechanics that increase the probability of virality.</p>
                            <div className="approach-details">
                                <strong>Focus areas:</strong>
                                <ul>
                                    <li>Strong first-3-second hooks</li>
                                    <li>Trend and audio alignment (used selectively, not blindly)</li>
                                    <li>Watch-time and completion-rate optimization</li>
                                    <li>Share- and save-worthy content design</li>
                                    <li>Posting cadence aligned to audience behavior</li>
                                </ul>
                                <p><strong>Note:</strong> Virality is not guaranteed—but it can be engineered probabilistically.</p>
                            </div>
                        </div>

                        <div className="approach-card">
                            <h3>4. Account Management & Growth Operations</h3>
                            <p>We manage the operational aspects that most creators neglect.</p>
                            <div className="approach-details">
                                <strong>Includes:</strong>
                                <ul>
                                    <li>Posting consistency and scheduling</li>
                                    <li>Comment and engagement support</li>
                                    <li>Profile optimization (bio, highlights, grids)</li>
                                    <li>Cross-content repurposing</li>
                                    <li>Weekly performance review and adjustment</li>
                                </ul>
                                <p><strong>Outcome:</strong> Reduced friction, higher engagement signals, and compounding reach.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'expectations' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Growth Expectations (Realistic & Defensible)</h2>

                        <div className="expectations-box">
                            <h3>Early-Stage Creators (0–2K followers)</h3>
                            <p>Rapid growth is possible with high-quality, consistent reels.</p>

                            <div className="growth-scenario">
                                <h4>With disciplined execution over ~6 weeks:</h4>
                                <p>
                                    Many creators see <strong>2x–5x follower growth</strong> depending on:
                                </p>
                                <ul>
                                    <li>Content quality</li>
                                    <li>Niche demand</li>
                                    <li>Posting frequency</li>
                                    <li>Audience response</li>
                                </ul>
                                <p className="example">
                                    <em>Example: 1K → 3K–6K+</em>
                                </p>
                            </div>

                            <div className="warning-box">
                                <strong>⚠️ Important Note:</strong> Exceptional outcomes (e.g., 10K+ in weeks) can occur, but are treated as upside scenarios, not promises.
                            </div>
                        </div>

                        <div className="expectations-box">
                            <h3>How We Measure Success</h3>
                            <p>We track more than follower count:</p>
                            <ul className="benefits-list">
                                <li>✓ Reach and impressions</li>
                                <li>✓ Engagement quality (saves, shares, comments)</li>
                                <li>✓ Watch-time and retention</li>
                                <li>✓ Follower conversion rate</li>
                                <li>✓ Content repeatability</li>
                            </ul>
                            <p><strong>Influence is measured by consistency, not spikes.</strong></p>
                        </div>

                        <div className="philosophy-box">
                            <p>This is exactly how McKinsey would frame performance: transparently, defensibly, and with realistic bounds on outcomes.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'pricing' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Influencer Growth Packages</h2>
                        <div className="packages-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className="package-card">
                                    <div className="package-header">
                                        <h3>{pkg.name}</h3>
                                        <div className="package-focus">{pkg.followers}</div>
                                        <div className="package-price">{pkg.price}/month</div>
                                    </div>

                                    <div className="package-content">
                                        <strong>What We Do:</strong>
                                        <p>{pkg.whatWeDo}</p>

                                        <strong>Focus:</strong>
                                        <p>{pkg.focus}</p>
                                    </div>

                                    <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                                        Get in Touch
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cta-section">
                            <h3>Ready to Become a Social Media Influencer?</h3>
                            <p>Choose a package and let's build your influence systematically.</p>
                            <button className="btn btn-primary btn-large">Start Your Creator Journey</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
