import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/haveli-cafe-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
