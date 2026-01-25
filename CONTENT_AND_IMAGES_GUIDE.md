📸 CONTENT & IMAGES INTEGRATION GUIDE
═══════════════════════════════════════════════════════════════════════════════

This guide shows you EXACTLY where to add more content and images to your
DIGINOVA landing page.

═══════════════════════════════════════════════════════════════════════════════

📁 STEP 1: CREATE IMAGES FOLDER
═══════════════════════════════════════════════════════════════════════════════

1. Create a new folder in your project:
   → public/images/

2. Add your images there:
   ├─ public/
   │ ├─ images/
   │ │ ├─ hero-image.png
   │ │ ├─ portfolio-1.jpg
   │ │ ├─ portfolio-2.jpg
   │ │ ├─ portfolio-3.jpg
   │ │ ├─ portfolio-4.jpg
   │ │ ├─ team-member-1.jpg
   │ │ ├─ team-member-2.jpg
   │ │ └─ logo.png

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 1: HERO SECTION - ADD IMAGE & MORE CONTENT
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Lines 130-160)

CURRENT CODE:
───────────────────────────────────────────────────────────────────────────────

<div
  className="hero-image"
  style={{
    transform: `translateY(${scrollProgress * 100}px) translateX(${mousePosition.x * 0.02}px)`,
  }}
>
  <div className="floating-card card-1">
    <div className="card-content">📊</div>
  </div>
  <div className="floating-card card-2">
    <div className="card-content">🚀</div>
  </div>
  <div className="floating-card card-3">
    <div className="card-content">💡</div>
  </div>
</div>

UPDATED CODE (Add Real Image):
───────────────────────────────────────────────────────────────────────────────

<div
  className="hero-image"
  style={{
    transform: `translateY(${scrollProgress * 100}px) translateX(${mousePosition.x * 0.02}px)`,
  }}
>
  <img 
    src="/images/hero-image.png" 
    alt="Digital Marketing Hero"
    className="hero-img"
  />
  <div className="floating-card card-1">
    <div className="card-content">📊</div>
  </div>
  <div className="floating-card card-2">
    <div className="card-content">🚀</div>
  </div>
  <div className="floating-card card-3">
    <div className="card-content">💡</div>
  </div>
</div>

OPTIONAL - ADD MORE CONTENT TO HERO:
───────────────────────────────────────────────────────────────────────────────

<div
  className="hero-text fadeInUp"
  style={{
    opacity: Math.max(0, 1 - scrollProgress * 2),
    transform: `translateY(${Math.min(100, scrollProgress * 500)}px)`,
  }}
>
  <h1 className="hero-title">Transform Your Digital Presence</h1>
  <p className="hero-subtitle">
    Unlock unprecedented growth with cutting-edge digital marketing strategies
  </p>
  
  {/* ADD MORE CONTENT HERE */}
  <div className="hero-stats">
    <div className="stat">
      <span className="stat-number">10+</span>
      <span className="stat-label">Years Experience</span>
    </div>
    <div className="stat">
      <span className="stat-number">500+</span>
      <span className="stat-label">Projects Done</span>
    </div>
    <div className="stat">
      <span className="stat-number">98%</span>
      <span className="stat-label">Satisfaction</span>
    </div>
  </div>
  
  <div className="hero-buttons">
    <button className="btn btn-primary">Start Your Journey</button>
    <button className="btn btn-secondary">Learn More</button>
  </div>
</div>

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.hero-img {
width: 100%;
max-width: 500px;
height: auto;
border-radius: 20px;
box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
}

.hero-stats {
display: flex;
gap: 2rem;
margin: 2rem 0;
flex-wrap: wrap;
}

.stat {
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
}

.stat-number {
font-size: 1.8rem;
font-weight: bold;
background: linear-gradient(135deg, #00d4ff, #6b5cff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.stat-label {
font-size: 0.9rem;
color: rgba(240, 243, 255, 0.7);
}

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 2: SERVICES SECTION - ADD IMAGES & MORE DETAILS
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Lines 195-225)

CURRENT CODE:
───────────────────────────────────────────────────────────────────────────────
{[
{
icon: '🎨',
title: 'Brand Design',
description: 'Stunning visual identities that capture your essence',
},
{
icon: '📱',
title: 'Web Development',
description: 'Responsive, fast, and beautiful websites',
},
// ... more services
].map((service, index) => (

  <div key={index} className="service-card">
    <div className="service-icon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <div className="service-overlay"></div>
  </div>
))}

