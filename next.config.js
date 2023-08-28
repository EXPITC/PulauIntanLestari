/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      // exclude: ["error"],
    },
  },
  images: {
    domains: ["pulauintanlestari.com"],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
