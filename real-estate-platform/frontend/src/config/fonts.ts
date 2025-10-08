// Centralized Font Configuration
// Update these settings to change fonts throughout the entire website

export const fontConfig = {
  // Primary Hebrew fonts for body text
  primary: {
    family: "'Heebo', 'Assistant', 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em'
  },

  // Luxury display fonts for main headings
  display: {
    family: "'Playfair Display', 'Cormorant Garamond', serif",
    weight: 700,
    lineHeight: 1.1,
    letterSpacing: '0.05em'
  },

  // Luxury heading fonts for section titles
  heading: {
    family: "'Playfair Display', 'Cormorant Garamond', serif",
    weight: 600,
    lineHeight: 1.2,
    letterSpacing: '0.02em'
  },

  // Accent fonts for navigation and special elements
  accent: {
    family: "'Assistant', 'Rubik', sans-serif",
    weight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.03em'
  },

  // Body text fonts
  body: {
    family: "'Heebo', 'Assistant', sans-serif",
    weight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em'
  }
};

// Font class utilities
export const fontClasses = {
  display: 'font-luxury-display',
  heading: 'font-luxury-heading', 
  body: 'font-luxury-body',
  accent: 'font-luxury-accent'
};

// Font size configurations
export const fontSizes = {
  hero: {
    main: 'text-6xl md:text-8xl',
    sub: 'text-4xl md:text-5xl'
  },
  section: {
    title: 'text-4xl md:text-5xl',
    subtitle: 'text-xl md:text-2xl'
  },
  body: {
    large: 'text-xl',
    medium: 'text-lg',
    small: 'text-sm'
  }
};
