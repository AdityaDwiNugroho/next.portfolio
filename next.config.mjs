/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  reactStrictMode: true,
  env: {
    REACT_DEV_TOOLS: process.env.NODE_ENV !== "production" ? "true" : "false",
  },
};

export default nextConfig;
