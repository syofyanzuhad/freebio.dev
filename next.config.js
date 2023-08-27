/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  reloadOnOnline: false,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["secure.gravatar.com", "github.com"],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
})