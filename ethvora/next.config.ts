import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the Cloudflare tunnel origin to fetch dev assets (HMR, chunks, CSS).
  allowedDevOrigins: ["*.trycloudflare.com"],
  images: {
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;
