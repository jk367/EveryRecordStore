/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // For placeholder images
    dangerouslyAllowSVG: true, // Allow SVG images from placehold.co
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'export', // Add static export for Cloudflare Pages
}

module.exports = nextConfig 