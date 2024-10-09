/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["external-content.duckduckgo.com", "encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;
