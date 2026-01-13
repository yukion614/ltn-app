import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ltn.com.tw",
        port: "",
        pathname: "/**", // 允許該網域下的所有路徑
      },
      {
        protocol: "https",
        hostname: "cache.ltn.com.tw", // 補上這一個
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
