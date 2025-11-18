# NPM-PACKAGE-DOWNLOAD-STAT

A beautiful npm package download statistics viewer built with Next.js, shadcn/ui, Tailwind CSS, and Framer Motion.

## Features

- 🔍 Search for any npm package
- 📊 View download statistics with interactive charts
- 📅 Customizable date ranges (7 days, 30 days, 90 days, 1 year, or custom)
- 📈 Multiple chart views (Daily, Weekly, Monthly, Yearly)
- 👤 Author information and maintainers details
- 📖 README display with markdown rendering
- 🌓 Dark/Light theme toggle
- ✨ Smooth animations with Framer Motion
- 📱 Responsive design

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **Recharts** - Chart library
- **npm Public API** - Package download data

## Usage

1. Enter an npm package name in the search box (e.g., `react`, `lodash`, `express`)
2. Click "Search" or press Enter
3. View download statistics in the charts
4. Switch between Daily, Weekly, Monthly, and Yearly views
5. Use quick date range buttons or select custom dates

## API

This project uses the public npm API:
- `https://api.npmjs.org/downloads/range/{start}:{end}/{package}`
- `https://registry.npmjs.org/{package}`

## License

MIT

