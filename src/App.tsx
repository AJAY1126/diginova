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
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const [currentPage, setCurrentPage] = useState<'home' | 'design' | 'socialmedia' | 'webdev' | 'management' | 'influencer' | 'smallbusiness'>('home')
  const cursorRef = useRef<HTMLDivElement>(null)

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
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {/* <div className="logo-wrapper"> */}
            <img
              src="/images/diginova logo.png"
              alt="DIGINOVA Logo"
              className="logo-image"
              style={{ height: '50px', width: 'auto', maxWidth: '120px', objectFit: 'contain' }}
            />
            {/* </div> */}
            <span className="company-name">DIGINOVA</span>
            <span className="company-tagline">Digital Marketing</span>
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
              <button
                className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage('home')
                  setActiveNav('home')
                  setMobileMenuOpen(false)
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', font: 'inherit' }}
              >
                <a href="#" className={activeNav === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
                  Home
                </a>
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeNav === 'services' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNav('services')
                  setMobileMenuOpen(false)
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', font: 'inherit' }}
              >
                <a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={() => handleNavClick('services')}>
                  Services
                </a>
              </button>
            </li>
            <li>
              <a href="#portfolio" className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => handleNavClick('portfolio')}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
                Contact
              </a>
            </li>
            <li className="mobile-cta">
              <button className="cta-button">Get Started</button>
            </li>
          </ul>

          <button className="cta-button desktop-cta">Get Started</button>
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
          <div
            className="hero-text fadeInUp"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 2),
              transform: `translateY(${Math.min(100, scrollProgress * 500)}px)`,
            }}
          >
            <h1 className="hero-title">Digital Excellence at Scale</h1>
            <p className="hero-subtitle">
              Unlock unprecedented growth with cutting-edge digital marketing strategies
            </p>
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
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}

      {/* Stats Section */}
      <section className="stats">
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
      </section>

      {/* Services Section */}
      <section id="services" className="services" data-scroll-animate>
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored for your business</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
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
            <button
              key={index}
              className={`service-card ${visibleSections['services'] ? 'animate-in' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onClick={() => {
                setCurrentPage(service.page)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-overlay"></div>
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Showcasing our best creations and results</p>
        </div>

        <div className="portfolio-grid">
          {[
            { title: 'E-Commerce Platform', category: 'Web Development' },
            { title: 'Brand Identity', category: 'Design' },
            { title: 'Marketing Campaign', category: 'Marketing' },
            { title: 'Mobile App', category: 'Development' },
          ].map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-bg"></div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's create something amazing together</p>
          <button className="btn btn-primary btn-large">Get Started Today</button>
        </div>
      </section>

      <ContactSection />

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
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>hello@diginova.com</p>
            <p>+91-7395987551</p>
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
          to_email: 'hello@diginova.com', // Your email address where you want to receive messages
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
                  <p>+91-7395987551</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '4px' }}><strong>DIGINOVA</strong></p>
                </div>
                <div>
                  <strong>📧 Email</strong>
                  <p>hello@diginova.com</p>
                </div>
              </div>

              <div className="social-icons" aria-hidden>
                {/* Inline SVG icons */}
                <a href="#" className="social" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-1 .6-1.46.76A4.48 4.48 0 0 0 16.5 0c-2.5 0-4.5 2.2-4.5 4.9 0 .38.04.75.12 1.1C8 6 4.3 4 1.9 1.2c-.4.7-.6 1.5-.6 2.4 0 1.7.8 3.2 2 4.1A4.4 4.4 0 0 1 .8 7v.1c0 2.3 1.6 4.2 3.8 4.6-.3.08-.6.12-.9.12-.2 0-.4 0-.6-.06.4 1.3 1.6 2.3 3 2.3A9 9 0 0 1 0 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.9-7.6 12.9-14.2v-.65A9.1 9.1 0 0 0 23 3z" /></svg>
                </a>
                <a href="#" className="social" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h3.98V24H.5V8zM8.5 8h3.82v2.17h.05c.53-1 1.83-2.17 3.76-2.17 4.02 0 4.76 2.65 4.76 6.1V24h-3.98v-7.4c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.94-2.86 3.94V24H8.5V8z" /></svg>
                </a>
                <a href="#" className="social" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zM19.5 6.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" /></svg>
                </a>
                <a href="#" className="social" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 1.8 1 .6 1.1 1.6.8 2 .6.1-.7.4-1.2.6-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0C18 6.9 19 7.2 19 7.2c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.9v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            {error && <div style={{ color: '#ff006e', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</div>}
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