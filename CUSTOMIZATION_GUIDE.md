# DIGINOVA Landing Page - Code Snippets & Customization

## Quick Customization Guide

### 1. Change Company Name & Logo

**File**: `src/App.tsx` (Line ~59)

```jsx
// BEFORE
<div className="logo-section">
  <div className="logo-icon">✦</div>
  <span className="company-name">DIGINOVA</span>
</div>

// AFTER (Example: Your Company)
<div className="logo-section">
  <div className="logo-icon">🚀</div>  {/* Change emoji */}
  <span className="company-name">YOUR COMPANY</span>
</div>
```

---

### 2. Change Color Scheme

**File**: `src/App.css` (Lines 13-22)

```css
:root {
  --primary: #00d4ff; /* Change this - Main color */
  --secondary: #6b5cff; /* Change this - Secondary */
  --accent: #ff006e; /* Change this - Highlight */
  --dark: #0a0e27; /* Background dark */
  --darker: #050a1a; /* Background darker */
  --light: #f0f3ff; /* Text color */
}
```

**Example Custom Colors** (Tech Company):

```css
:root {
  --primary: #00ff88; /* Neon Green */
  --secondary: #0088ff; /* Electric Blue */
  --accent: #ff00ff; /* Magenta */
  --dark: #0a0a1a;
  --darker: #000000;
  --light: #ffffff;
}
```

---

### 3. Update Hero Heading Text

**File**: `src/App.tsx` (Line ~118)

```jsx
// BEFORE
<h1 className="hero-title">Transform Your Digital Presence</h1>

// AFTER
<h1 className="hero-title">Elevate Your Brand Today</h1>
```

---

### 4. Change Hero Subtitle

**File**: `src/App.tsx` (Line ~119)

```jsx
// BEFORE
<p className="hero-subtitle">
  Unlock unprecedented growth with cutting-edge digital marketing strategies
</p>

// AFTER
<p className="hero-subtitle">
  Grow your business with our proven digital solutions and strategies
</p>
```

---

### 5. Update Service List

**File**: `src/App.tsx` (Line ~154-171)

```jsx
// BEFORE
{
  icon: '🎨',
  title: 'Brand Design',
  description: 'Stunning visual identities that capture your essence',
}

// AFTER
{
  icon: '🎯',
  title: 'Strategy Consulting',
  description: 'Custom strategies tailored to your business goals',
}
```

**Available Emojis**:

- 🎨 Design | 📱 Mobile | 💼 Business | 🚀 Growth | 💡 Ideas
- 📊 Analytics | 🎯 Target | 🌟 Star | ⚡ Lightning | 🔥 Hot

---

### 6. Customize Portfolio Items

**File**: `src/App.tsx` (Line ~182-188)

```jsx
// BEFORE
{ title: 'E-Commerce Platform', category: 'Web Development' }

// AFTER
{ title: 'Luxury Fashion Store', category: 'E-Commerce' }
```

**Full Portfolio Update**:

```jsx
[
  { title: 'Project 1 Name', category: 'Category 1' },
  { title: 'Project 2 Name', category: 'Category 2' },
  { title: 'Project 3 Name', category: 'Category 3' },
  { title: 'Project 4 Name', category: 'Category 4' },
].map((item, index) => (
  // ... mapping code
))
```

---

### 7. Update Contact Information

**File**: `src/App.tsx` (Line ~237-240)

```jsx
// BEFORE
<div className="footer-section">
  <h4>Contact</h4>
  <p>hello@diginova.com</p>
  <p>+1 (555) 123-4567</p>
</div>

// AFTER
<div className="footer-section">
  <h4>Contact</h4>
  <p>your-email@yourcompany.com</p>
  <p>+1 (YOUR) PHONE-NUMBER</p>
</div>
```

---

### 8. Change Stats Numbers

**File**: `src/App.tsx` (Line ~141-156)

```jsx
// BEFORE
<div className="stat-item">
  <h3>500+</h3>
  <p>Projects Completed</p>
</div>

// AFTER
<div className="stat-item">
  <h3>250+</h3>
  <p>Happy Customers</p>
</div>
```

---

### 9. Modify Button Text

**File**: `src/App.tsx` (Line ~122, 123)

```jsx
// BEFORE
<button className="btn btn-primary">Start Your Journey</button>
<button className="btn btn-secondary">Learn More</button>

// AFTER
<button className="btn btn-primary">Get Free Consultation</button>
<button className="btn btn-secondary">View Services</button>
```

---

### 10. Add Links to Navigation

**File**: `src/App.tsx` (Line ~62-77)

```jsx
<ul className="nav-links">
  <li>
    <a href="#home" onClick={() => handleNavClick("home")}>
      Home
    </a>
  </li>
  <li>
    <a href="#about" onClick={() => handleNavClick("about")}>
      About
    </a>{" "}
    {/* Add new */}
  </li>
  <li>
    <a href="#services" onClick={() => handleNavClick("services")}>
      Services
    </a>
  </li>
  {/* ... rest of links */}
</ul>
```

---

## Advanced CSS Customizations

### 1. Change Hero Title Font Size

**File**: `src/App.css` (Line ~241)