UPDATED CODE (Add More Details):
───────────────────────────────────────────────────────────────────────────────
{[
{
icon: '🎨',
title: 'Brand Design',
description: 'Stunning visual identities that capture your essence',
image: '/images/brand-design.jpg',
features: ['Logo Design', 'Color Palette', 'Style Guide']
},
{
icon: '📱',
title: 'Web Development',
description: 'Responsive, fast, and beautiful websites',
image: '/images/web-dev.jpg',
features: ['Responsive Design', 'Fast Performance', 'SEO Ready']
},
{
icon: '📈',
title: 'Digital Marketing',
description: 'Strategies that drive growth and engagement',
image: '/images/marketing.jpg',
features: ['Content Strategy', 'Campaign Planning', 'ROI Tracking']
},
{
icon: '🏆',
title: 'SEO Optimization',
description: 'Boost your visibility in search results',
image: '/images/seo.jpg',
features: ['Technical SEO', 'Keyword Research', 'Link Building']
},
{
icon: '💬',
title: 'Social Media',
description: 'Build meaningful connections with your audience',
image: '/images/social-media.jpg',
features: ['Content Creation', 'Community Management', 'Analytics']
},
{
icon: '📊',
title: 'Analytics',
description: 'Data-driven insights for better decisions',
image: '/images/analytics.jpg',
features: ['Reporting', 'Tracking Setup', 'Insights']
},
].map((service, index) => (

  <div key={index} className="service-card">
    <img src={service.image} alt={service.title} className="service-image" />
    <div className="service-icon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <ul className="service-features">
      {service.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
    <div className="service-overlay"></div>
  </div>
))}

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.service-image {
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 20px 20px 0 0;
}

.service-features {
list-style: none;
margin: 1rem 0;
font-size: 0.9rem;
}

.service-features li {
padding: 0.5rem 0;
color: rgba(240, 243, 255, 0.7);
padding-left: 1.5rem;
position: relative;
}

.service-features li:before {
content: '✓';
position: absolute;
left: 0;
color: #00d4ff;
font-weight: bold;
}

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 3: PORTFOLIO SECTION - ADD IMAGES
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Lines 240-265)

CURRENT CODE:
───────────────────────────────────────────────────────────────────────────────
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

UPDATED CODE (Add Images & More Info):
───────────────────────────────────────────────────────────────────────────────
{[
{
title: 'E-Commerce Platform',
category: 'Web Development',
image: '/images/portfolio-1.jpg',
description: 'Modern e-commerce solution with payment integration'
},
{
title: 'Brand Identity',
category: 'Design',
image: '/images/portfolio-2.jpg',
description: 'Complete brand identity from logo to guidelines'
},
{
title: 'Marketing Campaign',
category: 'Marketing',
image: '/images/portfolio-3.jpg',
description: 'Multi-channel campaign achieving 150% ROI'
},
{
title: 'Mobile App',
category: 'Development',
image: '/images/portfolio-4.jpg',
description: 'User-friendly app with 50k+ downloads'
},
].map((item, index) => (

  <div key={index} className="portfolio-item">
    <img 
      src={item.image} 
      alt={item.title}
      className="portfolio-img"
    />
    <div className="portfolio-content">
      <h3>{item.title}</h3>
      <p className="portfolio-category">{item.category}</p>
      <p className="portfolio-description">{item.description}</p>
    </div>
  </div>
))}

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.portfolio-img {
width: 100%;
height: 300px;
object-fit: cover;
border-radius: 20px;
transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-img {
transform: scale(1.05);
}

.portfolio-category {
font-size: 0.85rem;
color: #00d4ff;
margin-bottom: 0.5rem;
}

.portfolio-description {
font-size: 0.95rem;
color: rgba(240, 243, 255, 0.8);
margin-top: 0.5rem;
}

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 4: ADD NEW TEAM SECTION (OPTIONAL)
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Add after Portfolio section, before CTA section)

CODE TO ADD:
───────────────────────────────────────────────────────────────────────────────
{/_ Team Section _/}

<section id="team" className="team">
  <div className="section-header">
    <h2>Meet Our Team</h2>
    <p>Talented professionals dedicated to your success</p>
  </div>

  <div className="team-grid">
    {[
      { 
        name: 'John Smith',
        role: 'Creative Director',
        image: '/images/team-member-1.jpg',
        bio: '10+ years in digital design and branding'
      },
      { 
        name: 'Sarah Johnson',
        role: 'Marketing Lead',
        image: '/images/team-member-2.jpg',
        bio: 'Expert in digital strategy and growth'
      },
      { 
        name: 'Mike Chen',
        role: 'Lead Developer',
        image: '/images/team-member-3.jpg',
        bio: 'Full-stack developer with proven track record'
      },
      { 
        name: 'Emma Wilson',
        role: 'SEO Specialist',
        image: '/images/team-member-4.jpg',
        bio: 'SEO expert with 500+ successful campaigns'
      },
    ].map((member, index) => (
      <div key={index} className="team-member">
        <div className="member-image-wrapper">
          <img src={member.image} alt={member.name} className="member-image" />
        </div>
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
      </div>
    ))}
  </div>
