import { useState } from 'react'
import '../styles/ServicePages.css'

interface PricingItem {
    service: string
    outcome: string
    price: number
}

export function DesignSystems() {
    const [activeTab, setActiveTab] = useState<'overview' | 'capabilities' | 'pricing'>('overview')

    const pricingData: PricingItem[] = [
        {
            service: 'Poster Design',
            outcome: 'Drives attention and clear message delivery for promotions, offers, and brand communication across print and digital channels',
            price: 250,
        },
        {
            service: 'Banner Design',
            outcome: 'Ensures high visibility and brand consistency for physical or digital placements with strong visual hierarchy',
            price: 350,
        },
        {
            service: 'Pamphlet Design',
            outcome: 'Enables quick, easy understanding of products or services with concise and focused communication',
            price: 250,
        },
        {
            service: 'Poster with Voiceover',
            outcome: 'Increases engagement and recall by combining visual communication with audio storytelling for digital platforms',
            price: 800,
        },
        {
            service: 'Hotel Menu Design',
            outcome: 'Improves customer experience and supports higher order value through clear layout, readability, and pricing hierarchy',
            price: 500,
        },
    ]

    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-content">
                    <h1>Visual Communication & Design Systems</h1>
                    <p className="service-subtitle">Posters, Brochures, Pamphlets, Menu Design</p>
                    <p className="service-description">
                        Digi Nova helps organizations translate their strategy into clear, persuasive visual communication that informs, influences, and converts.
                    </p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="service-tabs">
                <div className="tab-container">
                    <button
                        className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        What We Do
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'capabilities' ? 'active' : ''}`}
                        onClick={() => setActiveTab('capabilities')}
                    >
                        Design Capabilities
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pricing')}
                    >
                        Pricing
                    </button>
                </div>
            </section>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
                <section className="service-content">
                    <div className="content-container">
                        <div className="content-section">
                            <h2>What We Do</h2>
                            <p>
                                We design high-impact posters, brochures, pamphlets, and hotel menus that are not only visually refined but also grounded in customer psychology, brand consistency, and commercial objectives.
                            </p>
                            <p>
                                Our work ensures that every design asset communicates the right message, to the right audience, at the right moment.
                            </p>

                            <div className="how-we-work">
                                <h3>How We Work</h3>
                                <div className="process-steps">
                                    <div className="step">
                                        <div className="step-number">1</div>
                                        <h4>Context & Objective Alignment</h4>
                                        <p>We understand the business objective, target audience, and usage context.</p>
                                    </div>
                                    <div className="step">
                                        <div className="step-number">2</div>
                                        <h4>Message Structuring</h4>
                                        <p>We define what must be communicated—and what should be excluded.</p>
                                    </div>
                                    <div className="step">
                                        <div className="step-number">3</div>
                                        <h4>Design Execution</h4>
                                        <p>We apply brand-aligned visuals, typography, and layout systems.</p>
                                    </div>
                                    <div className="step">
                                        <div className="step-number">4</div>
                                        <h4>Review & Refinement</h4>
                                        <p>Designs are refined for clarity, consistency, and effectiveness.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-section">
                                <h3>Why Digi Nova</h3>
                                <ul className="benefits-list">
                                    <li>✓ Strategy-led design, not decoration</li>
                                    <li>✓ Consistency across all brand touchpoints</li>
                                    <li>✓ Audience-first communication approach</li>
                                    <li>✓ Execution with consulting-level rigor</li>
                                </ul>
                                <p className="philosophy">At Digi Nova, design is a business tool—not a cosmetic layer.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Capabilities Tab */}
            {activeTab === 'capabilities' && (
                <section className="service-content">
                    <div className="content-container">
                        <div className="capabilities-grid">
                            <div className="capability-card">
                                <h3>🎨 Poster Design</h3>
                                <p>We create posters that drive attention and action in both physical and digital environments.</p>
                                <div className="capability-details">
                                    <strong>Use cases:</strong>
                                    <ul>
                                        <li>Product and service launches</li>
                                        <li>Events and promotions</li>
                                        <li>In-store and outdoor communication</li>
                                        <li>Social and digital campaigns</li>
                                    </ul>
                                    <p><strong>Outcome:</strong> Higher recall, faster message comprehension, and improved response rates.</p>
                                </div>
                            </div>

                            <div className="capability-card">
                                <h3>📑 Brochure Design</h3>
                                <p>We design brochures that structure information clearly and support decision-making.</p>
                                <div className="capability-details">
                                    <strong>Use cases:</strong>
                                    <ul>
                                        <li>Corporate profiles</li>
                                        <li>Product and service explanations</li>
                                        <li>Sales enablement material</li>
                                        <li>Investor and stakeholder communication</li>
                                    </ul>
                                    <p><strong>Outcome:</strong> Clear articulation of value propositions and stronger credibility.</p>
                                </div>
                            </div>

                            <div className="capability-card">
                                <h3>📰 Pamphlet Design</h3>
                                <p>We develop concise, focused pamphlets designed for quick consumption and high clarity.</p>
                                <div className="capability-details">
                                    <strong>Use cases:</strong>
                                    <ul>
                                        <li>Awareness campaigns</li>
                                        <li>Local marketing initiatives</li>
                                        <li>On-ground promotions</li>
                                        <li>Informational handouts</li>
                                    </ul>
                                    <p><strong>Outcome:</strong> Efficient message delivery with minimal cognitive load.</p>
                                </div>
                            </div>

                            <div className="capability-card">
                                <h3>🍽️ Hotel Menu Design</h3>
                                <p>We design menus that balance aesthetics, readability, and revenue optimization.</p>
                                <div className="capability-details">
                                    <strong>Considerations:</strong>
                                    <ul>
                                        <li>Menu structure and flow</li>
                                        <li>Pricing psychology</li>
                                        <li>Visual hierarchy of high-margin items</li>
                                        <li>Brand tone and dining experience</li>
                                    </ul>
                                    <p><strong>Outcome:</strong> Improved customer experience and increased average order value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && (
                <section className="service-content">
                    <div className="content-container">
                        <h2>Design Services — Business Outcomes & Pricing</h2>
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
                                    {pricingData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="service-name">{item.service}</td>
                                            <td className="outcome">{item.outcome}</td>
                                            <td className="price">₹{item.price.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="cta-section">
                            <h3>Get in Touch With Us</h3>
                            <p>Ready to create impactful visual communication? Let's discuss your design needs.</p>
                            <button className="btn btn-primary btn-large">Schedule a Consultation</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
