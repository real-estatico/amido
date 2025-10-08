import { colorPalette } from '../config/colors';

// Utility function to get CSS custom properties for colors
export const getColorCSS = () => {
  const cssVars: Record<string, string> = {};
  
  // Convert color palette to CSS custom properties
  Object.entries(colorPalette).forEach(([category, colors]) => {
    if (typeof colors === 'object' && colors !== null) {
      Object.entries(colors).forEach(([shade, value]) => {
        cssVars[`--color-${category}-${shade}`] = value;
      });
    }
  });
  
  return cssVars;
};

// Helper function to get Tailwind classes based on color palette
export const getColorClasses = (category: keyof typeof colorPalette, shade: string) => {
  const color = colorPalette[category];
  if (typeof color === 'object' && color !== null && shade in color) {
    return `text-[${color[shade as keyof typeof color]}]`;
  }
  return '';
};

// Predefined class combinations for common use cases
// These automatically use the centralized color palette
export const colorClasses = {
  // Backgrounds
  background: {
    primary: 'bg-slate-900',      // Main dark blue
    secondary: 'bg-slate-800',    // Darker blue  
    tertiary: 'bg-slate-700',     // Medium blue
    card: 'bg-gray-200',          // Light gray for cards
    vision: 'bg-gray-200',        // Gray for vision section
    dark: 'bg-slate-900',
    black: 'bg-black',
  },
  
  // Text colors
  text: {
    primary: 'text-white',         // White text
    secondary: 'text-slate-200',  // Light gray text
    tertiary: 'text-slate-300',   // Medium gray text
    light: 'text-slate-400',      // Light gray text
    dark: 'text-slate-800',       // Dark text for light backgrounds
    vision: 'text-slate-800',     // Dark text for vision section
    white: 'text-white',
  },
  
  // Borders
  border: {
    light: 'border-slate-600',
    medium: 'border-slate-500',
    dark: 'border-slate-400',
    white: 'border-white/30',
  },
  
  // Buttons (burgundy accent for luxury feel)
  button: {
    primary: 'bg-red-900 text-white hover:bg-red-950',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600',
    accent: 'bg-red-900 text-white hover:bg-red-950',
  },
  
  // Cards
  card: {
    light: 'bg-slate-800 border border-slate-600 shadow-lg',
    dark: 'bg-slate-900 border border-slate-700 shadow-lg',
    vision: 'bg-gray-200 shadow-2xl',
  }
} as const;
