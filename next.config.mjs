/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === "production" ? "/angel-docs" : ""
}

export default nextConfig
