# 777 Skills Website

A modern, responsive website for 777 Skills, LLC - a provider of licensed skill game machines and comprehensive support services in San Antonio, TX and surrounding areas.

## Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **ReactBits Components**: Custom animated components inspired by ReactBits.dev
- **Responsive**: Fully responsive design optimized for all devices
- **Performance**: Optimized for speed with lazy loading and code splitting
- **SEO Optimized**: Includes metadata, structured data, and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings), Inter (body)

## Project Structure

```
app/
├── components/
│   ├── backgrounds/     # Background effect components
│   ├── hero/            # Hero section components
│   ├── products/        # Product showcase components
│   ├── services/        # Services section components
│   ├── about/           # About section components
│   ├── contact/         # Contact form and map
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions
├── products/            # Products page
├── services/            # Services page
├── about/               # About page
└── contact/             # Contact page
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Custom Colors

The project uses the following brand colors:

- **Primary Blue**: `#00B4D8`
- **Primary Orange**: `#F7941D`
- **Dark Navy**: `#0A1128`
- **Accent Cyan**: `#90E0EF`
- **Accent Gold**: `#FFB703`
- **Success Green**: `#06D6A0`

## Components

### Background Effects
- Liquid Chrome
- Aurora
- Iridescence
- Floating Lines
- Dot Grid
- Chroma Grid

### UI Components
- Gradient Text
- Shiny Text
- Electric Button (with click sparks)
- Magnet Button
- Count Up Animation
- Scroll Reveal
- Navigation (with glassmorphism)
- Wave Dividers

### Product Components
- Spotlight Card
- Product Showcase (horizontal scroll)
- Glare Hover Effect

## Pages

- **Homepage**: Hero section, products showcase, services, stats, and contact form
- **Products**: Detailed product listings with filters
- **Services**: Technical support, software services, and customer support
- **About**: Company story, stats, and service areas
- **Contact**: Contact form, business information, and map

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 777 Skills, LLC. All rights reserved.
