import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the production build in the requested, versioned dist directory.
  distDir: "dist",
};

export default nextConfig;
