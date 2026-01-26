import { useState } from 'react'
import '../styles/ServicePages.css'

export function SocialMediaGrowth() {
    const [activeTab, setActiveTab] = useState<'overview' | 'platforms' | 'process' | 'pricing'>('overview')

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="service-hero-content">
                    <h1>Social Media Growth & Video Content Systems</h1>
                    <p className="service-subtitle">Instagram, YouTube, Facebook</p>
                    <p className="service-description">
                        Digi Nova helps organizations build high-impact social media engines that drive visibility, engagement, and long-term brand equity.
                    </p>
                </div>
            </section>

            <section className="service-tabs">
                <div className="tab-container">
                    <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        What We Do
                    </button>
                    <button className={`tab-button ${activeTab === 'platforms' ? 'active' : ''}`} onClick={() => setActiveTab('platforms')}>
                        Platform Capabilities
                    </button>
                    <button className={`tab-button ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>
                        How We Work
                    </button>
                    <button className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`} onClick={() => setActiveTab('pricing')}>
                        Pricing
                    </button>
                </div>
            </section>

            {activeTab === 'overview' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>What We Do</h2>
                        <p>
                            Digi Nova treats social media as a strategic growth channel—designed, executed, and optimized with the same rigor as a core business function.
                        </p>
                        <p>
                            Our work integrates short-form video, long-form video, and static content into a cohesive system aligned to business objectives.
                        </p>

                        <div className="why-section">
                            <h3>Why Digi Nova</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Strategy-first social media</h4>
                                    <p>We start with the business objective, not the post format.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Platform-native thinking</h4>
                                    <p>Content is designed for how each platform actually works.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Systems over virality</h4>
                                    <p>We build repeatable, scalable growth engines—not one-off hits.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Measurement-driven execution</h4>
                                    <p>Decisions are guided by performance signals, not intuition.</p>
                                </div>
                            </div>
                        </div>

                        <div className="philosophy-box">
                            <p><strong>Our Philosophy:</strong> Social media is not a creative expense. It is a strategic growth investment.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'platforms' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Platform Capabilities</h2>

                        <div className="platform-card">
                            <h3>📱 Instagram Growth & Content Strategy</h3>
                            <p>We design Instagram ecosystems that combine reach, relevance, and retention.</p>
                            <div className="platform-details">
                                <strong>Content formats:</strong>
                                <ul>
                                    <li>Reels (short-form video for discovery and reach)</li>
                                    <li>Static posts (brand clarity and message reinforcement)</li>
                                    <li>Carousel posts (education, storytelling, and value articulation)</li>
                                    <li>Engagement formats (polls, Q&A, interactive posts)</li>
                                </ul>
                                <strong>Our focus:</strong>
                                <ul>
                                    <li>Algorithm-aligned content structure</li>
                                    <li>Clear positioning and messaging</li>
                                    <li>Consistent publishing cadence</li>
                                    <li>Performance tracking and optimization</li>
                                </ul>
                                <p><strong>Outcome:</strong> Sustained audience growth, higher-quality engagement, and compounding brand visibility.</p>
                            </div>
                        </div>

                        <div className="platform-card">
                            <h3>▶️ YouTube Content & Video Strategy</h3>
                            <p>We help organizations use YouTube as a long-term brand and authority-building platform.</p>
                            <div className="platform-details">
                                <strong>Content formats:</strong>
                                <ul>
                                    <li>Short-form videos (YouTube Shorts)</li>
                                    <li>Long-form videos (explainers, insights, storytelling)</li>
                                    <li>Repurposed content adapted from other platforms</li>
                                </ul>
                                <strong>Our focus:</strong>
                                <ul>
                                    <li>Topic and audience demand analysis</li>
                                    <li>Video structuring for watch-time and retention</li>
                                    <li>Thumbnail, title, and narrative optimization</li>
                                    <li>Content repurposing across platforms</li>
                                </ul>
                                <p><strong>Outcome:</strong> Higher watch-time, stronger brand authority, and scalable video assets.</p>
                            </div>
                        </div>

                        <div className="platform-card">
                            <h3>📘 Facebook Content & Community Presence</h3>
                            <p>We design Facebook strategies focused on reach efficiency and community relevance.</p>
                            <div className="platform-details">
                                <strong>Content formats:</strong>
                                <ul>
                                    <li>Short videos and reels</li>
                                    <li>Static and carousel posts</li>
                                    <li>Promotional and informational content</li>
                                </ul>
                                <strong>Our focus:</strong>
                                <ul>
                                    <li>Audience targeting and content relevance</li>
                                    <li>Cross-posting and optimization</li>
                                    <li>Integration with paid amplification when required</li>
                                </ul>
                                <p><strong>Outcome:</strong> Improved reach within core audiences and sustained engagement.</p>
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
                                <h4>Diagnose</h4>
                                <ul>
                                    <li>Business goals and brand positioning</li>
                                    <li>Audience behavior and content consumption patterns</li>
                                    <li>Existing content and channel performance</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <h4>Design</h4>
                                <ul>
                                    <li>Platform-specific content strategy</li>
                                    <li>Content pillars and messaging architecture</li>
                                    <li>Publishing calendar and KPIs</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <h4>Execute</h4>
                                <ul>
                                    <li>Video production and post design</li>
                                    <li>Weekly content deployment</li>
                                    <li>Cross-platform coordination</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <h4>Optimize</h4>
                                <ul>
                                    <li>Performance review and insights</li>
                                    <li>Iterative improvement based on data</li>
                                    <li>Scaling of high-performing formats</li>
                                </ul>
                            </div>
                        </div>

                        <div className="ideal-for">
                            <h3>Ideal For</h3>
                            <ul className="benefits-list">
                                <li>✓ Founder-led businesses</li>
                                <li>✓ Hotels, restaurants, and local brands</li>
                                <li>✓ Service providers and SMEs</li>
                                <li>✓ Brands seeking consistent digital presence and growth</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'pricing' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Social Media Content Creation — Pricing</h2>
                        <div className="pricing-table-wrapper">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Business Outcome</th>
                                        <th>Price (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="service-name">Static Post</td>
                                        <td className="outcome">Ensures consistent brand visibility and clear communication</td>
                                        <td className="price">₹250</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Carousel Post (5 slides)</td>
                                        <td className="outcome">Improves understanding and message retention through multi-frame storytelling</td>
                                        <td className="price">₹1,250</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Reel (Basic)</td>
                                        <td className="outcome">Increases reach and discovery through short-form video</td>
                                        <td className="price">₹600</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Reel with Voiceover</td>
                                        <td className="outcome">Enhances clarity and engagement by combining visual storytelling with audio</td>
                                        <td className="price">₹800</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Reel with EFX</td>
                                        <td className="outcome">Maximizes watch-time and shareability through high-retention editing</td>
                                        <td className="price">₹1,200</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Video Editing (Long-form)</td>
                                        <td className="outcome">Professional long-form content tailored to platform requirements</td>
                                        <td className="price">Custom</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cta-section">
                            <h3>Ready to Build Your Social Media Engine?</h3>
                            <p>Let's create a content strategy that drives growth and engagement.</p>
                            <button className="btn btn-primary btn-large">Start Your Growth Journey</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
