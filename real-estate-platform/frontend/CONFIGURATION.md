# Website Configuration Guide

This guide explains how to customize fonts and colors throughout the entire website from centralized locations.

## 🎨 Color Configuration

### File: `src/config/colors.ts`

This file contains all color definitions for the website. Update these values to change colors throughout the entire site.

#### Main Color Categories:

1. **Primary Colors** - Main brand colors (dark blues)
2. **Secondary Colors** - Gray tones for backgrounds and cards
3. **Accent Colors** - Red accents for luxury feel
4. **Background Colors** - Section backgrounds
5. **Text Colors** - All text colors
6. **Border Colors** - Border and divider colors

#### How to Change Colors:

```typescript
// Example: Change the main background color
background: {
  primary: '#1e293b',    // Change this to any color
  secondary: '#0f172a',  // Change this to any color
  // ... other colors
}
```

### File: `src/utils/colors.ts`

This file contains Tailwind CSS class mappings that automatically use the colors from `colors.ts`.

## 🔤 Font Configuration

### File: `src/config/fonts.ts`

This file contains all font definitions for the website. Update these values to change fonts throughout the entire site.

#### Font Categories:

1. **Primary** - Main body text fonts (Heebo, Assistant, Rubik)
2. **Display** - Main headings (Playfair Display, Cormorant Garamond)
3. **Heading** - Section titles (Playfair Display)
4. **Accent** - Navigation and special elements (Assistant, Rubik)
5. **Body** - Paragraph text (Heebo, Assistant)

#### How to Change Fonts:

```typescript
// Example: Change the main body font
primary: {
  family: "'Heebo', 'Assistant', 'Rubik', sans-serif",  // Change this
  weight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.01em'
}
```

### File: `src/app/globals.css`

This file contains the CSS classes that implement the font configuration:

- `.font-luxury-display` - For main headings
- `.font-luxury-heading` - For section titles  
- `.font-luxury-body` - For body text
- `.font-luxury-accent` - For navigation and accents

## 🚀 How to Customize

### To Change Colors:

1. Open `src/config/colors.ts`
2. Find the color you want to change
3. Update the hex value
4. The change will apply throughout the entire website

### To Change Fonts:

1. Open `src/config/fonts.ts`
2. Find the font family you want to change
3. Update the font stack
4. The change will apply throughout the entire website

### To Add New Colors:

1. Add the color to `src/config/colors.ts`
2. Add the corresponding Tailwind class to `src/utils/colors.ts`
3. Use the new class in your components

### To Add New Fonts:

1. Add the font import to `src/app/layout.tsx`
2. Add the font configuration to `src/config/fonts.ts`
3. Add the CSS class to `src/app/globals.css`
4. Use the new class in your components

## 📁 File Structure

```
src/
├── config/
│   ├── colors.ts      # Color definitions
│   └── fonts.ts       # Font definitions
├── utils/
│   └── colors.ts      # Color class mappings
└── app/
    ├── layout.tsx     # Font imports
    └── globals.css    # Font CSS classes
```

## 🎯 Benefits

- **Single Source of Truth**: All colors and fonts defined in one place
- **Easy Customization**: Change entire website appearance by editing one file
- **Consistency**: Ensures consistent styling across all components
- **Maintainability**: Easy to update and maintain
- **Scalability**: Easy to add new colors and fonts

## 💡 Tips

- Always test color changes to ensure good contrast
- Consider accessibility when choosing colors
- Use font stacks with fallbacks for better compatibility
- Keep color and font choices consistent with your brand
