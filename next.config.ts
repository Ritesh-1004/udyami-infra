import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  // Suppress hydration warnings from framer-motion
  reactStrictMode: true,
};

export default nextConfig;
