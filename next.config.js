/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // For placeholder images
    dangerouslyAllowSVG: true, // Allow SVG images from placehold.co
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Add this for static exports
  },
  output: 'export', // Static export for Cloudflare Pages
  trailingSlash: true, // Add trailing slashes to improve routing
}

module.exports = nextConfig 