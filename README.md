# NPM-PACKAGE-DOWNLOAD-STAT

A beautiful npm package download statistics viewer built with Next.js, shadcn/ui, Tailwind CSS, and Framer Motion. View download statistics for any npm package with interactive charts and detailed package information.

![NPM Package Download Statistics](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🔍 **Search Packages** - Search for any npm package by name
- 📊 **Interactive Charts** - Visualize download statistics with beautiful charts
- 📅 **Custom Date Ranges** - View stats for 7 days, 30 days, 90 days, 1 year, or custom dates
- 📈 **Multiple Views** - Switch between Daily, Weekly, Monthly, and Yearly chart views
- 👤 **Author Information** - View package author details and maintainers
- 📖 **README Display** - Full markdown README rendering with syntax highlighting
- 🌓 **Dark/Light Theme** - Toggle between dark and light themes
- ✨ **Smooth Animations** - Beautiful Framer Motion animations throughout
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## 🚀 Live Demo

Visit the live application: [https://npm-package-download-stat.vercel.app](https://npm-package-download-stat.vercel.app)

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations
- **Recharts** - Interactive chart library
- **React Markdown** - Markdown rendering
- **npm Public API** - Package download data

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Clone the Repository

```bash
git clone https://github.com/gautammanak1/npm-package-download-stat.git
cd npm-package-download-stat
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Running Locally

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

This project is configured for automatic deployment on Vercel via CI/CD pipeline.

#### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

#### Automatic CI/CD Pipeline

The project includes GitHub Actions workflow for automatic deployment:

- **On Push to Main**: Automatically deploys to Vercel production
- **On Pull Request**: Creates preview deployment
- **Build Status**: Shows build status in GitHub

The CI/CD pipeline is configured in `.github/workflows/vercel.yml`

### Environment Variables

No environment variables are required for this project as it uses public npm APIs.

## 📖 Usage

1. **Search Package**: Enter an npm package name in the search box (e.g., `react`, `lodash`, `express`)
2. **View Statistics**: Click "Search" or press Enter to view download statistics
3. **Explore Charts**: Switch between Daily, Weekly, Monthly, and Yearly views using tabs
4. **Custom Date Range**: Use quick buttons (7 days, 30 days, etc.) or select custom dates
5. **View Details**: Check author information, maintainers, and README

## 🔌 API

This project uses the public npm API:

- **Download Statistics**: `https://api.npmjs.org/downloads/range/{start}:{end}/{package}`
- **Package Info**: `https://registry.npmjs.org/{package}`

No API keys required - all endpoints are public.

## 📁 Project Structure

```
npm-package-download-stat/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── author-info.tsx      # Author information component
│   ├── download-chart.tsx   # Chart component
│   ├── readme-viewer.tsx    # README viewer component
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Theme toggle button
├── lib/
│   ├── npm-api.ts           # npm API integration
│   └── utils.ts             # Utility functions
├── .github/
│   └── workflows/
│       └── vercel.yml       # CI/CD pipeline
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Gautam Manak**

- Website: [https://gautammanak.vercel.app](https://gautammanak.vercel.app)
- GitHub: [@gautammanak1](https://github.com/gautammanak1)

## 🙏 Acknowledgments

- [npm](https://www.npmjs.com/) for the public API
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Vercel](https://vercel.com/) for hosting and deployment

---

Made with ❤️ by [Gautam Manak](https://gautammanak.vercel.app)