</section>

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.team {
padding: 6rem 2rem;
max-width: 1400px;
margin: 0 auto;
}

.team-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
margin-top: 3rem;
}

.team-member {
text-align: center;
padding: 2rem;
border-radius: 20px;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
transition: all 0.3s ease;
}

.team-member:hover {
transform: translateY(-10px);
background: rgba(255, 255, 255, 0.08);
box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
}

.member-image-wrapper {
width: 150px;
height: 150px;
border-radius: 50%;
overflow: hidden;
margin: 0 auto 1rem;
border: 3px solid #00d4ff;
}

.member-image {
width: 100%;
height: 100%;
object-fit: cover;
}

.member-role {
color: #00d4ff;
font-size: 0.9rem;
font-weight: 600;
margin: 0.5rem 0;
}

.member-bio {
color: rgba(240, 243, 255, 0.7);
font-size: 0.9rem;
margin-top: 0.5rem;
}

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 5: ADD NEW TESTIMONIALS SECTION (OPTIONAL)
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Add after Team section, before CTA)

CODE TO ADD:
───────────────────────────────────────────────────────────────────────────────
{/_ Testimonials Section _/}

<section id="testimonials" className="testimonials">
  <div className="section-header">
    <h2>What Our Clients Say</h2>
    <p>Real feedback from businesses we've helped grow</p>
  </div>

  <div className="testimonials-grid">
    {[
      {
        text: '"DIGINOVA transformed our online presence completely. Amazing results!"',
        author: 'Alex Johnson',
        company: 'Tech StartUp Inc',
        rating: 5
      },
      {
        text: '"Professional team, excellent communication, and outstanding outcomes!"',
        author: 'Maria Garcia',
        company: 'Fashion Boutique Co',
        rating: 5
      },
      {
        text: '"Best investment we made for our digital marketing. Highly recommend!"',
        author: 'David Lee',
        company: 'E-commerce Store',
        rating: 5
      },
    ].map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <div className="star-rating">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="testimonial-text">{testimonial.text}</p>
        <p className="testimonial-author">— {testimonial.author}</p>
        <p className="testimonial-company">{testimonial.company}</p>
      </div>
    ))}
  </div>
</section>

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.testimonials {
padding: 6rem 2rem;
max-width: 1400px;
margin: 0 auto;
}

.testimonials-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 2rem;
margin-top: 3rem;
}

.testimonial-card {
padding: 2rem;
border-radius: 20px;
background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(107, 92, 255, 0.1));
backdrop-filter: blur(10px);
border: 1px solid rgba(0, 212, 255, 0.2);
transition: all 0.3s ease;
}

.testimonial-card:hover {
transform: translateY(-5px);
box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
}

.star-rating {
margin-bottom: 1rem;
font-size: 1.2rem;
}

.testimonial-text {
font-size: 1rem;
color: rgba(240, 243, 255, 0.9);
margin-bottom: 1rem;
font-style: italic;
line-height: 1.6;
}

.testimonial-author {
font-weight: 600;
color: #00d4ff;
margin-bottom: 0.3rem;
}

.testimonial-company {
font-size: 0.85rem;
color: rgba(240, 243, 255, 0.6);
}

═══════════════════════════════════════════════════════════════════════════════

🎯 SECTION 6: ADD ABOUT SECTION (OPTIONAL)
═══════════════════════════════════════════════════════════════════════════════

FILE: src/App.tsx (Add after Hero, before Stats)

CODE TO ADD:
───────────────────────────────────────────────────────────────────────────────
{/_ About Section _/}

<section id="about" className="about">
  <div className="about-container">
    <div className="about-image">
      <img src="/images/about-image.jpg" alt="About Us" />
    </div>
    
    <div className="about-content">
      <h2>About DIGINOVA</h2>
      <p>
        We're a team of digital innovators dedicated to transforming businesses
        through cutting-edge technology and creative strategies.
      </p>
      <p>
        With over 10 years of experience, we've helped 500+ companies achieve
        their digital goals and exceed their expectations.
      </p>
      
      <div className="about-highlights">
        <div className="highlight">
          <span className="highlight-icon">🎯</span>
          <h4>Mission Driven</h4>
          <p>Your success is our mission</p>
        </div>
        <div className="highlight">
          <span className="highlight-icon">💡</span>
          <h4>Innovation First</h4>
          <p>Always ahead of trends</p>
        </div>
        <div className="highlight">
          <span className="highlight-icon">🤝</span>
          <h4>Client Focused</h4>
          <p>Your goals, our priority</p>
        </div>
      </div>
    </div>
  </div>
</section>

