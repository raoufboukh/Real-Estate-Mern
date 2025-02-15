import type { NextConfig } from "next";

const nextConfig: NextConfig = {};
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
