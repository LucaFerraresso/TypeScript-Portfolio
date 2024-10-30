// next.config.mjs
import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      allowCollectingMemory: true,
      cacheDirectory: path.resolve("./.next/cache"),
      buildDependencies: {
        config: [fileURLToPath(import.meta.url)], // Simula l'uso di __filename in ESM
      },
    };

    return config;
  },
};

export default nextConfig;
