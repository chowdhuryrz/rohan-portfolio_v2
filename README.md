# Rohan Chowdhury - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS
- **Accessibility**: ARIA labels, semantic HTML, reduced-motion and print support
- **Performance**: Small bundle (React vendor chunk + app chunk), fonts fetched in parallel, animation paused off screen
- **SEO Ready**: Meta tags, Open Graph/Twitter cards and a canonical URL
- **Error Handling**: An app-wide error boundary and a branded 404 page
- **Testing**: Vitest and Testing Library

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint with TypeScript rules

## 📦 Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd rohan-portfolio_v2

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Deploy the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload `dist` folder to S3 bucket

### Build Configuration

The production build is optimized with:
- A separate React vendor chunk for long-term caching
- CSS minification
- Modern ES modules
- A `404.html` copy of `index.html`, which static hosts such as Netlify serve for unknown paths so the app can show its own 404 page

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── portfolio/       # Portfolio-specific components
│   └── logos/           # Certification logos
├── config/              # Configuration files
│   ├── constants.ts     # App constants
│   └── data.ts          # Static data
├── hooks/               # Custom React hooks
├── pages/               # Page components
└── test/                # Test setup and build checks (other tests sit next to their code as *.test.ts[x])
```

## 🔧 Configuration

### Environment Variables

None. All content is static and lives in `src/config/`.

### SEO Configuration

Update the meta tags and canonical URL in `index.html` for your deployment.

## 📊 Performance

Lab numbers from Lighthouse 12 (mobile, simulated throttling) against a local gzip server, November 2026:

- **JavaScript**: 182 kB raw, 60 kB gzip, in 2 files
- **Lighthouse**: Performance 93, Accessibility 95, Best Practices 100, SEO 100
- **First Contentful Paint**: 2.5 s
- **Largest Contentful Paint**: 2.6 s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
