# Color System Documentation

## Overview
The website uses a centralized color system that makes it easy to change the entire color palette from a single location.

## Files Structure
```
src/
├── config/
│   ├── colors.ts          # Main color palette definition
│   └── color-examples.ts  # Example color themes
├── utils/
│   └── colors.ts          # Color utility functions and classes
└── app/
    └── page.tsx           # Main page using the color system
```

## How to Change Colors

### Method 1: Update the Main Color Palette
1. Open `src/config/colors.ts`
2. Modify the color values in the `colorPalette` object
3. Save the file - all components will automatically update

### Method 2: Use Predefined Themes
1. Open `src/config/color-examples.ts`
2. Copy a theme (blueTheme, greenTheme, purpleTheme, etc.)
3. Replace the colors in `src/config/colors.ts` with the copied theme
4. Save the file

## Color System Features

### Centralized Management
- All colors are defined in one place (`src/config/colors.ts`)
- Easy to maintain and update
- Consistent color usage across the entire website

### Predefined Color Classes
The system provides ready-to-use Tailwind classes:
- `colorClasses.background.primary` → `bg-white`
- `colorClasses.text.primary` → `text-gray-800`
- `colorClasses.button.primary` → `bg-gray-800 text-white hover:bg-gray-700`
- `colorClasses.card.light` → `bg-white border border-gray-200 shadow-lg`

### Type Safety
- TypeScript support with proper typing
- IntelliSense autocomplete for color properties
- Compile-time error checking

## Example Usage

```tsx
import { colorClasses } from '../utils/colors';

// Using predefined classes
<div className={colorClasses.card.light}>
  <h1 className={colorClasses.text.primary}>Title</h1>
  <p className={colorClasses.text.secondary}>Description</p>
</div>

// Using button classes
<button className={colorClasses.button.primary}>
  Click me
</button>
```

## Available Color Categories

- **Primary**: Main brand colors
- **Secondary**: Supporting colors (grays)
- **Accent**: Highlight colors
- **Success**: Green colors for success states
- **Error**: Red colors for error states
- **Background**: Background colors
- **Text**: Text colors
- **Border**: Border colors
- **Shadow**: Shadow colors

## Benefits

1. **Easy Maintenance**: Change colors in one place
2. **Consistency**: All components use the same color system
3. **Scalability**: Easy to add new colors or themes
4. **Developer Experience**: Type-safe and well-documented
5. **Performance**: Optimized Tailwind classes

## Future Enhancements

- Dark mode support
- Theme switching
- Color accessibility validation
- Automated color contrast checking

