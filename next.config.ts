import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/digital-menu-card",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
