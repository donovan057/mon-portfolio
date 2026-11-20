import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configuration pour l'export statique (GitHub Pages) */
  output: 'export',
  images: {
    unoptimized: true,
  },

  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  basePath: '/mon-portfolio',
};

export default nextConfig;
