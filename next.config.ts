import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Add this block to disable ESLint on Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
