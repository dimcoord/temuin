// next.config.js
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public', // Output directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev for faster dev builds
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true, // Recommended for a smooth e-commerce experience
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js config settings (e.g., experimental features)
};

module.exports = withPWA(nextConfig);