import { colorPalette } from '../config/colors';

// Utility function to generate Tailwind CSS classes from color palette
export const generateColorClasses = (palette: typeof colorPalette) => {
  return {
    // Background classes
    background: {
      primary: 'bg-slate-900',
      secondary: 'bg-slate-800',
      tertiary: 'bg-slate-700',
      card: 'bg-gray-200',
      vision: 'bg-gray-200',
      dark: 'bg-slate-900',
      black: 'bg-black',
    },
    
    // Text classes
    text: {
      primary: 'text-white',
      secondary: 'text-slate-200',
      tertiary: 'text-slate-300',
      light: 'text-slate-400',
      dark: 'text-slate-800',
      vision: 'text-slate-800',
      white: 'text-white',
    },
    
    // Border classes
    border: {
      light: 'border-slate-600',
      medium: 'border-slate-500',
      dark: 'border-slate-400',
      white: 'border-white/30',
    },
    
    // Button classes
    button: {
      primary: 'bg-red-900 text-white hover:bg-red-950',
      secondary: 'bg-slate-700 text-white hover:bg-slate-600',
      accent: 'bg-red-900 text-white hover:bg-red-950',
    },
    
    // Card classes
    card: {
      light: 'bg-slate-800 border border-slate-600 shadow-lg',
      dark: 'bg-slate-900 border border-slate-700 shadow-lg',
      vision: 'bg-gray-200 shadow-2xl',
    }
  };
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

// Helper function to get color value from palette
export const getColorValue = (path: string): string => {
  const keys = path.split('.');
  let value: any = colorPalette;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color path "${path}" not found in palette`);
      return '#000000';
    }
  }
  
  return value;
};

// Helper function to generate CSS custom properties
export const generateCSSVariables = (palette: typeof colorPalette): string => {
  const variables: string[] = [];
  
  const traverse = (obj: any, prefix = '--color') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (typeof value === 'string') {
        variables.push(`${prefix}-${key}: ${value};`);
      } else if (typeof value === 'object') {
        traverse(value, `${prefix}-${key}`);
      }
    });
  };
  
  traverse(palette);
  return variables.join('\n');
};