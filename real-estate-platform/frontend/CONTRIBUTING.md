# Contributing to Amido Group Frontend

Thank you for your interest in contributing to the Amido Group real estate platform! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   git clone <your-fork-url>
   cd real-estate-platform/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic

### File Structure
```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── config/             # Configuration files
├── utils/              # Utility functions
└── public/             # Static assets
```

### Component Guidelines
- Use functional components with hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Follow the existing naming conventions

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the design system in `src/config/colors.ts`
- Use the centralized font system
- Maintain responsive design

## 🎨 Design System

### Colors
Edit `src/config/colors.ts` to modify the color palette:

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
Edit `src/config/fonts.ts` to modify typography:

```typescript
export const fontConfig = {
  body: {
    fontFamily: "'Heebo', 'Assistant', sans-serif",
  }
};
```

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Writing Tests
- Write unit tests for utility functions
- Test component behavior
- Ensure accessibility compliance

## 📦 Building

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## 🐛 Bug Reports

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 💡 Feature Requests

When requesting features, please include:
- Description of the feature
- Use case and benefits
- Mockups or examples (if applicable)
- Implementation suggestions (if any)

## 🔄 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add tests if applicable
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description
   - Link any related issues
   - Request reviews from maintainers

## 📋 Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review of the code has been performed
- [ ] Code has been commented, particularly in hard-to-understand areas
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] No new warnings or errors are introduced
- [ ] The build passes successfully

## 🏷️ Commit Message Format

Use the following format for commit messages:

```
type: description

- Add: new feature
- Fix: bug fix
- Update: existing feature
- Remove: deprecated feature
- Docs: documentation changes
- Style: formatting changes
- Refactor: code refactoring
- Test: test additions/changes
```

## 📞 Support

For questions and support:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 📄 License

This project is proprietary software. All rights reserved.

---

Thank you for contributing to Amido Group! 🚀

