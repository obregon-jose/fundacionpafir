import type { NextConfig } from "next";
import { SITE_DOMAIN } from "@/lib/seo-config";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp', 'image/png', 'image/gif'],
    domains: [SITE_DOMAIN],
  }
};

export default nextConfig;
