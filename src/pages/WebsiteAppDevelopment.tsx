import { useState } from 'react'
import '../styles/ServicePages.css'

export function WebsiteAppDevelopment() {
    const [activeTab, setActiveTab] = useState<'overview' | 'website' | 'app' | 'process' | 'pricing'>('overview')

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="service-hero-content">
                    <h1>Website & Application Design and Development</h1>
                    <p className="service-subtitle">Digital Experience & Technology Enablement</p>
                    <p className="service-description">
                        Digi Nova helps organizations design and build websites and applications as growth infrastructure, not just digital assets.
                    </p>
                </div>
            </section>

            <section className="service-tabs">
                <div className="tab-container">
                    <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        What We Do
                    </button>
                    <button className={`tab-button ${activeTab === 'website' ? 'active' : ''}`} onClick={() => setActiveTab('website')}>
                        Website Design
                    </button>
                    <button className={`tab-button ${activeTab === 'app' ? 'active' : ''}`} onClick={() => setActiveTab('app')}>
                        Application Design
                    </button>
                    <button className={`tab-button ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>
                        Process
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
                            Digi Nova approaches website design and app development as business-critical platforms—systems that influence customer trust, conversion, operational efficiency, and long-term scalability.
                        </p>
                        <p>
                            Our work integrates strategy, user experience, design, and technology to create digital products that are clear, reliable, and purpose-built for business outcomes.
                        </p>

                        <div className="why-section">
                            <h3>Why Digi Nova</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <h4>Business-first digital thinking</h4>
                                    <p>Technology decisions are guided by business value, not trends.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Clarity over complexity</h4>
                                    <p>We build only what is needed—and build it well.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Integrated approach</h4>
                                    <p>Strategy, design, and development work as one system.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Long-term orientation</h4>
                                    <p>Our solutions are designed to scale with the organization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ideal-for">
                            <h3>Ideal For</h3>
                            <ul className="benefits-list">
                                <li>✓ Growing businesses and startups</li>
                                <li>✓ Service-based organizations</li>
                                <li>✓ Hotels, retail, and local enterprises</li>
                                <li>✓ Companies seeking professional digital infrastructure</li>
                            </ul>
                        </div>

                        <div className="philosophy-box">
                            <p><strong>Our Philosophy:</strong> A website or application is not an expense. It is a strategic asset that compounds over time.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'website' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Website Design & Development</h2>
                        <p>We design and develop websites that function as primary business interfaces—not online brochures.</p>

                        <div className="focus-areas">
                            <div className="focus-card">
                                <h3>1. Business-Driven Architecture</h3>
                                <p>We define what the website must achieve:</p>
                                <ul>
                                    <li>Lead generation</li>
                                    <li>Brand credibility</li>
                                    <li>Information clarity</li>
                                    <li>Conversion and action</li>
                                </ul>
                                <p>Content structure, navigation, and page hierarchy are designed to support these goals.</p>
                            </div>

                            <div className="focus-card">
                                <h3>2. User Experience & Clarity</h3>
                                <p>We design for:</p>
                                <ul>
                                    <li>Intuitive navigation</li>
                                    <li>Clear messaging hierarchy</li>
                                    <li>Mobile-first usability</li>
                                    <li>Reduced friction in key user journeys</li>
                                </ul>
                            </div>

                            <div className="focus-card">
                                <h3>3. Design Systems & Brand Consistency</h3>
                                <p>We ensure:</p>
                                <ul>
                                    <li>Visual consistency across all digital touchpoints</li>
                                    <li>Alignment with brand identity and tone</li>
                                    <li>Scalable design components for future growth</li>
                                </ul>
                            </div>

                            <div className="focus-card">
                                <h3>4. Performance & Technical Reliability</h3>
                                <p>Our builds emphasize:</p>
                                <ul>
                                    <li>Fast load times</li>
                                    <li>SEO-ready structure</li>
                                    <li>Secure and stable deployment</li>
                                    <li>Easy content management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="outcome-box">
                            <strong>Outcome:</strong> Websites that increase trust, improve conversion, and support long-term digital growth.
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'app' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Application Design & Development</h2>
                        <p>We help organizations conceptualize and build applications that simplify processes, enhance customer experience, and enable scale.</p>

                        <div className="focus-areas">
                            <div className="focus-card">
                                <h3>1. Problem Definition & Use-Case Clarity</h3>
                                <p>Before development, we define:</p>
                                <ul>
                                    <li>The exact problem the application solves</li>
                                    <li>Target users and usage scenarios</li>
                                    <li>Success metrics and constraints</li>
                                </ul>
                                <p>We avoid feature-heavy builds without clear value.</p>
                            </div>

                            <div className="focus-card">
                                <h3>2. User-Centric App Design</h3>
                                <p>We design applications that prioritize:</p>
                                <ul>
                                    <li>Ease of use</li>
                                    <li>Logical workflows</li>
                                    <li>Minimal learning curve</li>
                                    <li>Clear feedback and interaction patterns</li>
                                </ul>
                            </div>

                            <div className="focus-card">
                                <h3>3. Scalable Technology Architecture</h3>
                                <p>Applications are built with:</p>
                                <ul>
                                    <li>Clean backend structure</li>
                                    <li>Modular components</li>
                                    <li>Integration readiness (CRM, automation, analytics)</li>
                                    <li>Future scalability in mind</li>
                                </ul>
                            </div>

                            <div className="focus-card">
                                <h3>4. Testing, Deployment & Iteration</h3>
                                <p>We ensure:</p>
                                <ul>
                                    <li>Functional and usability testing</li>
                                    <li>Smooth deployment</li>
                                    <li>Feedback-driven improvement cycles</li>
                                </ul>
                            </div>
                        </div>

                        <div className="outcome-box">
                            <strong>Outcome:</strong> Reliable, purpose-built applications that improve efficiency and customer experience.
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
                                    <li>Business objectives and constraints</li>
                                    <li>User needs and operational context</li>
                                    <li>Existing digital gaps</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <h4>Design</h4>
                                <ul>
                                    <li>Information architecture and user flows</li>
                                    <li>UX/UI wireframes and prototypes</li>
                                    <li>Technology and feature prioritization</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <h4>Build</h4>
                                <ul>
                                    <li>Website or app development</li>
                                    <li>Design-system implementation</li>
                                    <li>Content and feature integration</li>
                                </ul>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <h4>Optimize</h4>
                                <ul>
                                    <li>Performance and usability reviews</li>
                                    <li>Iterative improvements</li>
                                    <li>Scalability planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'pricing' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Website & Application Design and Development — Pricing</h2>
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
                                        <td className="service-name">Website Design & Development (Basic)</td>
                                        <td className="outcome">Establishes a professional online presence that builds credibility</td>
                                        <td className="price">From ₹5,000</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Website Design & Development (Advanced)</td>
                                        <td className="outcome">Supports lead generation, content scalability, and business growth</td>
                                        <td className="price">From ₹15,000</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Application Design & Development (Basic)</td>
                                        <td className="outcome">Digitizes simple processes and improves user experience</td>
                                        <td className="price">From ₹15,000</td>
                                    </tr>
                                    <tr>
                                        <td className="service-name">Application Design & Development (Advanced)</td>
                                        <td className="outcome">Enables scalable operations, integrations, and long-term digital growth</td>
                                        <td className="price">Custom</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cta-section">
                            <h3>Build Your Digital Infrastructure</h3>
                            <p>Let's create a website or application that drives growth and efficiency.</p>
                            <button className="btn btn-primary btn-large">Discuss Your Project</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
