/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercel handles deployment automatically, no output config needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@headlessui/react'],
  },
  images: {
    domains: ['localhost', 'policylabs.ai'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async rewrites() {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    // Ensure URL has protocol
    if (apiUrl && !apiUrl.startsWith('http')) {
      apiUrl = `https://${apiUrl}`;
    }
    return [
      {
        source: '/api/backend/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
  // Environment variables configuration
  env: {
    // All env vars are automatically loaded from .env files
    // This section is only needed for custom variables
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // PWA configuration for mobile optimization
  ...(process.env.NODE_ENV === 'production' && {
    async generateBuildId() {
      return 'policylabs-apss-build';
    },
  }),
};

module.exports = nextConfig;