ADD THIS CSS TO src/App.css:
───────────────────────────────────────────────────────────────────────────────
.about {
padding: 6rem 2rem;
max-width: 1400px;
margin: 0 auto;
}

.about-container {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 4rem;
align-items: center;
}

.about-image img {
width: 100%;
border-radius: 20px;
box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
}

.about-content h2 {
font-size: 2.5rem;
margin-bottom: 1rem;
background: linear-gradient(135deg, #00d4ff, #6b5cff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.about-content p {
color: rgba(240, 243, 255, 0.8);
font-size: 1.05rem;
line-height: 1.8;
margin-bottom: 1.5rem;
}

.about-highlights {
display: grid;
grid-template-columns: 1fr;
gap: 1.5rem;
margin-top: 2rem;
}

.highlight {
display: flex;
gap: 1rem;
padding: 1.5rem;
border-radius: 15px;
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(0, 212, 255, 0.2);
}

.highlight-icon {
font-size: 2rem;
flex-shrink: 0;
}

.highlight h4 {
color: #00d4ff;
margin-bottom: 0.5rem;
}

.highlight p {
color: rgba(240, 243, 255, 0.7);
font-size: 0.9rem;
margin: 0;
}

@media (max-width: 768px) {
.about-container {
grid-template-columns: 1fr;
gap: 2rem;
}

.about-content h2 {
font-size: 1.8rem;
}
}

═══════════════════════════════════════════════════════════════════════════════

📋 IMAGE SIZE RECOMMENDATIONS
═══════════════════════════════════════════════════════════════════════════════

Hero Image:
• Size: 500px x 500px
• Format: PNG or JPG
• File size: < 200KB

Portfolio Images:
• Size: 800px x 600px
• Format: JPG
• File size: < 150KB

Service Images:
• Size: 400px x 300px
• Format: JPG
• File size: < 100KB

Team Member Images:
• Size: 300px x 300px
• Format: JPG
• File size: < 80KB

About Section Image:
• Size: 600px x 600px
• Format: JPG
• File size: < 180KB

═══════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST: IMPLEMENTING CHANGES
═══════════════════════════════════════════════════════════════════════════════

Step 1: Add Images
□ Create /public/images/ folder
□ Add all your images there
□ Check file sizes (optimize if needed)

Step 2: Update Hero Section
□ Add hero image to App.tsx
□ Add hero stats to App.tsx
□ Add .hero-img CSS

Step 3: Update Services Section
□ Add images and features to service data
□ Update service card JSX to show images
□ Add service image CSS

Step 4: Update Portfolio Section
□ Add images to portfolio items
□ Add descriptions to portfolio
□ Add portfolio image CSS

Step 5 (Optional): Add New Sections
□ Add Team section
□ Add Testimonials section
□ Add About section
□ Add all CSS for new sections

Step 6: Test & Review
□ Run npm run dev
□ Check all images load correctly
□ Test on mobile
□ Verify styling looks good

═══════════════════════════════════════════════════════════════════════════════

🎨 CONTENT WRITING TIPS
═══════════════════════════════════════════════════════════════════════════════

Service Descriptions:
• Keep it short (1-2 sentences)
• Use action words (boost, drive, transform)
• Highlight benefits, not features

Portfolio Descriptions:
• Show results (e.g., "150% ROI increase")
• Use specific numbers
• Keep it 1-2 sentences

Testimonials:
• Use actual client quotes
• Include company name
• Add star rating
• Keep it 1-2 sentences

Team Bios:
• Highlight expertise
• Show experience
• Keep it 1 sentence

═══════════════════════════════════════════════════════════════════════════════

🔍 COMMON MISTAKES TO AVOID
═══════════════════════════════════════════════════════════════════════════════

❌ Don't use very large image files (> 300KB)
✓ Optimize images before uploading

❌ Don't use generic stock images
✓ Use authentic company/team photos

❌ Don't write too much text in descriptions
✓ Keep descriptions concise and impactful

❌ Don't forget alt text for images
✓ Always include descriptive alt text

❌ Don't use poor quality images
✓ Ensure images are high resolution

═══════════════════════════════════════════════════════════════════════════════

💡 FINAL TIPS
═══════════════════════════════════════════════════════════════════════════════

1. Start with Hero and Services sections first
2. Test images load properly in browser
3. Optimize images for web (use Compress.com)
4. Add only what's necessary initially
5. You can always add more sections later
6. Keep consistent image style/quality
7. Use images that match your brand
8. Test on mobile to ensure responsive

═══════════════════════════════════════════════════════════════════════════════

Need Help?
→ Check browser console for image loading errors
→ Ensure image paths are correct (/images/filename.jpg)
→ Use PNG for graphics, JPG for photos
→ Keep images accessible with good alt text

Happy Content Creation! 🚀
═══════════════════════════════════════════════════════════════════════════════
