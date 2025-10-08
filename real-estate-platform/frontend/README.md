# Amido Group - Real Estate Platform Frontend

A luxury real estate investment platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Luxury Design**: Dark theme with burgundy accents
- **Hebrew RTL Support**: Full right-to-left language support
- **Responsive Design**: Mobile-first responsive design
- **Modern Animations**: Framer Motion animations
- **Centralized Configuration**: Easy color and font customization
- **Registration Form**: Multi-step investment preference form
- **Image Slideshow**: Dynamic background image rotation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Heebo, Assistant, Rubik, Playfair Display)
- **Icons**: Custom SVG components

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── register/
│   │   └── page.tsx          # Registration form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── Logo.tsx              # Logo component
├── config/
│   └── colors.ts             # Color palette
├── utils/
│   └── colors.ts             # Color utilities
└── public/
    └── background/           # Background images
```

## 🎨 Design System

### Colors
- **Primary**: Dark blue (#1e293b)
- **Secondary**: Darker blue (#0f172a)
- **Accent**: Burgundy (#991b1b)
- **Text**: White and light gray
- **Cards**: Light gray (#f3f4f6)

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Heebo (body text)
- **Accent**: Assistant (buttons, navigation)

### Animations
- **Fade In Up**: Smooth entrance animations
- **Stagger**: Sequential element animations
- **Spring Physics**: Natural motion effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-platform/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `src/config/colors.ts` to change the color palette:

```typescript
export const colorPalette = {
  primary: {
    800: '#1e293b',    // Main dark blue
    900: '#0f172a',    // Darker blue
  },
  accent: {
    medium: '#991b1b',  // Burgundy accent
  }
};
```

### Fonts
Edit `src/config/fonts.ts` to change typography:

```typescript
export const fontConfig = {
  body: {
    fontFamily: "'Heebo', 'Assistant', sans-serif",
  }
};
```

## 📱 Pages

### Landing Page (`/`)
- Hero section with image slideshow
- Features section with alternating layout
- Vision section with gray background
- Solution section with issue vs solution layout
- About Us section
- Contact form

### Registration Page (`/register`)
- Multi-step form
- Personal information
- Investment experience
- Investment preferences
- Investment goals

## 🎯 Key Features

### Image Slideshow
- Automatic background image rotation
- 10-second intervals
- Smooth transitions
- Dynamic image loading

### Registration Form
- Multi-step process
- Conditional fields
- Form validation
- Responsive design

### Animations
- Scroll-triggered animations
- Stagger effects
- Spring physics
- Smooth transitions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom font families
- Extended color palette
- RTL support

## 📦 Dependencies

### Core
- `next`: 15.1.0
- `react`: ^18
- `react-dom`: ^18
- `typescript`: ^5

### Styling
- `tailwindcss`: ^3.3.0
- `autoprefixer`: ^10.0.1
- `postcss`: ^8

### Animations
- `framer-motion`: ^11.0.0

### Development
- `eslint`: ^8
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions, contact the development team.

---

**Amido Group** - Luxury Real Estate Investment Platform
