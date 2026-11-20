import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configuration pour l'export statique (GitHub Pages) */
  output: 'export',
  basePath: '/mon-portfolio',
  assetPrefix: '/mon-portfolio/',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;