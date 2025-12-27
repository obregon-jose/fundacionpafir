import type { NextConfig } from "next";
import { SITE_DOMAIN } from "@/lib/seo-config";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [SITE_DOMAIN],
  }
};

export default nextConfig;
