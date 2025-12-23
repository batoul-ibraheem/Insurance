# Social Insurance Institution - Frontend

A modern frontend application for Social Insurance Institution services built with Next.js, React, and TypeScript.

## Features

- 🌐 **Bilingual Support** - English and Arabic with RTL support
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌙 **Dark Mode** - Light/dark theme with persistence
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🔍 **SEO Optimized** - Complete metadata and sitemap
- ⚡ **Performance** - Optimized for speed

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/batoul-ibraheem/Social-Insurance-Institution.git
cd Social-Insurance-Institution
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Social Insurance Institution
NEXT_PUBLIC_CONTACT_EMAIL=contact@insurance.gov.sy
NEXT_PUBLIC_CONTACT_PHONE=+963-11-123-4567
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run type-check` - Check TypeScript types

## Project Structure

```
├── app/              # Pages and layouts
├── components/       # React components
│   ├── layout/      # Header, Footer
│   ├── home/        # Home page sections
│   ├── contact/     # Contact form
│   ├── faq/         # FAQ accordion
│   └── ui/          # UI components
├── contexts/         # React contexts (Theme, Language)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and i18n
├── types/            # TypeScript type definitions
└── public/           # Static assets
```

## Pages

- **Home** (`/`) - Landing page with hero, stats, features, services, and CTA
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Detailed insurance services
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form and information
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Key Features

### Internationalization (i18n)
- Full English/Arabic translation support
- RTL layout for Arabic
- Language switcher in header
- Persistent language preference

### Theme System
- Light and dark mode
- Theme toggle in header
- Persistent theme preference
- Smooth transitions

### Performance
- Optimized fonts (Next.js font optimization)
- Image optimization
- Code splitting
- SEO metadata

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

See `.env.example` for all available environment variables.

## License

This project is private and proprietary.

## Author

Built for Social Insurance Institution

---

## Contact

- 📧 Email: [batoul7ibraheem@gmail.com](mailto:batoul7ibraheem@gmail.com)
- 📱 Phone: +963938958440
- 💼 LinkedIn: [batoul-ibraheem](https://www.linkedin.com/in/batoul-ibraheem/)

---

**Repository**: [https://github.com/batoul-ibraheem/Social-Insurance-Institution](https://github.com/batoul-ibraheem/Social-Insurance-Institution)
