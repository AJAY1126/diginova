import { useState, useEffect, useRef } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import './styles/index.css'

import {
  DesignSystems,
  SocialMediaGrowth,
  WebsiteAppDevelopment,
  SocialMediaManagement,
  InfluencerGrowth,
  SmallBusinessEnablement,
} from './pages'

// Initialize EmailJS (replace with your public key from EmailJS)
emailjs.init('qF1dQuOWKRTjlXtHd')

interface MousePosition {
  x: number
  y: number
}

function App() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeNav, setActiveNav] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [getStartedModal, setGetStartedModal] = useState(false)
  const [logoExpanded, setLogoExpanded] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'design' | 'socialmedia' | 'webdev' | 'management' | 'influencer' | 'smallbusiness'>('home')
  const cursorRef = useRef<HTMLDivElement>(null)
  const [selectedPlan, setSelectedPlan] = useState<number>(2); // 1=Lead,2=Business,3=Pro
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (section: string) => {
    setActiveNav(section)
    setMobileMenuOpen(false)
  }

  // Intersection Observer for on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-scroll-animate]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Render service pages
  const goHome = () => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'design') return <DesignSystems onBack={goHome} />
  if (currentPage === 'socialmedia') return <SocialMediaGrowth onBack={goHome} />
  if (currentPage === 'webdev') return <WebsiteAppDevelopment onBack={goHome} />
  if (currentPage === 'management') return <SocialMediaManagement onBack={goHome} />
  if (currentPage === 'influencer') return <InfluencerGrowth onBack={goHome} />
  if (currentPage === 'smallbusiness') return <SmallBusinessEnablement onBack={goHome} />

  // const check = "✔";
  // const cross = "✖";

  const Icon = ({ name }: { name: string }) => {
    const className =
      name === "check_circle"
        ? "material-symbols-outlined icon check"
        : "material-symbols-outlined icon cancel";

    return <span className={className}>{name}</span>;
  };
  // const Icon = ({ name }: { name: string }) => (
  //   <span className="material-symbols-outlined icon">{name}</span>
  // );



  const col = (i: number) => selectedPlan === i ? "col-active" : "";
  const planData = {
    1: { name: "Lead Landing Plus", price: "₹4,999" },
    2: { name: "Business Website", price: "₹9,999" },
    3: { name: "Pro + AI Agent", price: "₹49,999" }
  };

  const sendWhatsApp = () => {
    const plan = planData[selectedPlan as keyof typeof planData];

    const msg = `Hi DIGINOVA 👋
    I am interested in the *${plan.name}* plan (${plan.price}).
    Please share more details.`;

    const url = `https://wa.me/917395987551?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
  // Home page
  return (

    <div className="app">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button
            className="logo-section"
            onClick={() => {
              setCurrentPage('home')
              setLogoExpanded(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div className={`logo-wrapper ${logoExpanded ? 'expanded' : ''}`} onClick={(e) => {
              e.stopPropagation()
              setLogoExpanded(!logoExpanded)
            }}>
              <img
                src="/images/logo.png"
                alt="DIGINOVA Logo"
                className="logo-image"
                style={{ height: '50px', width: 'auto', maxWidth: '120px', objectFit: 'contain' }}
              />
              <div className="logo-text-wrapper">
                <span className="company-name">DIGINOVA</span>
                <span className="company-tagline">Digital Marketing</span>
              </div>
            </div>
          </button>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              {/* <button
                className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage('home')
                  setActiveNav('home')
                  setMobileMenuOpen(false)
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', font: 'inherit' }}
              > */}
              {/* <a href="#" className={activeNav === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
                Home
              </a> */}
              <button
                className={activeNav === 'home' ? 'active' : ''}
                onClick={() => {
                  setCurrentPage('home')
                  setActiveNav('home')
                  setMobileMenuOpen(false)
                }}
              >
                Home
              </button>
              {/* </button> */}
            </li>
            <li>
              {/* <button
                className={`nav-link ${activeNav === 'services' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav('services')
                  setMobileMenuOpen(false)
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', font: 'inherit' }}
              > */}
              <a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={() => handleNavClick('services')}>
                Services
              </a>
              {/* </button> */}
            </li>
            <li>
              <a href="#price" className={activeNav === 'price' ? 'active' : ''} onClick={() => handleNavClick('price')}>
                Prices
              </a>
            </li>
            <li>
              <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
                Contact
              </a>
            </li>
            <li className="mobile-cta">
              <button className="cta-button" onClick={() => setGetStartedModal(true)}>Get Started</button>
            </li>
          </ul>

          <button className="cta-button desktop-cta" onClick={() => setGetStartedModal(true)}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
        </div>

        <div className="hero-content">
          {/* Scroll Down Indicator */}
          {/* <div className="scroll-down-indicator">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div> */}
          <div
            className="hero-text fadeInUp"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 2),
              transform: `translateY(${Math.min(100, scrollProgress * 500)}px)`,
            }}
          >
            <h1 className="hero-title">Accelerate Your Digital Revenue with Diginova</h1>
            <p className="hero-subtitle">
              We help ambitious businesses scale faster through data-driven marketing, conversion-focused strategy, and performance-led execution. At Diginova, revenue growth isn’t a goal — it’s the outcome.
            </p>
            {/* <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </button>
            </div> */}
          </div>

          <div
            className="hero-image"
            style={{
              transform: `translateY(${scrollProgress * 100}px) translateX(${mousePosition.x * 0.02}px)`,
            }}
          >
            <div className="floating-card card-1">
              <img src="/images/insta.png" alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="floating-card card-2">
              <img src="/images/fb.png" alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="floating-card card-3">
              <img src="/images/linkedin.png" alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="floating-card card-4">
              <img src="/images/youtube.png" alt="YouTube" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="floating-card card-5">
              <img src="/images/googleads.png" alt="GoogleAds" style={{ width: '90%', height: '90%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}

      {/* Stats Section */}
      {/* <section className="stats">
        <div className="glass-container">
          <div className="stat-item">
            <h3>250+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>120+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="services" data-scroll-animate>
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored for your business</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid animate-section">
          {[
            {
              icon: '🎨',
              title: 'Visual Communication',
              description: 'Posters, Brochures, Pamphlets, Menu Design',
              page: 'design' as const,
            },
            {
              icon: '📱',
              title: 'Social Media Growth',
              description: 'Video Content Systems for Instagram, YouTube, Facebook',
              page: 'socialmedia' as const,
            },
            {
              icon: '💻',
              title: 'Web & App Development',
              description: 'Custom websites and applications',
              page: 'webdev' as const,
            },
            {
              icon: '📊',
              title: 'Monthly Management',
              description: 'Social Media Account Management & Growth Operations',
              page: 'management' as const,
            },
            {
              icon: '⭐',
              title: 'Influencer Growth',
              description: 'Creator Enablement & Audience Scaling',
              page: 'influencer' as const,
            },
            {
              icon: '🚀',
              title: 'Small Business',
              description: 'From Local Operations to Scalable Brands',
              page: 'smallbusiness' as const,
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`service-card ${visibleSections['services'] ? 'animate-in' : ''}`}
              onClick={() => {
                setCurrentPage(service.page);
                window.scrollTo(0, 0);
              }}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="know-more-btn"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Navigating to:", service.page);
                  setCurrentPage(service.page)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Know More
              </button>
              <div className="service-overlay"></div>
            </div>
          ))}
        </div>
      </section>




      <section className="pricing" id='price'>
        <div className="pricing-container section-header">
          {/* ===== TITLE ===== */}
          <h2 className="pricing-title ">Simple, Transparent Pricing</h2>
          <p>
            Choose the plan that's right for your business.
          </p>
          {/* <h2 className="pricing-title">Detailed Feature Comparison</h2> */}

          {/* ===== TABLE ===== */}
          <div className="table-wrapper">
            <table className="feature-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th >Lead Landing Plus</th>
                  <th >Business Website</th>
                  <th >Pro Website + AI Agent</th>
                </tr>
              </thead>

              <tbody>
                <tr><td>Structure</td><td className={col(1)}>1-page Landing</td><td className={`bold ${col(2)}`}>Multi-page (up to 5)</td><td className={`bold ${col(3)}`}>Multi-page (up to 10)</td></tr>
                <tr><td>Lead form (Email)</td><td className={col(1)}><Icon name="check_circle" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>WhatsApp & Call Buttons</td><td className={col(1)}><Icon name="check_circle" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>Google Maps Embed</td><td className={col(1)}><Icon name="check_circle" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>SEO Optimization</td><td className={col(1)}>Basic (Title/Meta)</td><td className={col(2)}>Standard</td><td className={`bold ${col(3)}`}>Advanced</td></tr>
                <tr><td>Google Analytics</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={`bold ${col(3)}`}><Icon name="check_circle" /></td></tr>
                <tr><td>Domain (1 Year)</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>Hosting + SSL</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}><Icon name="check_circle" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>Blog Setup</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}>Add-on</td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>Copywriting</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}>Add-on</td><td className={`bold ${col(3)}`}>Basic Included</td></tr>
                <tr><td>AI Agent</td><td className={col(1)}><Icon name="cancel" /></td><td className={col(2)}><Icon name="cancel" /></td><td className={col(3)}><Icon name="check_circle" /></td></tr>
                <tr><td>Revisions</td><td className={col(1)}>1</td><td className={`bold ${col(2)}`}>2</td><td className={`bold ${col(3)}`}>3</td></tr>
                <tr><td>Timeline</td><td className={col(1)}>24-48 hrs</td><td className={col(2)}>5-7 days</td><td className={col(3)}>2-4 weeks</td></tr>

                {/* Bottom select cards inside table */}
                <tr className="select-row">
                  <td>Choose the best plan for you:</td>

                  <td><div
                    onClick={() => setSelectedPlan(1)}
                    className={`mini-card ${selectedPlan === 1 ? "active" : ""}`}>
                    <p>Lead Landing Plus</p><h4>₹4,999</h4>
                  </div></td>

                  <td>
                    <div
                      onClick={() => setSelectedPlan(2)}
                      className={`mini-card ${selectedPlan === 2 ? "active" : ""}`}>
                      {/* <Icon name="check_circle"/> */}
                      <p>Business Website</p><h4>₹9,999</h4>
                    </div>
                  </td>

                  <td>
                    <div
                      onClick={() => setSelectedPlan(3)}
                      className={`mini-card ${selectedPlan === 3 ? "active" : ""}`}>
                      <p>Pro + AI Agent</p><h4>₹49,999</h4>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <div className="wa-btn-wrap">
                      <button className="wa-btn" onClick={sendWhatsApp}>
                        Continue with {planData[selectedPlan as keyof typeof planData].name}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== PLAN CARDS ===== */}
          {/* <div className="plan-header">
                <h1>Choose Your Plan</h1>
                <p>Choose the perfect plan for your business growth.</p>
              </div> */}

          {/* <div className="cards">
                <div className="card">
                  <span className="tag">NEW</span>
                  <h3>Lead Landing Plus</h3>
                  <h2>₹4,999</h2>
                  <button className="btn-light">Get Started</button>
                </div>

                <div className="card popular">
                  <span className="badge">Popular</span>
                  <h3>Business Website</h3>
                  <h2>₹9,999</h2>
                  <button className="btn-primary">Get Started</button>
                </div>

                <div className="card">
                  <span className="tag premium">Premium</span>
                  <h3>Pro + AI Agent</h3>
                  <h2>₹49,999+</h2>
                  <button className="btn-primary">Join Now</button>
                </div>
              </div> */}

          {/* ===== CTA ===== */}
          {/* <div className="cta mt-5">
                <div>
                  <h2>Need a custom enterprise solution?</h2>
                  <p>We offer specialized development for large scale platforms.</p>
                </div>
                <button>Talk to an Expert</button>
              </div> */}
        </div>
      </section>
      <section className='section-cta'>
        <div className="cta mt-5">
          <div>
            <h2>Need a custom enterprise solution?</h2>
            <p>We offer specialized development for large scale platforms.</p>
          </div>
          <button>Talk to an Expert</button>
        </div>

      </section>


      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's create something amazing together</p>
          <button className="btn btn-primary btn-large" onClick={() => setGetStartedModal(true)}>Get Started Today</button>
        </div>
      </section>

      <ContactSection />

      {/* Get Started Modal */}
      {getStartedModal && (
        <div className="modal-overlay" onClick={() => setGetStartedModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setGetStartedModal(false)}>✕</button>
            <div className="modal-header">
              <h2>Let's Start Your Digital Journey</h2>
              <p>Choose a service or explore all our solutions</p>
            </div>
            <div className="modal-animated-bg">
              <div className="modal-orb orb-1"></div>
              <div className="modal-orb orb-2"></div>
              <div className="modal-orb orb-3"></div>
            </div>
            <div className="modal-body">
              <div className="quick-services">
                {[
                  { icon: '🎨', label: 'Design', page: 'design' as const },
                  { icon: '📱', label: 'Social Media', page: 'socialmedia' as const },
                  { icon: '💻', label: 'Web Dev', page: 'webdev' as const },
                  { icon: '📊', label: 'Management', page: 'management' as const },
                ].map((service, idx) => (
                  <button
                    key={idx}
                    className="quick-service-btn"
                    onClick={() => {
                      setCurrentPage(service.page)
                      setGetStartedModal(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span className="service-icon-large">{service.icon}</span>
                    <span>{service.label}</span>
                  </button>
                ))}
              </div>
              <div className="modal-divider">or</div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setGetStartedModal(false)
                }}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <ContactSection /> */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>DIGINOVA</h4>
            <p>Your partner in digital transformation</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>diginova.scalex@gmail.com</p>
            <p>+91-73959 87551</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 DIGINOVA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

// Contact section component
function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [brand, setBrand] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic client-side validation
    if (!name || !phone || !brand || !message) {
      setError('Please fill all fields before submitting.')
      return
    }

    setLoading(true)

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_bst64gb', // Replace with your EmailJS Service ID
        'template_ghw0lf5', // Replace with your EmailJS Template ID
        {
          from_name: name,
          from_phone: phone,
          from_brand: brand,
          from_email: 'contact@diginova.com', // This will appear as sender
          message: message,
          to_email: 'diginova.scalex@gmail.com', // Your email address where you want to receive messages
        }
      )

      setSubmitted(true)
      setShowSnackbar(true)

      // Auto-hide snackbar after 5 seconds
      setTimeout(() => {
        setShowSnackbar(false)
      }, 5000)

      // Clear form after 1 second
      setTimeout(() => {
        setName('')
        setPhone('')
        setBrand('')
        setMessage('')
        setSubmitted(false)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      setLoading(false)
      console.error('EmailJS error:', err)
    }
  }

  return (
    <>
      {/* Snackbar Notification */}
      {showSnackbar && (
        <div className={`snackbar ${showSnackbar ? 'show' : 'hide'}`}>
          <span className="snackbar-icon">✓</span>
          <span className="snackbar-text">Email sent successfully! We'll get back to you soon.</span>
          <button
            className="snackbar-close"
            onClick={() => setShowSnackbar(false)}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}

      <section id="contact" className="contact-section" data-scroll-animate>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-card">
              <h2>Let's create something beautiful</h2>
              <p className="muted">Reach out to us and we'll get back within 24 hours.</p>

              <div className="contact-meta">
                <div>
                  <strong>📞 Phone</strong>
                  <p>+91-73959 87551</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '4px' }}><strong>DIGINOVA</strong></p>
                </div>
                <div>
                  <strong>📧 Email</strong>
                  <p>diginova.scalex@gmail.com</p>
                </div>
              </div>

              <div className="social-icons" aria-hidden>
                {/* Facebook */}
                <a href="https://www.facebook.com/diginovagrowth" target="_blank" rel="noopener noreferrer" className="social" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.5v-3h3V9.5c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/diginova.growth/" target="_blank" rel="noopener noreferrer" className="social" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zM19.5 6.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/diginovascalex/" target="_blank" rel="noopener noreferrer" className="social" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h3.98V24H.5V8zM8.5 8h3.82v2.17h.05c.53-1 1.83-2.17 3.76-2.17 4.02 0 4.76 2.65 4.76 6.1V24h-3.98v-7.4c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.94-2.86 3.94V24H8.5V8z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/917395987551?text=Hi%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="social" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.18 1.6 6.01L0 24l6.2-1.6A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.8c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.68.95.98-3.58-.23-.37A9.8 9.8 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.75 9.75 0 0 1 21.8 12c0 5.4-4.4 9.8-9.8 9.8zm5.39-7.37c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.69-1.66-.94-2.27-.24-.58-.49-.5-.69-.51h-.59c-.2 0-.52.07-.8.37-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.16c.15.2 2.14 3.26 5.18 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.28-.2-.58-.35z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            {error && <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</div>}
            <div className="form-grid">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
              <input
                type="text"
                placeholder="Brand Name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                disabled={loading}
              />
              <textarea
                placeholder="Tell us about your project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading || submitted}
            >
              {loading ? 'Sending...' : submitted ? '✓ Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}