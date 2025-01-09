/** @type {import('next').NextConfig} */
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export", 
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/angel-docs' : '',
}

export default nextConfig
