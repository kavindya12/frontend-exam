# E-Commerce Store - Frontend Exam

A modern, clean, and user-friendly React-based e-commerce web application built as part of the frontend practical exam.

## 🚀 Live Demo

**Live Preview**: [Deployed on Vercel/Netlify - Link to be added]

**GitHub Repository**: https://github.com/Vast-Factor/frontend-exam

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Design Decisions](#design-decisions)
- [Improvements Made](#improvements-made)

## 🎯 Overview

This project transforms a basic e-commerce application into a polished, modern, and responsive web application. The focus was on enhancing UI/UX quality, improving code structure, and creating an overall premium user experience.

## ✨ Features

### User Authentication
- Modern login page with illustrative graphics
- Session management with localStorage
- Protected routes for authenticated users

### Product Management
- **Grid View**: Responsive product grid with auto-adjusting columns
- **List View**: Detailed list layout with uniform image sizing
- Category filtering (Electronics, Furniture, Stationery, Accessories)
- Price range filtering
- Search functionality
- Sort by price, name, and rating

### Shopping Cart
- Add/remove products
- Quantity management
- Real-time price calculations
- Tax and shipping calculations
- Empty state with helpful messaging

### Dashboard (Admin)
- Revenue tracking
- Order statistics
- Average order value metrics
- Product inventory status
- Sales overview charts
- Top-selling products
- Recent orders table
- Low stock alerts

### Profile Management
- User information display
- Account settings
- Order history
- Saved addresses

## 🛠 Tech Stack

- **React** (v18.2.0) - Core framework
- **React Router DOM** (v6.20.0) - Navigation and routing
- **Lucide React** (v0.562.0) - Modern icon library
- **CSS3** - Styling with CSS Variables
- **Google Fonts (Inter)** - Professional typography

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/Vast-Factor/frontend-exam.git
cd frontend-exam
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 Usage

### Login Credentials

**Admin Account:**
- Email: `admin@vastfactor.io`
- Password: `admin123`

**Customer Account:**
- Email: `customer@vastfactor.io`
- Password: `customer123`

## 📸 Screenshots

### Login Page
![Login Page](./screenshots/login_page.png)
*Modern login interface with illustrative graphics and clean form design*

### Products - Grid View
![Products Grid](./screenshots/products_grid.png)
*Responsive product grid with category filters and search*

### Products - List View
![Products List](./screenshots/products_list.png)
*Detailed list view with uniform image sizing and professional spacing*

### Shopping Cart
![Cart Page](./screenshots/cart_page.png)
*Clean cart interface with order summary and calculations*

### Admin Dashboard
![Dashboard](./screenshots/dashboard.png)
*Comprehensive dashboard with metrics, charts, and analytics*

## 🎨 Design Decisions

### Color Palette
- **Primary**: Indigo (#4F46E5) - Modern, trustworthy, and premium
- **Secondary**: Pink (#EC4899) - Accent and call-to-action
- **Background**: Soft Gray (#F9FAFB) - Reduces eye strain
- **Surface**: White (#FFFFFF) with subtle shadows for depth

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hierarchy**: Bold headings, medium buttons, regular text
- **Rationale**: Industry-standard for modern UI with excellent readability

### Visual Design
- **Card-Based Layout**: Content grouped with rounded corners (0.5rem - 1rem)
- **Glassmorphism**: Sticky navbar with backdrop blur for modern feel
- **Shadows**: Subtle elevation for depth (box-shadow)
- **Spacing**: Consistent padding and gaps using CSS variables

### Responsive Design
- **CSS Grid**: Auto-adjusting columns based on screen width
- **Flexbox**: Flexible layouts for components
- **Mobile-First**: Graceful degradation for smaller screens

## 🚀 Improvements Made

### UI/UX Quality
✅ **Modern Icons** - Replaced text with Lucide icons for professional feel  
✅ **Hover States** - Added transform and shadow transitions for interactivity  
✅ **Empty States** - Dedicated empty cart state with helpful messaging  
✅ **Visual Feedback** - Loading states, hover effects, and active states  
✅ **Professional Images** - High-quality product images with proper sizing

### Layout & Responsiveness
✅ **CSS Grid System** - Auto-adjusting product grid  
✅ **List View Enhancement** - Uniform 250x200px image containers  
✅ **Proper Image Fitting** - object-fit: contain to show full products  
✅ **Consistent Spacing** - 1.5rem gaps for breathing room  
✅ **Mobile Optimization** - Collapsible navigation and responsive tables

### Code Quality
✅ **CSS Variables** - Centralized theming for easy maintenance  
✅ **Component Structure** - Clean, focused components  
✅ **Semantic HTML** - Proper HTML5 elements  
✅ **Consistent Naming** - Clear, descriptive class names  
✅ **Code Organization** - Separate CSS files for each component

### Features Added
✅ **Dual View Modes** - Grid and List view toggle  
✅ **Advanced Filtering** - Category, price range, and search  
✅ **Sorting Options** - Sort by price, name, rating  
✅ **Cart Management** - Add, remove, update quantities  
✅ **Dashboard Analytics** - Comprehensive metrics and charts

## 📁 Project Structure

```
frontend-exam/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── ProductCard.js
│   │   └── ProductCard.css
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Cart.js
│   │   ├── Cart.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── Profile.js
│   │   └── Profile.css
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── DESIGN_DOCUMENT.md
```

## 🔄 Available Scripts

### `npm start`
Runs the app in development mode on [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

## 📝 License

This project was created for educational purposes as part of a frontend practical exam.

## 👤 Author

**Vast Factor**
- GitHub: [@Vast-Factor](https://github.com/Vast-Factor)

## 📞 Support

For any questions or issues, please open an issue on the GitHub repository.

---

**Note**: This project demonstrates frontend development skills including React, modern CSS, responsive design, and user experience design. The focus was on creating a polished, production-ready application with attention to detail and best practices.
