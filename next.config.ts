import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allows production builds even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
