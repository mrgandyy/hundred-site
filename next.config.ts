import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // add more hosts later if needed:
      { protocol: "https", hostname: "cdn.discordapp.com" },
      { protocol: "https", hostname: "vrchat.com" },
      // { protocol: "https", hostname: "vrchat.com" },
    ],
  },
};

export default nextConfig;
