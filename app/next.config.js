/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_URL: "http://localhost:3000",
    FACADE_API_KEY: process.env.FACADE_API_KEY
  }
}

module.exports = nextConfig
