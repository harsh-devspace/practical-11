# Practical 11: React Router Navigation

## Objective
Develop a React application that uses `BrowserRouter`, `Route`, and `Link` to navigate between **Home**, **About**, and **Contact** pages without reloading the entire webpage.

## Topics Covered
- React Router v6 setup with `BrowserRouter`
- Defining client-side route paths using `<Routes>` and `<Route>`
- SPA navigation using `<Link>` without browser reloads
- Tracking active routes with `useLocation()`
- Responsive navigation bar and form handling in routed components

## Project Structure
```
Practical_11/
├── src/
│   ├── App.jsx            # Main app with Routes, Navbar, Home, About, Contact
│   ├── main.jsx           # Entry point wrapped with BrowserRouter
│   └── index.css          # Tailwind CSS styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel SPA rewrite configuration
└── README.md              # Project documentation
```

## Installation & Running Steps
1. Navigate to the project directory:
   ```bash
   cd Practical_11
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the displayed local server URL (usually `http://localhost:5173`).
