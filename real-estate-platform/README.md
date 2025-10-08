# Real Estate Purchase Group Platform

A modern web platform for real estate purchase groups, built with Next.js frontend and NestJS backend.

## 🏗️ Project Structure

```
real-estate-platform/
├── frontend/          # Next.js React application
├── backend/           # NestJS API server
└── README.md
```

## 🚀 Features

### Frontend (Next.js + React)
- **Modern Landing Page**: Beautiful, responsive design with Tailwind CSS
- **Real Estate Projects**: Browse and discover investment opportunities
- **Purchase Groups**: Join or create investment groups
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **TypeScript**: Full type safety throughout the application

### Backend (NestJS + TypeORM)
- **RESTful API**: Complete CRUD operations for projects and purchase groups
- **Database Integration**: SQLite database with TypeORM
- **Entity Models**: Projects and Purchase Groups with relationships
- **CORS Enabled**: Ready for frontend integration
- **Modular Architecture**: Clean separation of concerns

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeORM** - Object-relational mapping
- **SQLite** - Lightweight database
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

The backend API will be available at `http://localhost:3001`

## 📊 Database Models

### Project Entity
- **id**: Primary key
- **name**: Project name
- **description**: Project description
- **location**: Project location
- **totalInvestment**: Total investment amount
- **minimumInvestment**: Minimum investment per participant
- **status**: Project status (planning, active, completed, cancelled)
- **startDate/endDate**: Project timeline
- **imageUrl**: Project image
- **features**: Array of project features
- **expectedReturn**: Expected return percentage

### Purchase Group Entity
- **id**: Primary key
- **name**: Group name
- **description**: Group description
- **organizerName/Email/Phone**: Organizer contact info
- **targetAmount**: Target investment amount
- **currentAmount**: Current raised amount
- **status**: Group status (recruiting, active, completed, cancelled)
- **deadline**: Group deadline
- **benefits**: Array of group benefits
- **discountPercentage**: Group discount
- **projectId**: Foreign key to Project

## 🎨 UI Features

### Landing Page Sections
1. **Hero Section**: Compelling headline with call-to-action buttons
2. **Features Section**: Why choose purchase groups (lower minimums, better terms, shared expertise)
3. **Projects Preview**: Featured real estate projects with investment details
4. **Call-to-Action**: Get started section
5. **Footer**: Links and contact information

### Design Elements
- **Modern Gradient Backgrounds**: Subtle gradients for visual appeal
- **Card-based Layout**: Clean project cards with hover effects
- **Responsive Grid**: Mobile-first responsive design
- **Interactive Elements**: Hover states and smooth transitions
- **Professional Color Scheme**: Blue primary with complementary colors

## 🔧 API Endpoints

### Projects
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get project by ID
- `POST /projects` - Create new project
- `PATCH /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

### Purchase Groups
- `GET /purchase-groups` - Get all purchase groups
- `GET /purchase-groups/:id` - Get purchase group by ID
- `POST /purchase-groups` - Create new purchase group
- `PATCH /purchase-groups/:id` - Update purchase group
- `DELETE /purchase-groups/:id` - Delete purchase group

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy to your preferred platform
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
cd backend
npm run build
# Deploy to your preferred platform
```

## 📝 Development

### Adding New Features
1. **Frontend**: Create components in `src/components/`
2. **Backend**: Add modules in `src/modules/`
3. **Database**: Update entities and run migrations

### Code Style
- ESLint configuration for consistent code style
- TypeScript strict mode enabled
- Prettier for code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for real estate investors**

