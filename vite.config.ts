import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";
import { webcrypto } from "crypto";

// Polyfill para crypto.getRandomValues no Node.js
if (!globalThis.crypto) {
  (globalThis as any).crypto = webcrypto;
}

// Só importa o plugin se for build para Cloudflare
const isCloudflare = process.env.DEPLOY_PLATFORM === 'cloudflare';
const plugins = [
  ...mochaPlugins(process.env as any),
  react()
];

if (isCloudflare) {
  const { cloudflare } = require("@cloudflare/vite-plugin");
  plugins.push(cloudflare());
}

export default defineConfig({
  plugins,
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