```css
/* BEFORE */
.hero-title {
  font-size: 4rem;
}

/* AFTER - Make it bigger */
.hero-title {
  font-size: 4.5rem; /* or 3.5rem for smaller */
}
```

---

### 2. Adjust Animation Speed

**File**: `src/App.css` (Line ~327)

```css
/* BEFORE - Logo spins in 20 seconds */
@keyframes spin {
  animation: spin 20s linear infinite;
}

/* AFTER - Make it faster */
.logo-icon {
  animation: spin 10s linear infinite; /* Faster */
}
```

---

### 3. Change Service Card Hover Effect

**File**: `src/App.css` (Line ~475)

```css
/* BEFORE */
.service-card:hover {
  transform: translateY(-10px);
  background: rgba(0, 212, 255, 0.08);
  border-color: var(--primary);
}

/* AFTER - More dramatic */
.service-card:hover {
  transform: translateY(-20px); /* Lifts higher */
  background: rgba(0, 212, 255, 0.15); /* More visible */
  border-color: var(--primary);
}
```

---

### 4. Modify Floating Card Animation

**File**: `src/App.css` (Line ~360)

```css
/* BEFORE - Float up/down 30px */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* AFTER - Float up/down 50px (more) */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px); /* Changed from -30px */
  }
}
```

---

### 5. Change Button Border Radius

**File**: `src/App.css` (Lines ~275, ~294, ~306)

```css
/* BEFORE - Pill shaped */
.btn {
  border-radius: 50px;
}

/* AFTER - Less rounded */
.btn {
  border-radius: 10px;
}

/* AFTER - Completely square */
.btn {
  border-radius: 0px;
}
```

---

## Component Structure Reference

### Service Card Component

```jsx
<div className="service-card">
  <div className="service-icon">EMOJI</div>
  <h3>Title</h3>
  <p>Description</p>
  <div className="service-overlay"></div> {/* Shimmer effect */}
</div>
```

### Portfolio Item Component

```jsx
<div className="portfolio-item">
  <div className="portfolio-bg"></div> {/* Background */}
  <div className="portfolio-content">
    {" "}
    {/* Hover reveal */}
    <h3>Title</h3>
    <p>Category</p>
  </div>
</div>
```

### Glass Container Pattern

```jsx
<div className="glass-container">{/* Cards inside get glass effect */}</div>
```

---

## TypeScript Interfaces Used

```typescript
interface MousePosition {
  x: number;
  y: number;
}
```

**Adding More Interfaces** (if extending):

```typescript
interface Service {
  icon: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
}
```

---

## CSS Variables Reference

### Using Variables in New Styles

```css
/* In your custom CSS */
.custom-element {
  background: var(--glass); /* Transparent white */
  border: 1px solid var(--glass-border); /* Subtle border */
  color: var(--light); /* Light text */
}

.custom-button {
  background: linear-gradient(
    135deg,
    var(--primary),
    /* Cyan */ var(--secondary) /* Purple */
  );
  color: var(--dark);
}

.custom-heading {
  color: var(--accent); /* Hot pink */
}
```

---

## Animation Timing Reference

```javascript
// Animation durations used:
1s   - Main animations (fade, slide)
2s   - Cursor ring pulse
6s   - Floating cards, portfolio shift
7s   - Blob morphing
20s  - Logo rotation (slow)
0.3s - Hover transitions
0.5s - Shimmer overlay
0.6s - Stats slide up
```

---

## Commonly Requested Changes

### 1. Add More Services

```jsx
// In the services array around line 154
// Just add more objects to the array:
{
  icon: '🎓',
  title: 'Training',
  description: 'Employee training programs',
}
```

### 2. Change Section Order

Move the `<section>` blocks in `src/App.tsx` to reorder sections.

### 3. Remove Services

Delete the object from the services array.

### 4. Add New Navigation Link

Add a new `<li>` in the nav-links with href and onClick.

### 5. Change Animation Speed

Modify the animation duration (e.g., 20s → 10s) in @keyframes.

---

## Testing Changes

```bash
# After each change:
npm run dev

# The page hot-reloads automatically!
# Just save the file and see changes instantly
```

---

## Performance Tips

1. **Keep images optimized** (< 100KB each)
2. **Minimize animation count** on mobile
3. **Use CSS animations** (not JavaScript)
4. **Keep color count low** (3-5 colors max)
5. **Test on mobile devices** regularly

---

## Troubleshooting

### Styles Not Updating?

```bash
# Clear cache and restart
npm run dev

# If still stuck, close and reopen:
# Ctrl+C in terminal
# npm run dev again
```

### Animation Too Fast/Slow?

Change the duration number in @keyframes definition.

### Colors Not Working?

Make sure you're changing the CSS variables, not the old values.

### Custom Font Not Loading?

Add to `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap");

body {
  font-family: "YourFont", sans-serif;
}
```

---

## Next Steps

1. ✅ Customize company name & colors
2. ✅ Update services list
3. ✅ Add portfolio items
4. ✅ Update contact info
5. ✅ Test on mobile
6. ✅ Deploy to hosting

---

**Questions?** Refer to:

- `QUICK_START.md` - Getting started
- `FEATURES_COMPLETE.md` - All features
- `VISUAL_GUIDE.md` - Layout diagram
