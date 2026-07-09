import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/haveli-caffe-digital-menu",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
