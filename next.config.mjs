/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === "production" ? "/angel-docs" : ""
}

export default nextConfig
