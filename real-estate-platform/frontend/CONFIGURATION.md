# 🎨 Configuration Guide

This guide explains how to customize colors and fonts throughout the entire website from a single location.

## 📁 File Structure

```
src/
├── config/
│   ├── colors.ts          # Color palette definitions
│   └── fonts.ts           # Font configuration
├── utils/
│   └── colors.ts          # Color utility functions
└── app/
    └── globals.css        # Global styles and font classes
```

## 🎨 Color Customization

### Primary Configuration File: `src/config/colors.ts`

This file contains all color definitions. Update these values to change colors throughout the website:

```typescript
export const colorPalette = {
  // Primary brand colors
  primary: {
    800: '#1e293b',    // Main dark blue
    900: '#0f172a',    // Darker blue
  },
  
  // Accent colors (burgundy for luxury feel)
  accent: {
    medium: '#991b1b',  // Dark burgundy
    dark: '#7f1d1d',    // Darker burgundy
    hover: '#6b1a1a',   // Even darker burgundy
  },
  
  // Background colors
  background: {
    primary: '#1e293b',    // Main dark blue
    secondary: '#0f172a',  // Darker blue
    card: '#f3f4f6',       // Light gray for cards
  },
  
  // Text colors
  text: {
    primary: '#ffffff',     // White text
    secondary: '#e2e8f0',   // Light gray text
    dark: '#1f2937',        // Dark text for light backgrounds
  }
};
```

### Using Colors in Components

```typescript
import { colorClasses } from '../utils/colors';

// Use predefined classes
<div className={colorClasses.background.primary}>
  <h1 className={colorClasses.text.primary}>Title</h1>
</div>

// Use utility functions
import { getColorValue } from '../utils/colors';
const primaryColor = getColorValue('primary.800'); // Returns '#1e293b'
```

## 🔤 Font Customization

### Primary Configuration File: `src/config/fonts.ts`

```typescript
export const fontConfig = {
  // Primary font for general body text
  body: {
    fontFamily: "'Heebo', 'Assistant', 'Rubik', sans-serif",
    fontWeight: '400',
    letterSpacing: '0.01em',
    lineHeight: '1.6',
  },
  
  // Font for main display headings
  display: {
    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
    fontWeight: '700',
    letterSpacing: '0.05em',
    lineHeight: '1.1',
  }
};
```

### Using Fonts in Components

```typescript
// Use predefined font classes
<h1 className="font-luxury-display">Main Title</h1>
<p className="font-luxury-body">Body text</p>
<button className="font-luxury-accent">Button text</button>
```

## 🎯 Available Font Classes

- `.font-luxury-display` - For main headings and titles
- `.font-luxury-heading` - For section headings
- `.font-luxury-body` - For body text and paragraphs
- `.font-luxury-accent` - For buttons and accent elements

## 🎨 Available Color Classes

### Backgrounds
- `.bg-slate-900` - Main dark background
- `.bg-slate-800` - Secondary dark background
- `.bg-gray-200` - Light card background

### Text Colors
- `.text-white` - Primary white text
- `.text-slate-200` - Light gray text
- `.text-slate-800` - Dark text for light backgrounds

### Buttons
- `.bg-red-900` - Primary burgundy button
- `.hover:bg-red-950` - Darker burgundy on hover

## 🔧 How to Change Colors

1. **Open** `src/config/colors.ts`
2. **Update** the color values you want to change
3. **Save** the file
4. **Colors will automatically update** throughout the website

### Example: Change Primary Color

```typescript
// Before
primary: {
  800: '#1e293b',    // Main dark blue
}

// After
primary: {
  800: '#1e40af',    // Changed to blue
}
```

## 🔧 How to Change Fonts

1. **Open** `src/config/fonts.ts`
2. **Update** the font family values
3. **Update** `src/app/layout.tsx` to import new fonts
4. **Save** the files
5. **Fonts will automatically update** throughout the website

### Example: Add New Font

```typescript
// In layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// In fonts.ts
body: {
  fontFamily: "'Inter', 'Heebo', sans-serif",
}
```

## 📱 Responsive Design

All color and font configurations are responsive and will work across all device sizes.

## 🎨 Theme Support

The current configuration supports:
- ✅ Dark mode (primary theme)
- ✅ Light mode (for cards and vision section)
- ✅ Luxury burgundy accents
- ✅ Hebrew font support
- ✅ RTL (Right-to-Left) support

## 🚀 Benefits

- **Single Source of Truth**: All colors and fonts defined in one place
- **Easy Maintenance**: Change once, update everywhere
- **Type Safety**: TypeScript support for all configurations
- **Consistent Design**: Ensures design consistency across the website
- **Developer Friendly**: Clear documentation and examples

## 📝 Notes

- All color values use hex format (#ffffff)
- Font families should include fallbacks
- Test changes on different screen sizes
- Consider accessibility when changing colors
- Hebrew fonts are prioritized for RTL support