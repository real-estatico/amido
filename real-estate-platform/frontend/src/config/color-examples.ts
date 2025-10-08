// Example: How to change the color palette
// Simply update the values in src/config/colors.ts

// Example 1: Change to a blue theme
export const blueTheme = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // ... rest of the colors
};

// Example 2: Change to a green theme
export const greenTheme = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  // ... rest of the colors
};

// Example 3: Change to a purple theme
export const purpleTheme = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  // ... rest of the colors
};

// To use a different theme:
// 1. Copy the desired theme colors to src/config/colors.ts
// 2. The entire website will automatically update with the new colors
// 3. All components use the centralized colorClasses system

