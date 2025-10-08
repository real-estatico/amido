// Centralized Color Configuration
// Update these settings to change colors throughout the entire website

export const colorPalette = {
  // Primary brand colors
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',    // Main dark blue
    900: '#0f172a',    // Darker blue
  },
  
  // Secondary colors (grays)
  secondary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',    // Light gray for cards
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Accent colors (burgundy for luxury feel)
  accent: {
    light: '#fef2f2',
    medium: '#991b1b',  // Dark burgundy
    dark: '#7f1d1d',    // Darker burgundy
    hover: '#6b1a1a',   // Even darker burgundy
  },
  
  // Status colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  
  // Background colors
  background: {
    primary: '#1e293b',    // Main dark blue
    secondary: '#0f172a',  // Darker blue
    tertiary: '#334155',   // Medium blue
    dark: '#0f172a',       // Darkest
    card: '#f3f4f6',       // Light gray for cards
    vision: '#e5e7eb',     // Gray for vision section
  },
  
  // Text colors
  text: {
    primary: '#ffffff',     // White text
    secondary: '#e2e8f0',   // Light gray text
    tertiary: '#cbd5e1',    // Medium gray text
    light: '#94a3b8',       // Light gray text
    white: '#ffffff',       // Pure white
    dark: '#1f2937',        // Dark text for light backgrounds
  },
  
  // Border colors
  border: {
    light: '#475569',
    medium: '#64748b',
    dark: '#94a3b8',
    white: 'rgba(255, 255, 255, 0.3)',
  },
  
  // Shadow colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.2)',
    text: 'rgba(0, 0, 0, 0.5)',
  }
} as const;

export type ColorPalette = typeof colorPalette;
