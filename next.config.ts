import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
