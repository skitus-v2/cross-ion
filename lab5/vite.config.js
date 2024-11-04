import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    publicDir: false,
    build: {
      outDir: '../dist',
      minify: false,
      emptyOutDir: true,
    },
    server: {
      port: 3000,
    },
  });
  