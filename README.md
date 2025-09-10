# Pascalcase

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS featuring glassmorphism design and premium UI components.

## Features

- 🎨 **Glassmorphism Design** - Modern translucent UI with backdrop blur effects
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🌙 **Dark/Light Theme** - Built-in theme switching support
- ⚡ **Performance Optimized** - Next.js 14 with App Router and ISR
- 🎭 **Smooth Animations** - Framer Motion for premium interactions
- ♿ **Accessibility First** - WCAG AA compliant with proper ARIA labels
- 🔍 **SEO Ready** - Meta tags, Open Graph, and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons
- **Fonts**: Inter, Geist Sans, Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Harshavardhanjakku/pascalcase.git
cd pascalcase
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── BlogBrowser.tsx    # Blog filtering component
│   ├── BlogSlider.tsx     # Blog carousel
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx         # Site footer
│   └── Navbar.tsx         # Navigation
├── lib/                   # Utilities
│   └── blog/             # Blog data and API
└── styles/               # Global styles
```

## Key Components

### BlogBrowser
- Searchable tag filtering system
- LeetCode-style popover interface
- Real-time filtering with counts

### ContactSection
- Glassmorphism contact form
- Floating labels with icons
- Form validation and accessibility

### Footer
- Social media integration
- Responsive grid layout
- Smooth hover animations

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with one click
- **AWS/GCP**: Use Docker containers

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: support@pascalcase.com
- **Website**: [pascalcase.com](https://pascalcase.com)
- **LinkedIn**: [Pascalcase](https://www.linkedin.com/company/pascalcase/mycompany/)

---

Built with ❤️ by the Pascalcase team