import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensures Next.js treats this app directory as the tracing root (fixes multi-lockfile warning)
  outputFileTracingRoot: process.cwd(),
  // Use default .next directory for Vercel deployment
  ...(process.env.NODE_ENV === 'development' && { distDir: '.next-dev' }),
};

export default nextConfig;
